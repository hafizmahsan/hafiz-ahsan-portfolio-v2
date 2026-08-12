useFrame((state, delta) => {
  if (!group.current || !mesh.current) {
    return;
  }

  const targetX = reducedMotion ? 0 : pointer.y * 0.12;
  const targetY = reducedMotion ? 0 : pointer.x * 0.18;

  group.current.rotation.x = THREE.MathUtils.lerp(
    group.current.rotation.x,
    targetX,
    1 - Math.pow(0.001, delta)
  );

  group.current.rotation.y = THREE.MathUtils.lerp(
    group.current.rotation.y,
    targetY,
    1 - Math.pow(0.001, delta)
  );

  const scrollRotation = reducedMotion
    ? 0
    : scrollProgress.current * Math.PI * 0.65;

  mesh.current.rotation.z = THREE.MathUtils.lerp(
    mesh.current.rotation.z,
    scrollRotation,
    1 - Math.pow(0.01, delta)
  );

  if (!reducedMotion) {
    mesh.current.rotation.x += delta * 0.08;
    mesh.current.rotation.y += delta * 0.1;
  }
});
