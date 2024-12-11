import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  deliveryDescriptionText,
  deliveryNavigateTitle,
  deliveryTitle,
  deliveryUnderlineTSyle,
} from "../../delivery/styles/deliveryStyle";

const HowToOrderBox: FC = () => {
  return (
    <>
      <Container>
        <Typography sx={deliveryNavigateTitle}>
          Baş sahypa / Sargyt Etmek
        </Typography>
        <Box>
          <Typography sx={deliveryTitle}>Nädip sargyt etmeli</Typography>
          <Box sx={deliveryUnderlineTSyle}></Box>
        </Box>
        <Typography sx={deliveryDescriptionText}>
          Biziň onlaýn dükanymyz, bizden satyn alnan islendik haryda özüniň
          eltip berme hyzmatyny hödürleýär. <br /> Eger-de Siz biziň eltip berme
          hyzmatymyzdan peýdalanmak kararyna gelseňiz – harytlary eltmegiň we
          gowşurmagyň şertleri bilen tanyşmagyňyzy haýyş edýäris: <br /> Bahasy
          150 TMT ýokary ähli sargytlar eltip bermesi mugt amala aşyrylýar! 150
          TMT ýetmedik sargyt gowşurmagyň bahasy 20 TMT. <br /> Tizligi sargyt
          berlen pursadyndan 2 sagadyň dowamynda amala aşyrylýan "Ekspress eltip
          berme" hyzmatyny ulanyp bilersiňiz. Harytlaryň görnüşine garamazdan
          "Express eltip berme" hyzmatynyň bahasy 20 TMT bolar <br />{" "}
          Sargytlaryň kabul edilýän wagty: <br /> Duşenbe - Anna: 09:00 - 18:00{" "}
          <br /> Şenbe: 09:00 - 13:00 <br />
          Eltip bermegiň tizligi: <br /> “Standart gowşuryş” 16:00-dan öň sargyt
          edilse şol gün amala aşyrylýar. Sagat 16:00-dan soň edilen sargytlar
          ertesi güne geçirilýär. <br /> Haryt Siz bilen ylalaşylan günde we
          Size amatly wagtda gowşurylar <br /> Haryt Siz tarapyndan görkezilen
          salga eltip beriler <br /> Size gowşurylýan harytlary barlanyňyzda üns
          beriň! <br /> Görünýän mehaniki zeperleriň ýokdugyna we toplumyň içine
          girýän zatlaryň hemmesiniň ýerbe-ýerdigine göz ýetiriň. <br /> Harydyň
          daş görnüşinde kemçilik ýoklugy, toplumda ähli zatlaryň ýerbe-ýerdigi
          we resminamalaryň bardygy, harydy gowşuryş
          zaýawkasyndaky/resminamasynda Siziň goluňyz bilen tassyklanýar we
          eltip berilen haryda Siziň hiç hili arz-şikaýatyňyz ýoklugynyň
          subutnamasy bolup durýar. Eger-de getirilen harydyň zeperi bar bolsa,
          ony kabul etmezlige Siziň hakyňyz bar. <br /> Türkmenistanyň “Sarp
          ediji hukuklaryny goramak” kanunyna laýyklykda, satyn alnan harytlary
          kanunlarda göz öňünde tutulan möhletlerde çalyşyp ýa-da gaýtaryp
          bilersiňiz.
        </Typography>
      </Container>
    </>
  );
};

export default HowToOrderBox;
