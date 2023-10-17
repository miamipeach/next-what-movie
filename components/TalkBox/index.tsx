import TalkBubble from '@/components/TalkBubble';
import { TalkType } from '@/type/Talk';

interface IProps {
  talkList: TalkType[];
  delay?: number;
}

export default function TalkBox({ talkList, delay }: IProps) {
  return (
    <>
      {talkList.map((talk, index) => (
        <TalkBubble talkInfo={talk} index={index} key={`talk_scene_${index}`} delay={delay} />
      ))}
    </>
  );
}
