export default (potentialResalts) => ({
  labels: potentialResalts.map((yearResalts) => yearResalts.year),
  datasets: [
      {
          label: 'Total Invested',
          data: potentialResalts.map((yearResalts) => yearResalts.totalInvested),
          backgroundColor: '#4FBE0C',
      },
      {
          label: 'Total Return',
          data: potentialResalts.map((yearResalts) => yearResalts.totalReturn),
          backgroundColor: '#192BC2',
      }
  ]
});