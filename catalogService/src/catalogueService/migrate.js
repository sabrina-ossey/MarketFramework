const Grakn = require("grakn");
const fs = require("fs");
const { parser } = require("stream-json");
const { streamArray } = require("stream-json/streamers/StreamArray");
const { chain } = require("stream-chain");

const inputs = [
  { dataPath: "./data/person", template: personTemplate  },
  { dataPath: "./data/dataasset", template: dataassetTemplate },
  { dataPath: "./data/domain", template: domainTemplate },
  { dataPath: "./data/coverage", template: coverageTemplate },
  { dataPath: "./data/provision", template: provisionTemplate },
  { dataPath: "./data/storage", template: storageTemplate },
  { dataPath: "./data/provenance", template: provenanceTemplate }
];

buildCatalogueGraph(inputs);

async function buildCatalogueGraph(inputs){
  const grakn = new Grakn("localhost:48555");
  const session = grakn.session("catalogue");

  for (input of inputs) {
    console.log("loading from [" + input.dataPath +"] into Grakn...");
    await loadDataIntoGrakn(input, session);
  }
  session.close();
}


async function loadDataIntoGrakn(input, session) {
  const items = await parseDataToObjects(input);

  for (item of items) {
    const tx = await session.transaction(Grakn.txType.WRITE);
    const graqlInsertQuery = input.template(item);

    console.log("Excuting Graql Query:" + graqlInsertQuery);
    await tx.query(graqlInsertQuery);
    await tx.commit();
  }

  console.log(
    `\nInserted ${items.length} items from [${input.dataPath}] into Grakn.\n`
  );
}

function personTemplate(person) {
  const {identity, name, persondescription, contact} = person;

  // insert person
  let graqlInsertQuery = `insert $person isa person has identity "${identity}"`;
    graqlInsertQuery += ` has name "${name}"`;
    graqlInsertQuery += ` has persondescription "${persondescription}"`;
    graqlInsertQuery += ` has contact "${contact}"`;
    graqlInsertQuery += ";";
    return graqlInsertQuery;
  }

function domainTemplate(domain) {
  const {domainid, domaintitle, domaindescription} = domain;

    // insert person
  let graqlInsertQuery = `insert $domain isa domain has domainid "${domainid}"`;
    graqlInsertQuery += ` has domaintitle "${domaintitle}"`;
    graqlInsertQuery += ` has domaindescription "${domaindescription}"`;
    graqlInsertQuery += ";";
    return graqlInsertQuery;
  }

function dataassetTemplate(dataasset) {
  const {dataid, datatitle, datadescription, format, datacontent, datastaticity, datasensitivity} = dataasset;

      // insert dataasset
  let graqlInsertQuery = `insert $dataasset isa dataassetmodel has dataid "${dataid}"`;
    graqlInsertQuery += ` has datatitle "${datatitle}"`;
    graqlInsertQuery += ` has datadescription "${datadescription}"`;
    graqlInsertQuery += ` has format "${format}"`;
    graqlInsertQuery += ` has datacontent "${datacontent}"`;
    graqlInsertQuery += ` has datastaticity "${datastaticity}"`;
    graqlInsertQuery += ` has datasensitivity "${datasensitivity}"`;
    graqlInsertQuery += ";";
    return graqlInsertQuery;
  }

function coverageTemplate(coverage) {
  const { field_domaintitle, product_datatitle } = coverage;
  // match company
  let graqlInsertQuery = `match $field isa domain has domaintitle"${field_domaintitle}"; `;
  // match person
  graqlInsertQuery += `$product isa dataassetmodel has datatitle "${product_datatitle}"; `;
  // insert contract
  graqlInsertQuery +=
    "insert (field: $field, product: $product) isa coverage;";
  return graqlInsertQuery;
  }

function provenanceTemplate(provenance) {
  const { serviceprovider_name, product_datatitle } = provenance;
  // match company
  let graqlInsertQuery = `match $serviceprovider isa person has name"${serviceprovider_name}"; `;
  // match person
  graqlInsertQuery += `$product isa dataassetmodel has datatitle "${product_datatitle}"; `;
  // insert contract
  graqlInsertQuery +=
    "insert (serviceprovider: $serviceprovider, product: $product) isa provenance;";
  return graqlInsertQuery;
  }

function provisionTemplate(provision) {
  const { dataprovider_name, product_datatitle } = provision;
  // match company
  let graqlInsertQuery = `match $dataprovider isa person has name"${dataprovider_name}"; `;
  // match person
  graqlInsertQuery += `$product isa dataassetmodel has datatitle "${product_datatitle}"; `;
  // insert contract
  graqlInsertQuery +=
    "insert (dataprovider: $dataprovider, product: $product) isa provision;";
  return graqlInsertQuery;
  }

function storageTemplate(storage) {
  const { datacustodian_name, product_datatitle, sla } = storage;
  // match company
  let graqlInsertQuery = `match $datacustodian isa person has name"${datacustodian_name}"; `;
  // match person
  graqlInsertQuery += `$product isa dataassetmodel has datatitle "${product_datatitle}"; `;
  // insert contract
  graqlInsertQuery +=
    `insert (datacustodian: $datacustodian, product: $product) isa storage; $storage has sla "${sla}";`;
  return graqlInsertQuery;
  }

function parseDataToObjects(input) {
  const items = [];
  return new Promise(function(resolve, reject) {
    const pipeline = chain([
      fs.createReadStream(input.dataPath + ".json"),
      parser(),
      streamArray()
    ]);

    pipeline.on("data", function(result) {
      items.push(result.value);
    });

    pipeline.on("end", function() {
      resolve(items);
    });
  });
}
