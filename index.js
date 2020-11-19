const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
];

function superbowlWin(recordArray)
{
  recordArray.find(function(obj) {
    if (obj.result === "W")
    {
      return obj.year;
    }
  });
}