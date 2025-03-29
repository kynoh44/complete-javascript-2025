function logger() {
  console.log("My name is kynoh");
}

logger();

function genFleetCluster(clst_area, clst_name, clst_commander) {
  console.log(`Cluster Area : ${clst_area}
Cluster Name : ${clst_name}
Cluster Commander : ${clst_commander}
`);

  return clst_name;
}

clusterName = genFleetCluster("Asia", "Infinite Priciple", "Beihai Zhang");
console.log(clusterName);