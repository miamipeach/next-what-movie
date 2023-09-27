import { TalkAnimation } from '@/utils/talkAnimation';
import TalkBubble from '@/components/TalkBubble';

interface IProps {
  sceneNumber: number;
}

export default function SceneBox({ sceneNumber }: IProps) {
  const talkMsg = new TalkAnimation();

  return (
    <>
      {talkMsg.getSceneMsg(sceneNumber).map((talk) => (
        <TalkBubble talkInfo={talk} key={`talk_scene_${talk.id}`} />
      ))}
    </>
  );
}