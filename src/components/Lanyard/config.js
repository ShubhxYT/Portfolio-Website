export default {
  camera: {
    position: [0, 0, 30],
    fov: 20,
    gravity: [0, -40, 0],
    transparent: true,
  },

  band: {
    maxSpeed: 50,
    minSpeed: 0,
  },

  container: {
    height: "h-screen",
  },

  group: {
    position: [0, 4, 0],
  },

  fixed: {
    position: [0, 0, 5],
  },

  joints: {
    j1: [0.5, 0, 0],
    j2: [1, 0, 0],
    j3: [1.5, 0, 0],
    card: [2, 0, 0],
  },

  ropeLength: 1,

  sphericalJoint: {
    j3Anchor: [0, 0, 0],
    cardAnchor: [0, 1.5, 0],
  },

  cardMesh: {
    scale: 4.25,
    position: [0, -3.6, -0.05],
    collider: [0.8, 1.125, 0.01],
  },

  strap: {
    color: "white",
    lineWidth: 2,
    repeat: [-4, 1],
    depthTest: false,
  },
};
