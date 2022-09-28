/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import { useScroll } from './ScrollControls';
import { GLTF } from 'three-stdlib';
import { useFrame } from '@react-three/fiber';
import { useControls } from 'leva';
import gsap from 'gsap';
import { sceneState } from '../../utils/sceneState';
import { useSnapshot } from 'valtio';

type GLTFResult = GLTF & {
  nodes: {
    light_fd: THREE.Mesh;
    root: THREE.Mesh;
    light_ar: THREE.Mesh;
    glass: THREE.Mesh;
  };
  materials: {};
};

export function NeonGLTF(props: JSX.IntrinsicElements['group']) {
  const { nodes } = useGLTF('/sign.gltf') as GLTFResult;
  const glassRef = useRef<THREE.Mesh>(null);
  const frLightRef = useRef<THREE.MeshBasicMaterial>(null);
  const arLightRef = useRef<THREE.MeshBasicMaterial>(null);
  const materialProps = useControls('GlassMaterial', {
    thickness: { value: 0.2, min: 0, max: 20 },
    roughness: { value: 0.3, min: 0, max: 1, step: 0.1 },
    clearcoat: { value: 1, min: 0, max: 1, step: 0.1 },
    clearcoatRoughness: { value: 0, min: 0, max: 1, step: 0.1 },
    transmission: { value: 1, min: 0.9, max: 1, step: 0.01 },
    ior: { value: 1.25, min: 1, max: 2.3, step: 0.05 },
    envMapIntensity: { value: 25, min: 0, max: 100, step: 1 },
    color: '#ffffff',
    attenuationTint: '#584b25',
    attenuationDistance: { value: 0, min: 0, max: 1 },
    toggleVisible: true,
  });

  const lightProps = useControls('LightMaterial', {
    color: '#c4b072',
    opacity: { value: 0.3, min: 0, max: 1, step: 0.1 },
    emissive: '#c4b072',
    offColor: '#0d0c08',
    activeColor: '#6d5b27',
    inActiveColor: '#2e2815',
  });
  const argonProps = useControls('ArgonMaterial', {
    offColor: '#0d0c08',
    activeColor: '#258291',
    inActiveColor: '#0b2a2f',
  });
  const neonControl = useControls('Neon', {
    rotateX: { value: 0, min: -180, max: 180, step: 1 },
    rotateY: { value: 0, min: -180, max: 180, step: 1 },
    rotateZ: { value: 0, min: -180, max: 180, step: 1 },
    posX: { value: 0, min: -5, max: 5, step: 0.1 },
    posY: { value: 0, min: -5, max: 5, step: 0.1 },
    posZ: { value: 0, min: -5, max: 5, step: 0.1 },
    scale: { value: 1, min: 0, max: 5, step: 0.1 },
  });
  const { isReady } = useSnapshot(sceneState);
  const scroll = useScroll();
  const [isLightOn, setLightOn] = useState(false);
  const [isInitAnimDone, setIsInitAnimDone] = useState(false);

  const lightOff = () => {
    const frColor = frLightRef.current!.color;
    const arColor = arLightRef.current!.color;
    const frValue = new THREE.Color(Number(lightProps.inActiveColor.replace('#', '0x')));
    const arValue = new THREE.Color(Number(argonProps.inActiveColor.replace('#', '0x')));
    gsap.to(frColor, {
      r: frValue.r,
      g: frValue.g,
      b: frValue.b,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.to(arColor, {
      r: arValue.r,
      g: arValue.g,
      b: arValue.b,
      duration: 1,
      ease: 'power3.out',
    });
  };
  const lightOn = () => {
    const frColor = frLightRef.current!.color;
    const arColor = arLightRef.current!.color;
    const frValue = new THREE.Color(Number(lightProps.activeColor.replace('#', '0x')));
    const arValue = new THREE.Color(Number(argonProps.activeColor.replace('#', '0x')));
    gsap.to(frColor, {
      r: frValue.r,
      g: frValue.g,
      b: frValue.b,
      duration: 1,
      ease: 'power3.out',
    });
    gsap.to(arColor, {
      r: arValue.r,
      g: arValue.g,
      b: arValue.b,
      duration: 1,
      ease: 'power3.out',
    });
  };
  const flicker = () => {
    //frLight
    const frColor = frLightRef.current!.color;
    const frOffValue = new THREE.Color(Number(lightProps.offColor.replace('#', '0x')));
    const frInActiveValue = new THREE.Color(Number(lightProps.inActiveColor.replace('#', '0x')));
    const frActiveValue = new THREE.Color(Number(lightProps.activeColor.replace('#', '0x')));
    gsap
      .timeline()
      .set(frColor, {
        r: frOffValue.r,
        g: frOffValue.g,
        b: frOffValue.b,
      })
      .to(frColor, {
        //ON
        r: frInActiveValue.r,
        g: frInActiveValue.g,
        b: frInActiveValue.b,
        duration: 0.05,
        delay: 1.5, //DELAY
        ease: 'power3.out',
      })
      .to(frColor, {
        //OFF
        r: frOffValue.r,
        g: frOffValue.g,
        b: frOffValue.b,
        duration: 0.05,
        ease: 'power3.out',
      })
      .to(frColor, {
        //ON
        r: frActiveValue.r,
        g: frActiveValue.g,
        b: frActiveValue.b,
        duration: 0.1,
        ease: 'power3.out',
      });

    //arLight
    const arColor = arLightRef.current!.color;
    const arOffValue = new THREE.Color(Number(argonProps.offColor.replace('#', '0x')));
    const arInActiveValue = new THREE.Color(Number(argonProps.inActiveColor.replace('#', '0x')));
    const arActiveValue = new THREE.Color(Number(argonProps.activeColor.replace('#', '0x')));
    gsap
      .timeline()
      .set(arColor, {
        r: arOffValue.r,
        g: arOffValue.g,
        b: arOffValue.b,
      })
      .to(arColor, {
        //ON
        r: arInActiveValue.r,
        g: arInActiveValue.g,
        b: arInActiveValue.b,
        duration: 0.05,
        delay: 1.5, //DELAY
        ease: 'power3.out',
      })
      .to(arColor, {
        //OFF
        r: arOffValue.r,
        g: arOffValue.g,
        b: arOffValue.b,
        duration: 0.05,
        ease: 'power3.out',
      })
      .to(arColor, {
        //ON
        r: arActiveValue.r,
        g: arActiveValue.g,
        b: arActiveValue.b,
        duration: 0.1,
        ease: 'power3.out',
      });
  };
  useFrame(() => {
    const offset = 1 - scroll.offset;
    if (isReady && !isInitAnimDone) {
      flicker();
      setIsInitAnimDone(true);
    }
    if (offset < 0.85) {
      isReady && isLightOn && lightOff();
      setLightOn(false);
    } else if (offset >= 0.85) {
      isReady && !isLightOn && lightOn();
      setLightOn(true);
    }
  });

  return (
    <group
      {...props}
      dispose={null}
      scale={0.01 * neonControl.scale}
      position={[neonControl.posX, neonControl.posY, neonControl.posZ]}
      rotation={[
        (Math.PI * neonControl.rotateX) / 180,
        (neonControl.rotateY * Math.PI) / 180,
        (neonControl.rotateZ * Math.PI) / 180,
      ]}
    >
      <group name="logo" position={[0, 0, 0]} rotation={[1.58, -0.01, -0.02]}>
        <mesh
          name="light_fd"
          geometry={nodes.light_fd.geometry}
          //   material={nodes.light_fd.material}
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
        >
          <meshBasicMaterial ref={frLightRef} color={`${lightProps.offColor}`} />
        </mesh>
        <mesh
          name="root"
          geometry={nodes.root.geometry}
          material={nodes.root.material}
          position={[-83.97, -56.81, 184.25]}
          rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          scale={[0.65, 0.65, 1.7]}
        />
        <mesh
          name="light_ar"
          geometry={nodes.light_ar.geometry}
          // material={nodes.light_ar.material}
          position={[-285.43, 0, 298.68]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={265.42}
        >
          <meshBasicMaterial ref={arLightRef} color={`${argonProps.offColor}`} />
        </mesh>
        {materialProps.toggleVisible && (
          <mesh
            name="glass"
            ref={glassRef}
            geometry={nodes.glass.geometry}
            //   material={nodes.glass.material}
            position={[-285.43, 0, 298.68]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={265.42}
          >
            <meshPhysicalMaterial {...materialProps} />
          </mesh>
        )}
      </group>
    </group>
  );
}

useGLTF.preload('/sign.gltf');
