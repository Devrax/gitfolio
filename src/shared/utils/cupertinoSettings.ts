import { CupertinoSettings} from 'cupertino-pane';

const vph = window.innerHeight;

export const cupertinoOptions: CupertinoSettings = {
    initialBreak: 'bottom',
    darkMode: true,
    showDraggable: false,
    breaks: {
        top: {
          enabled: true,
          height: vph - (vph*10/100), 
          bounce: true 
        },
        middle: { 
            enabled: true,
            height: vph - (vph*40/100), 
            bounce: true 
        },
        bottom: {
            enabled: true,
            height: vph - (vph*60/100), 
            bounce: true 
        }
      }        
}