import { SProvider } from './agreements/s-provider.model';


export const DATAASSET: SProvider =
  {       id: 1,
          description: "SPORT AND PERFORMANCE DATA",
          tags:" NBA, PLAYER, WEEK",
          dataModel:"Age,Conference,Date,Draft_Year,Height,Player,Position,Season,Season_Short,Seasons_in_League,Team,Weight,Real_Value",
          distributionType: "WEEKLY",
          owner: "Jacob Baruck",
          title: "NBA player of the week",
          dataContent: "Personal Data",
          dataStaticity: "Dynamic",
          dataSentitivitylevel: "Non Sensitive",
          licenseORapplicableLaw:" CC BY ",
          language:"English",
          format:"CVS"
        }
