/**
 * 3D WebGL Engine using Three.js
 * Features:
 * - Interactive Holographic Cyber Core (Morphing icosahedron + dual orbital gyroscope rings)
 * - Constellation Neural Particle Field (Dynamic drifting particles & glowing connective web)
 * - Mouse Parallax & Inertial Camera Damping
 * - Dynamic Click / Touch Energy Pulses
 * - Viewport Visibility Throttling (Saves GPU/battery when scrolled away)
 */

class Portfolio3DScene {
  constructor(canvasContainerId) {
    this.container = document.getElementById(canvasContainerId);
    if (!this.container) return;

    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.coreGroup = null;
    this.particles = null;
    this.particlePositions = null;
    this.linesMesh = null;
    this.clock = new THREE.Clock();

    // Mouse coordinates & smoothing
    this.mouseX = 0;
    this.mouseY = 0;
    this.targetMouseX = 0;
    this.targetMouseY = 0;
    this.isHoveringHero = true;
    this.isDragging = false;
    this.previousMousePosition = { x: 0, y: 0 };
    this.spinMomentum = { x: 0, y: 0 };
    this.isPaused = false;

    // Config based on device capability
    this.isMobile = window.innerWidth < 768;
    this.particleCount = this.isMobile ? 240 : 550;
    this.maxDistance = this.isMobile ? 55 : 65;

    this.init();
  }

  init() {
    // 1. Scene
    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.FogExp2(0x060913, 0.0016);

    // 2. Camera
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1500);
    this.camera.position.z = this.isMobile ? 190 : 160;

    // 3. Renderer
    try {
      this.renderer = new THREE.WebGLRenderer({
        antialias: !this.isMobile,
        alpha: true,
        powerPreference: "high-performance"
      });
      this.renderer.setSize(width, height);
      this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      this.renderer.outputEncoding = THREE.sRGBEncoding;
      this.container.appendChild(this.renderer.domElement);
    } catch (e) {
      console.warn("WebGL not supported or disabled:", e);
      return;
    }

    // 4. Lighting
    this.setupLighting();

    // 5. Build Cyber Core
    this.buildCyberCore();

    // 6. Build Particle Constellation Network
    this.buildParticleNetwork();

    // 7. Event Listeners
    this.setupEventListeners();

    // 8. Start Animation Loop
    this.animate();
  }

  setupLighting() {
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 0.8);
    this.scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 1.8);
    dirLight1.position.set(100, 100, 100);
    this.scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 1.5);
    dirLight2.position.set(-100, -80, 50);
    this.scene.add(dirLight2);

    const pointLight = new THREE.PointLight(0x38bdf8, 2.5, 300);
    pointLight.position.set(0, 0, 40);
    this.scene.add(pointLight);
  }

  buildCyberCore() {
    this.coreGroup = new THREE.Group();

    // Inner Glowing Polyhedron (Icosahedron)
    const innerGeo = new THREE.IcosahedronGeometry(this.isMobile ? 24 : 32, 1);
    
    // Wireframe material with neon glow
    const wireMat = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      wireframe: true,
      wireframeLinewidth: 2,
      emissive: 0x0284c7,
      emissiveIntensity: 0.7,
      roughness: 0.2,
      metalness: 0.9
    });
    this.innerCore = new THREE.Mesh(innerGeo, wireMat);
    this.coreGroup.add(this.innerCore);

    // Semi-transparent inner crystal
    const crystalGeo = new THREE.IcosahedronGeometry(this.isMobile ? 18 : 24, 0);
    const crystalMat = new THREE.MeshPhysicalMaterial({
      color: 0x818cf8,
      transmission: 0.6,
      opacity: 0.85,
      transparent: true,
      roughness: 0.1,
      metalness: 0.1,
      ior: 1.5
    });
    this.crystalCore = new THREE.Mesh(crystalGeo, crystalMat);
    this.coreGroup.add(this.crystalCore);

    // Orbital Gyroscope Ring 1 (Horizontal axis)
    const ring1Geo = new THREE.TorusGeometry(this.isMobile ? 38 : 48, 0.9, 16, 100);
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7c3aed,
      emissiveIntensity: 0.6,
      roughness: 0.3
    });
    this.ring1 = new THREE.Mesh(ring1Geo, ring1Mat);
    this.ring1.rotation.x = Math.PI / 3;
    this.coreGroup.add(this.ring1);

    // Orbital Gyroscope Ring 2 (Vertical axis)
    const ring2Geo = new THREE.TorusGeometry(this.isMobile ? 44 : 56, 0.8, 16, 100);
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      emissive: 0x0891b2,
      emissiveIntensity: 0.5,
      roughness: 0.3
    });
    this.ring2 = new THREE.Mesh(ring2Geo, ring2Mat);
    this.ring2.rotation.y = Math.PI / 4;
    this.coreGroup.add(this.ring2);

    // Orbital Orbiting Node
    const satelliteGeo = new THREE.SphereGeometry(3, 16, 16);
    const satelliteMat = new THREE.MeshBasicMaterial({ color: 0x34d399 });
    this.satellite = new THREE.Mesh(satelliteGeo, satelliteMat);
    this.satelliteAngle = 0;
    this.coreGroup.add(this.satellite);

    // Position Core slightly to the right on desktop, centered on mobile
    if (!this.isMobile) {
      this.coreGroup.position.set(38, 0, 0);
    } else {
      this.coreGroup.position.set(0, -10, 0);
    }

    this.scene.add(this.coreGroup);
  }

  buildParticleNetwork() {
    this.particleData = [];
    this.particlePositions = new Float32Array(this.particleCount * 3);
    const colors = new Float32Array(this.particleCount * 3);

    const r = this.isMobile ? 140 : 200;
    const colorChoices = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0x818cf8), // Indigo
      new THREE.Color(0xc084fc), // Purple
      new THREE.Color(0x34d399)  // Emerald
    ];

    for (let i = 0; i < this.particleCount; i++) {
      const x = (Math.random() * 2 - 1) * r;
      const y = (Math.random() * 2 - 1) * r;
      const z = (Math.random() * 2 - 1) * (r * 0.8);

      this.particlePositions[i * 3] = x;
      this.particlePositions[i * 3 + 1] = y;
      this.particlePositions[i * 3 + 2] = z;

      // Random drift velocities
      this.particleData.push({
        velocity: new THREE.Vector3(
          (-0.2 + Math.random() * 0.4) * 0.4,
          (-0.2 + Math.random() * 0.4) * 0.4,
          (-0.2 + Math.random() * 0.4) * 0.4
        ),
        numConnections: 0
      });

      const col = colorChoices[Math.floor(Math.random() * colorChoices.length)];
      colors[i * 3] = col.r;
      colors[i * 3 + 1] = col.g;
      colors[i * 3 + 2] = col.b;
    }

    const particlesGeo = new THREE.BufferGeometry();
    particlesGeo.setAttribute("position", new THREE.BufferAttribute(this.particlePositions, 3).setUsage(THREE.DynamicDrawUsage));
    particlesGeo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Particle texture / circular dot
    const canvas = document.createElement("canvas");
    canvas.width = 32;
    canvas.height = 32;
    const ctx = canvas.getContext("2d");
    const gradient = ctx.createRadialGradient(16, 16, 0, 16, 16, 16);
    gradient.addColorStop(0, "rgba(255,255,255,1)");
    gradient.addColorStop(0.3, "rgba(56,189,248,0.8)");
    gradient.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 32, 32);

    const pTexture = new THREE.CanvasTexture(canvas);

    const particlesMat = new THREE.PointsMaterial({
      size: this.isMobile ? 3.5 : 4.5,
      map: pTexture,
      transparent: true,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.particles = new THREE.Points(particlesGeo, particlesMat);
    this.scene.add(this.particles);

    // Dynamic Connecting Lines between nearby particles
    const maxLineSegments = this.particleCount * 4;
    this.linePositions = new Float32Array(maxLineSegments * 6);
    this.lineColors = new Float32Array(maxLineSegments * 6);

    const linesGeo = new THREE.BufferGeometry();
    linesGeo.setAttribute("position", new THREE.BufferAttribute(this.linePositions, 3).setUsage(THREE.DynamicDrawUsage));
    linesGeo.setAttribute("color", new THREE.BufferAttribute(this.lineColors, 3).setUsage(THREE.DynamicDrawUsage));

    const linesMat = new THREE.LineBasicMaterial({
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    this.linesMesh = new THREE.LineSegments(linesGeo, linesMat);
    this.scene.add(this.linesMesh);
  }

  setupEventListeners() {
    window.addEventListener("resize", () => this.onWindowResize());

    // Mouse movement parallax
    window.addEventListener("mousemove", (e) => {
      this.targetMouseX = (e.clientX / window.innerWidth) * 2 - 1;
      this.targetMouseY = -(e.clientY / window.innerHeight) * 2 + 1;

      if (this.isDragging) {
        const deltaX = e.clientX - this.previousMousePosition.x;
        const deltaY = e.clientY - this.previousMousePosition.y;

        this.spinMomentum.y += deltaX * 0.003;
        this.spinMomentum.x += deltaY * 0.003;

        this.previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    });

    // Drag to spin Cyber Core
    this.container.addEventListener("mousedown", (e) => {
      this.isDragging = true;
      this.previousMousePosition = { x: e.clientX, y: e.clientY };
      this.triggerEnergyPulse();
    });

    window.addEventListener("mouseup", () => {
      this.isDragging = false;
    });

    // Touch support for mobile
    this.container.addEventListener("touchstart", (e) => {
      if (e.touches.length === 1) {
        this.isDragging = true;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
        this.triggerEnergyPulse();
      }
    }, { passive: true });

    window.addEventListener("touchmove", (e) => {
      if (this.isDragging && e.touches.length === 1) {
        const deltaX = e.touches[0].clientX - this.previousMousePosition.x;
        const deltaY = e.touches[0].clientY - this.previousMousePosition.y;
        this.spinMomentum.y += deltaX * 0.004;
        this.spinMomentum.x += deltaY * 0.004;
        this.previousMousePosition = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      }
    }, { passive: true });

    window.addEventListener("touchend", () => {
      this.isDragging = false;
    });

    // Viewport Visibility Observer (pause when hero is scrolled out of view)
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        this.isPaused = !entry.isIntersecting;
      });
    }, { threshold: 0.05 });

    observer.observe(this.container);

    // Scroll parallax reaction
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      if (this.coreGroup && scrollY < 1200) {
        this.coreGroup.position.y = (this.isMobile ? -10 : 0) - scrollY * 0.08;
        this.camera.position.z = (this.isMobile ? 190 : 160) + scrollY * 0.04;
      }
    }, { passive: true });
  }

  triggerEnergyPulse() {
    if (!this.crystalCore || !this.innerCore) return;
    // Brief emission flash
    this.innerCore.material.emissiveIntensity = 2.2;
    this.crystalCore.scale.set(1.25, 1.25, 1.25);
    setTimeout(() => {
      if (this.innerCore) this.innerCore.material.emissiveIntensity = 0.7;
      if (this.crystalCore) this.crystalCore.scale.set(1.0, 1.0, 1.0);
    }, 350);
  }

  onWindowResize() {
    if (!this.container || !this.renderer || !this.camera) return;
    const width = this.container.clientWidth || window.innerWidth;
    const height = this.container.clientHeight || window.innerHeight;

    this.isMobile = window.innerWidth < 768;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    if (this.coreGroup) {
      if (this.isMobile) {
        this.coreGroup.position.set(0, -10, 0);
      } else {
        this.coreGroup.position.set(38, 0, 0);
      }
    }
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    if (this.isPaused) return;

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Smooth mouse coordinate interpolation (lerp)
    this.mouseX += (this.targetMouseX - this.mouseX) * 0.05;
    this.mouseY += (this.targetMouseY - this.mouseY) * 0.05;

    // 2. Animate Cyber Core
    if (this.coreGroup) {
      // Base continuous rotation
      this.innerCore.rotation.x += 0.008;
      this.innerCore.rotation.y += 0.012;
      this.crystalCore.rotation.x -= 0.006;
      this.crystalCore.rotation.y -= 0.009;

      this.ring1.rotation.x += 0.015;
      this.ring1.rotation.z += 0.01;

      this.ring2.rotation.y -= 0.012;
      this.ring2.rotation.x += 0.008;

      // Orbiting satellite node
      this.satelliteAngle += 0.035;
      const orbitR = this.isMobile ? 42 : 54;
      this.satellite.position.x = Math.cos(this.satelliteAngle) * orbitR;
      this.satellite.position.y = Math.sin(this.satelliteAngle) * (orbitR * 0.7);
      this.satellite.position.z = Math.sin(this.satelliteAngle * 2) * 20;

      // Apply drag spin momentum with friction decay
      this.coreGroup.rotation.y += this.spinMomentum.y;
      this.coreGroup.rotation.x += this.spinMomentum.x;
      this.spinMomentum.x *= 0.93;
      this.spinMomentum.y *= 0.93;

      // Subtle mouse tilt tracking
      this.coreGroup.rotation.y += (this.mouseX * 0.35 - (this.coreGroup.rotation.y % (Math.PI * 2))) * 0.02;
      this.coreGroup.rotation.x += (-this.mouseY * 0.35 - (this.coreGroup.rotation.x % (Math.PI * 2))) * 0.02;

      // Subtle floating breathing motion
      this.coreGroup.position.y += Math.sin(elapsedTime * 1.5) * 0.04;
    }

    // 3. Camera parallax
    this.camera.position.x += (this.mouseX * 12 - this.camera.position.x) * 0.03;
    this.camera.position.y += (this.mouseY * 12 - this.camera.position.y) * 0.03;
    this.camera.lookAt(0, 0, 0);

    // 4. Update Particle Constellation & Connections
    this.updateParticles();

    // 5. Render Scene
    this.renderer.render(this.scene, this.camera);
  }

  updateParticles() {
    let lineIndex = 0;
    let colorIndex = 0;
    const rBound = this.isMobile ? 150 : 210;

    for (let i = 0; i < this.particleCount; i++) {
      const pData = this.particleData[i];

      // Update positions with velocities
      this.particlePositions[i * 3] += pData.velocity.x;
      this.particlePositions[i * 3 + 1] += pData.velocity.y;
      this.particlePositions[i * 3 + 2] += pData.velocity.z;

      // Bounce back within bounds
      if (Math.abs(this.particlePositions[i * 3]) > rBound) pData.velocity.x = -pData.velocity.x;
      if (Math.abs(this.particlePositions[i * 3 + 1]) > rBound) pData.velocity.y = -pData.velocity.y;
      if (Math.abs(this.particlePositions[i * 3 + 2]) > rBound * 0.8) pData.velocity.z = -pData.velocity.z;

      // Connect to neighbors within distance threshold (limit connections to save computation)
      let connections = 0;
      for (let j = i + 1; j < this.particleCount; j++) {
        if (connections >= 3) break;

        const dx = this.particlePositions[i * 3] - this.particlePositions[j * 3];
        const dy = this.particlePositions[i * 3 + 1] - this.particlePositions[j * 3 + 1];
        const dz = this.particlePositions[i * 3 + 2] - this.particlePositions[j * 3 + 2];
        const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (dist < this.maxDistance) {
          const alpha = 1.0 - dist / this.maxDistance;

          this.linePositions[lineIndex++] = this.particlePositions[i * 3];
          this.linePositions[lineIndex++] = this.particlePositions[i * 3 + 1];
          this.linePositions[lineIndex++] = this.particlePositions[i * 3 + 2];

          this.linePositions[lineIndex++] = this.particlePositions[j * 3];
          this.linePositions[lineIndex++] = this.particlePositions[j * 3 + 1];
          this.linePositions[lineIndex++] = this.particlePositions[j * 3 + 2];

          const lineIntensity = alpha * 0.45;
          // Sky blue to purple tint
          this.lineColors[colorIndex++] = 0.22 * lineIntensity;
          this.lineColors[colorIndex++] = 0.74 * lineIntensity;
          this.lineColors[colorIndex++] = 0.97 * lineIntensity;

          this.lineColors[colorIndex++] = 0.65 * lineIntensity;
          this.lineColors[colorIndex++] = 0.33 * lineIntensity;
          this.lineColors[colorIndex++] = 0.97 * lineIntensity;

          connections++;
        }
      }
    }

    this.particles.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.position.needsUpdate = true;
    this.linesMesh.geometry.attributes.color.needsUpdate = true;
    this.linesMesh.geometry.setDrawRange(0, lineIndex / 3);
  }
}

// Global initialization hook
window.Portfolio3DScene = Portfolio3DScene;
