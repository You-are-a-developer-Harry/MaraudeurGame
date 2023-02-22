import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export function Dice({ diceValue }: { diceValue: number }) {
	const canvasRef = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();

		const camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);
		camera.position.z = 1;

		// renderer
		const renderer = new THREE.WebGLRenderer({
			// @ts-ignore
			canvas: canvasRef.current,
			antialias: true,
			alpha: true
		});
		renderer.setSize(window.innerWidth, window.innerHeight)
		renderer.setPixelRatio(window.devicePixelRatio)
		renderer.setClearColor(0x000000, 0.9);

		window.addEventListener("resize", () => {
			renderer.setSize(window.innerWidth, window.innerHeight)
			renderer.setPixelRatio(window.devicePixelRatio)
			camera.aspect = window.innerWidth / window.innerHeight
			camera.updateProjectionMatrix()
		})

		// cube
		let texture_ft = new THREE.TextureLoader().load('image/1.png');
		let texture_bk = new THREE.TextureLoader().load('image/2.png');
		let texture_up = new THREE.TextureLoader().load('image/3.png');
		let texture_dn = new THREE.TextureLoader().load('image/4.png');
		let texture_rt = new THREE.TextureLoader().load('image/5.png');
		let texture_lf = new THREE.TextureLoader().load('image/6.png');

		// set color depending on house of player
		let color = 0xB33429;
		let house = 'serdaigle';

		switch (house) {
			case 'griffondor':
				color = 0xB33429;
				break;
			case 'serpentard':
				color = 0x386A2C;
				break;
			case 'poufsouffle':
				color = 0xDFBE45;
				break;
			case 'serdaigle':
				color = 0x408FB1;
				break;
			default: 'griffondor'
				color = 0xB33429;
				break;
		}

		let materialArray = [
			new THREE.MeshBasicMaterial({
				map: texture_rt,
				transparent: true,
				color: color,
			}),
			new THREE.MeshBasicMaterial({
				map: texture_lf,
				transparent: true,
				color: color,
			}),
			new THREE.MeshBasicMaterial({
				map: texture_up,
				transparent: true,
				color: color,
			}),
			new THREE.MeshBasicMaterial({
				map: texture_dn,
				transparent: true,
				color: color,
			}),
			new THREE.MeshBasicMaterial({
				map: texture_ft,
				transparent: true,
				color: color,
			}),
			new THREE.MeshBasicMaterial({
				map: texture_bk,
				transparent: true,
				color: color,
			})
		];


		for (let i = 0; i < materialArray.length; i++) {
			materialArray[i].onBeforeCompile = function (shader) {
				const custom_map_fragment = THREE.ShaderChunk.map_fragment.replace(
					`diffuseColor *= sampledDiffuseColor;`,
					`diffuseColor = vec4( mix( diffuse, sampledDiffuseColor.rgb, sampledDiffuseColor.a ), opacity );`
				);

				shader.fragmentShader = shader.fragmentShader.replace('#include <map_fragment>', custom_map_fragment);
			};
		}

		const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
		const cube = new THREE.Mesh(geometry, materialArray);
		scene.add(cube);

		const loopingTime = 100;
		let timeWhenClick = 0;
		let count = 0;

		texture_ft = new THREE.TextureLoader().load(`${"image/" + diceValue.toString() + ".png"}`);
		materialArray[4].map = texture_ft;

		// each image : 60fps
		const update = (time: any) => {
			requestAnimationFrame(update)
			if (count == 200) {
				count = 0
			} else if (count >= loopingTime) {
				cube.rotation.x = 0
				cube.rotation.y = 0
				timeWhenClick = 0
				count++

			} else if (timeWhenClick < loopingTime) {
				cube.rotation.x = time / 100;
				cube.rotation.y = time / 100;
				count++

			}
			// Render WebGL Scene
			renderer.render(scene, camera);
		}
		requestAnimationFrame(update)
	}, [diceValue])

	return (
		<canvas ref={canvasRef} id='canvas' style={{ position: "absolute", top: 0 }}></canvas>
	)
}

export default Dice
