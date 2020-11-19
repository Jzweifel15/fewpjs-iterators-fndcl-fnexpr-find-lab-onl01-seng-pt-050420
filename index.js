const record = [
  { year: "2018", result: "L" },
  { year: "2017", result: "W" },
  { year: "2016", result: "N/A" }
];

function superbowlWin(recordArray)
{
  let result = recordArray.find(function(e) {
    if (e.result === "W")
    {
      return e.year;
    }
    else 
    {
      return undefined;
    }
  });
  return result;
}