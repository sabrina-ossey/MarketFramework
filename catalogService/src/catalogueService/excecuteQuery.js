const Grakn = require("grakn");
const grakn = new Grakn("localhost:48555");
const session = grakn.session("catalogue");
ExecuteMatchQuery();

async function ExecuteMatchQuery() {
  const tx = await session.transaction(Grakn.txType.READ);

  let query = [
    "match",
    '$prod isa dataassetmodel has datacontent "personal_Data";',
    "$dom isa domain;",
    "  ($prod, $dom)isa coverage;",
    "  $prod has datatitle $dt;",
    "get $dt;"
  ];


  console.log("\nQuery:\n", query.join("\n"));
  query = query.join("");

  const iterator = await tx.query(query);
  const answers = await iterator.collect();
  const result = await Promise.all(
    answers.map(answer =>
      answer
        .map()
        .get("dt")
        .value()
    )
  );

  console.log("\nResult:\n", result);

  await session.close();
  process.exit();
}
