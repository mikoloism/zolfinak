import { IonButton, IonIcon, IonText } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import { dayjs } from 'lib/date/mod';

export function NavigatorBar() {
  const date = dayjs();

  return (
    <div className="flex flex-(row wrap place-(content-between items-center)) px2">
      <button className="w-12 h-12">
        <IonIcon slot="end" icon={chevronBackOutline} />
      </button>

      <span>
        {date.format('MMM')} ({date.format('YYYY')})
      </span>

      <button className="w-12 h-12">
        <IonIcon slot="start" icon={chevronForwardOutline} />
      </button>
    </div>
  )
}
