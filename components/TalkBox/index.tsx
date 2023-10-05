import { TalkAnimation } from '@/utils/talkAnimation';
import TalkBubble from '@/components/TalkBubble';

interface IProps {
  sceneNumber: number;
}

export default function TalkBox({ sceneNumber }: IProps) {
  const talkMsg = new TalkAnimation();

  console.log('skp sceneNumber', sceneNumber);

  console.log('skp', talkMsg.getSceneMsg(sceneNumber));

  return (
    <>
      {talkMsg.getSceneMsg(sceneNumber).map((talk, index) => (
        <TalkBubble talkInfo={talk} index={index} key={`talk_scene_${index}`} />
      ))}
    </>
  );
}
