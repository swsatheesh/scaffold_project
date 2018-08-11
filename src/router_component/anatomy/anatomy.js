import React, { Component } from "react";
import PropTypes from "prop-types";

import gltfFile from "../../models/gltf/R2-D2.gltf";

import THREE from "./three";

var OrbitControls = require("three-orbit-controls")(THREE);

// GLTFLoader(THREE);

class Anatomy extends Component {
  constructor() {
    super();
    this.renderCanvas = null;
    this.controls = null;
    this.canvasSpec = {
      width: window.innerWidth,
      height: window.innerHeight
    };
  }
  componentDidMount() {
    const { width, height } = this.canvasSpec;
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 1);
    this.renderCanvas.appendChild(renderer.domElement);
    renderer.gammaOutput = true;
    let camera, scene, controls;
    let cube;

    var loader = new THREE.GLTFLoader();
    function init() {
      camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.25,
        20
      );
      // camera.position.y = 150;
      // camera.position.z = 1000;
      camera.position.set(-1.8, 0.9, 2.7);
      camera.lookAt(new THREE.Vector3(-1, 0, 0));
      scene = new THREE.Scene();

      var light = new THREE.AmbientLight(0x404040); // soft white light
      scene.add(light);

      //   let geometry = new THREE.BoxGeometry(200, 200, 200);
      //   for (let i = 0; i < geometry.faces.length; i += 2) {
      //     let hex = Math.random() * 0xffffff;
      //     geometry.faces[i].color.setHex(hex);
      //     geometry.faces[i + 1].color.setHex(hex);
      //   }

      //   let material = new THREE.MeshBasicMaterial({
      //     vertexColors: THREE.FaceColors,
      //     overdraw: 0.5
      //   });
      //   cube = new THREE.Mesh(geometry, material);
      //   cube.position.y = 150;
      //     scene.add(cube);

      loader.parse(
        gltfFile,
        "",
        gltf => {
          gltf.scene.position.set(-0.5, -0.7, 1);
          scene.add(gltf.scene);
          gltf.animations;
          gltf.scene;
          gltf.scenes;
          gltf.cameras;
          gltf.asset;
        },
        function(xhr) {
          console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
        },
        function(error) {
          console.log(error);
        }
      );

      controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, -0.2, -0.2);
      controls.update();
      window.addEventListener("resize", onWindowResize, false);
    }
    function onWindowResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    const animate = () => {
      this.requestId = requestAnimationFrame(animate);
      renderer.render(scene, camera);
      renderer.setSize(window.innerWidth - 100, window.innerHeight - 200);
      controls.update();

      //   cube.rotation.y += 0.05;
      //   cube.rotation.x += 0.02;
      //   cube.rotation.z += 0.03;
    };

    init();
    animate();
  }
  render() {
    return (
      <div
        ref={canvas => {
          this.renderCanvas = canvas;
        }}
      />
    );
  }
}

Anatomy.propTypes = {};

export default Anatomy;
