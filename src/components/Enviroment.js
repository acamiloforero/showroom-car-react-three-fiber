
import {Environment} from "@react-three/drei";

const Ambient = ({environment,ground}) => {
  return (
    <>
      {environment.type === "hdr" ? (
        <Environment files={environment.file} ground={ground} />
      ) : (
        <Environment files={environment.files} ground={ground} />
      )}
    </>
  );
};

export default Ambient;