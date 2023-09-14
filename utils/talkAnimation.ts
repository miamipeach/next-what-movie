import talkData from '../public/data/talk.json';
import { TalkType } from '@/type/Talk';

export class TalkAnimation {
  private readonly talkData: TalkType[][];

  constructor() {
    this.talkData = talkData;
  }

  getSceneMsg(sceneNumber: number) {
    return talkData[sceneNumber] || [];
  }
}
