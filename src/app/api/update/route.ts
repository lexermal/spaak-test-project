import { GovData, GovDataResponse } from "@/utils/GovData";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {

  const data = await fetch('https://oda.ft.dk/api/Sag')
    .then(response => response.json())
    .then(data => data.value.filter((item: GovDataResponse) => {
      return [3, 5, 9].includes(item.typeid)
      // second part of filter disabled as no data is available for this period
      // && item.periodeid === 160;
    }));

  try {
    // todo: add a check to see if the data is already in the database
    await prisma.govData.createMany({
      data: data.map((item: GovDataResponse): GovData => ({
        id: item.id,
        typeId: item.typeid,
        kategoriId: item.kategoriid,
        statusId: item.statusid,
        titel: item.titel,
        titelKort: item.titelkort,
        offentlighedsKode: item.offentlighedskode,
        nummer: item.nummer,
        nummerPrefix: item.nummerprefix,
        nummerNumerisk: item.nummernumerisk,
        nummerPostfix: item.nummerpostfix,
        resume: item.resume,
        afstemningsKonklusion: item.afstemningskonklusion,
        periodeId: item.periodeid,
        afgoerelsesResultatKode: item.afgørelsesresultatkode,
        baggrundsMateriale: item.baggrundsmateriale,
        opdateringsDato: item.opdateringsdato,
        statsBudgetSag: item.statsbudgetsag,
        begrundelse: item.begrundelse,
        paragrafNummer: item.paragrafnummer,
        paragraf: item.paragraf,
        afgoerelsesDato: item.afgørelsesdato,
        afgoerelse: item.afgørelse,
        raadsmodeDato: item.rådsmødedato,
        lovNummer: item.lovnummer,
        lovNummerDato: item.lovnummerdato,
        retsinformationsUrl: item.retsinformationsurl,
        fremsatUnderSagId: item.fremsatundersagid,
        deltUnderSagId: item.deltundersagid,
      })),
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (e: any) {
    if (e.code === 'P2002') {
      return Response.json({ "status": "The data already exists in the database." })
    }
    console.error("Data update error: ", { error: JSON.stringify(e) });
    return Response.json({ "status": "Error updating gov data." })
  }
  return Response.json({ "status": "Successfully updated gov data." })
}