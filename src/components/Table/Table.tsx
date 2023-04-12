import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableHeader,
  TableRow,
} from "./Table.styles";

export const Table = (): JSX.Element => {
  const items = [
    {
      label: "Chien unique",
      reduction: "",
      montant: "25 €",
    },
    {
      label: "2 chiens",
      reduction: "10%",
      montant: "",
    },
    {
      label: "3 chiens et plus",
      reduction: "15%",
      montant: "",
    },
    {
      label: "1 jour",
      reduction: "",
      montant: "25€",
    },
    {
      label: "au 15ème jour",
      reduction: "10%",
      montant: "",
    },
    {
      label:
        "Chien d’association/refuge (sous justificatif du contrat d’adoption)",
      reduction: "10%",
      montant: "",
    },
    {
      label: "Supplément gestion et isolement chienne en chaleur",
      reduction: "",
      montant: "5€",
    },
    {
      label:
        "Tout retard de plus d’une demi-heure sera facturé une demi-journée supplémentaire",
      reduction: "",
      montant: "12,50€",
    },
  ];

  const hasItems = !!items.length;

  return (
    <TableContainer>
      <TableHead>
        <TableRow>
          <TableHeader>{""}</TableHeader>
          <TableHeader>
            {"Réduction(sur le montant total du séjour)"}
          </TableHeader>
          <TableHeader>{"Tarif / Jour"}</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody>
        {hasItems &&
          items.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.label}</TableCell>
              <TableCell>{item.reduction}</TableCell>
              <TableCell>{item.montant}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </TableContainer>
  );
};
