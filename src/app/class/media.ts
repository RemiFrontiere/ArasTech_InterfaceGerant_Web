//           "id": 1,
//           "beacon_id": 1,
//           "label": "photo_beacon_1.mp4",
//           "weight": 43210,
//           "link": "https://link-to-the-video.com",
//           "mime_type": "video/mp4"

export class Media{
  constructor(
    private _id : number,
    private _beaconId : number,
    private _label: string,
    private _weight: string,
    private _link: string,
    private _type: string
  ){}

  get Id():number{
    return this._id;
  }
  get BeaconId():number{
    return this._beaconId;
  }
  set BeaconId(value:number){
    this._beaconId = value;
  }

  get Label():string{
    return this._label;
  }
  set Label(value:string){
    this._label = value;
  }

  get Weight():string{
    return this._weight;
  }
  set Weight(value:string){
    this._weight = value;
  }

  get Link():string{
    return this._link;
  }
  set Link(value:string){
    this._link = value;
  }

  get Type():string{
    return this._type;
  }
  set Type(value:string){
    this._type = value;
  }
}
