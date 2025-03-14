import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

const Effects = () => {
  return (
    <EffectComposer>
      <DepthOfField
        focusDistance={0}
        focalLength={0.1}
        bokehScale={8}
        height={1024}
      />
      {/* <DepthOfField focusDistance={0} focalLength={0.02} bokehScale={2} height={480} /> */}
    </EffectComposer>
  );
};

export default Effects;
