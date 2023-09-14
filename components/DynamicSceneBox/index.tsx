import SceneBox from '@components/SceneBox';
import { useState } from 'react';

export default function DynamicSceneBox() {
  const [sceneList, setSceneList] = useState([]);
  return <SceneBox sceneNumber={1} />;
}
