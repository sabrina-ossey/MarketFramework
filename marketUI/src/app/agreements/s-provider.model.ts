export class SProvider {

  public id: number;
  public description: String;
  public tags: String;
  public dataModel: String;
  public distributionType: String;
  public owner: String;
  public title: String;
  public dataContent: String;
  public dataStaticity: String;
  public dataSentitivitylevel: String;
  public licenseORapplicableLaw: String;
  public language: String;
  public format: String;

  constructor() {}

  /*formattedName() {
    return this.name ?
      this.name[0].toUpperCase() + this.name.substr(1) : "";
  } */

  /*image() {
    return "https://rawgit.com/PokeAPI/sprites/master/sprites/pokemon/" + this.id + ".png"
  } */
}
