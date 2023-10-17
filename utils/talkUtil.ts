import talkData from '../public/data/talk.json';
import { TalkType } from '@/type/Talk';

export class TalkUtil {
  private readonly talkData: TalkType[][] = [];

  constructor() {
    this.talkData = talkData;
  }

  getSceneMsg(sceneNumber: number) {
    return talkData[sceneNumber] || [];
  }

  getSceneLastMsg(sceneNumber: number) {
    return this.getSceneMsg(sceneNumber)[this.getSceneMsg(sceneNumber).length - 1];
  }

  getSceneMsgDirection(sceneNumber: number) {
    return this.getSceneLastMsg(sceneNumber).direction;
  }

  getSceneMsgCount(sceneNumber: number) {
    return this.getSceneMsg(sceneNumber).length;
  }
}
