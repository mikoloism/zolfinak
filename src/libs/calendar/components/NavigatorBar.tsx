import { IonIcon } from "@ionic/react";
import { chevronBackOutline, chevronForwardOutline } from "ionicons/icons";
import { todayStore } from "../store";
import { getMonthNames } from "lib/i18n/helpers";
import { globalSetting } from "lib/settings/mod";

export function NavigatorBar() {
  const date = todayStore.get();
  const langauge = globalSetting.language.get();
  const monthNames = getMonthNames(langauge)

  console.log(date.month())

  return (
    <div className="flex flex-(row wrap place-(content-between items-center)) px2">
      <button className="w-12 h-12">
        <IonIcon slot="end" icon={chevronBackOutline} />
      </button>

      <span>
        {monthNames[date.month()]} ({date.format('YYYY')})
      </span>

      <button className="w-12 h-12">
        <IonIcon slot="start" icon={chevronForwardOutline} />
      </button>
    </div>
  )
}
