
var _ = require('lodash');
var o =
    {
        "hashElements": [
            {
                "uri": "http://207.148.6.179",
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "d00d6800-7c9d-11e9-b8ca-0173ffa57d11",
                "groupId": "ce9f5910-7c9d-11e9-8689-07462e87d3c3"
            },
            {
                "uri": "http://80.211.103.84",
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "cffe9af0-7c9d-11e9-a575-0118cd66c243",
                "groupId": "ce9f5910-7c9d-11e9-8689-07462e87d3c3"
            }
        ]
      };

    let grid = [
       [1,2,3],
       [4,5,6],
       [7,8,9]
    ];

    let flat = _.flatten(o);

    console.log( o );
/*  var  result = [];

  for (var i = 0; i < o.length; i++) {
    console.log(o.length);
    for (var j = 0; j < o[i].length; j++) {
      console.log(o[i].length);
      result.push(o[i][j]);
    }
  }*/


  //  o.flat();
  //  console.log((result));

  /*  const result = o.reduce(
  (result, { hashElements }) => result
    .concat(hashElements.map(hashElements => ({ element }))),
  []
);

console-log(result);


/*var o = [
    {
        "element": "hashElement",
        "hashElements": [
            {
                "uri": "http://207.148.6.179",
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "d00d6800-7c9d-11e9-b8ca-0173ffa57d11",
                "groupId": "ce9f5910-7c9d-11e9-8689-07462e87d3c3"
            },
            {
                "uri": "http://80.211.103.84",
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "cffe9af0-7c9d-11e9-a575-0118cd66c243",
                "groupId": "ce9f5910-7c9d-11e9-8689-07462e87d3c3"
            }
        ],
        "proofElements": [
            {
                "hashIdNode": "d00d6800-7c9d-11e9-b8ca-0173ffa57d11",
                "proof": "eJyNk79uE0EQxl+GEsc7Ozv756pIvAJVGmt2dhafFGzLdwlQBhraFLRIkKAERIOEKHkPvw1rxwQSQOKka+bu9+23M9+8vj6U5WLU5+P3+Tiuhm46fYZ9OViun0xlzv1itewX4/QUL8cXK/306LZ0Oedhvjl0xalvb0BwANGJOOcqeV9LsCkENd4kZ6sWBbBoiFz0BXNWUCHrP29lZn2ZLZZFNw+KMcVHYyZBUpkAaJrkKDwxELBWplAAvu2Q4SQ/7cdRb8gZj1+tgTQxNLH2MbjOxs7Q0a28LNdbeQBTiX6X55obBZaVSqnMdF9+S/5dPhxd5zUvZK7D+csPx5z1+Ivw8WxbWq5nN98ulqvh7dm7483Dnc++dP9zx7P3y9XVMOeJJb+Ddy628H/c4D78ZtEP46ntgCgSkrWmPR0EIHAaJRaomUhiJI6eEydRwlDb+LJArZqRQ0qMShliKJ6YrNjsa3S+/ZKrKaDZWY9JElfxRFpjtW3IseSYbEmKxVVrYm02pYTok7/rcr05lGpYsq0FmRhi1cTNmDTB1IJTM4Mgpty8OG8CeHCoLkJF9tIaCn8KFisusmGk0HJZIbvW+uobVY3PzBlaS3I02QKXiomdOG0V9hjZh/t9TGidh0i3jUyhg+7n2uSDX/uyXZ+uRaHbEzs7qRKqUWfanEyIRjW39ciIwaigCHPliIDkc3YQKIozLirmYhBZ7tq5ugnZcP5qt5gX7bCP+9z15Wp/7OXJuh/ONwf/sjhtlC4Kr6d7YLrN/g9pRVeX",
                "anchorsComplete": [
                    "cal"
                ]
            },
            {
                "hashIdNode": "cffe9af0-7c9d-11e9-a575-0118cd66c243",
                "proof": "eJyNUz1vE0EQ/TOUON7Z3dmPqyzxF6jSWLOzs/gkc2fdHQHKQEObghYJEpSAaJAQJf/D/4a1Y4JigZSTrpm79+bNzHvvbhbcd5O8mn6tpmkzNvP5S9Pmk354NucVtd2mb7tpfmauptcb+frkrnS1onG1XdhsxdXXG7AAwTJbaws6V7LX0XtRTkWri2QB0EYh2uCySUlAGLX7tqNZtnnZ9Vm2j7gUiVTUzHPMMwCJM0KPM1W5OTvH2pqfe8j4Ij1vp0lukUuafmgFcaZwpvVTsI0OjcLTO3ruh0qfNSYF4R69Rar0OhZCKhTzMf0O+W/6eHqTBup4JePFm89rSrL+zrRe7kr9sLz9dtlvxg/nH9fbx3udbW4eMuP5p35zPa5optHtwXsVFfyQCY7B77t2nM50A4gBDWqt6tOABwQrgUOGkhA5BKTgKFJkQeNLPV9iqGKTIR8jGcEEwWeHhJp1ciVYV39JRWWQZLUzketg7BClhKLrkUNOIeocxWRbtAoFNHH2wUV3rHIRlWjHFor1rKLS7DQkp0su0XDdmEcy1geMhSGQh9o1RscGZGcrjfcJh+2Cs2YbSJFBX31ZIFmlcnFiQ1EuESWoK0lBJQ2Ui4lk2UqtkDOBnD9WGI22DgLeLTL6Bpo/sUknf/Oyi09TrdAcEHs5saARJVYJZuWDEkk1HskYr4QNM9XjBQMGXUoWPAa2ygYxKStjiO/Lub412Xjxdh/My9rsy8F3bb4+tL16MbTjxfbkfxLnFSVdpmF+AMx33v8Ng0ZVlw==",
                "anchorsComplete": [
                    "cal"
                ]
            }
        ],
        "verifiedElements": [
            {
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "d00d6800-7c9d-11e9-b8ca-0173ffa57d11",
                "hashIdCore": "d110f550-7c9d-11e9-afb9-012ae5ddfaa5",
                "hashSubmittedNodeAt": "2019-05-22T14:28:05Z",
                "hashSubmittedCoreAt": "2019-05-22T14:28:07Z",
                "branch": "cal_anchor_branch",
                "uri": "http://178.62.45.249/calendar/3246185/hash",
                "type": "cal",
                "anchorId": "3246185",
                "expectedValue": "12d372acae7194b760d5ed5d50f38fa5350f3d6ee0317bd395a481d98f21be16",
                "verified": true,
                "verifiedAt": "2019-05-22T14:28:16Z"
            },
            {
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "cffe9af0-7c9d-11e9-a575-0118cd66c243",
                "hashIdCore": "d25b0180-7c9d-11e9-a45a-0129fa5afa9d",
                "hashSubmittedNodeAt": "2019-05-22T14:28:05Z",
                "hashSubmittedCoreAt": "2019-05-22T14:28:09Z",
                "branch": "cal_anchor_branch",
                "uri": "http://178.62.45.249/calendar/3246185/hash",
                "type": "cal",
                "anchorId": "3246185",
                "expectedValue": "12d372acae7194b760d5ed5d50f38fa5350f3d6ee0317bd395a481d98f21be16",
                "verified": true,
                "verifiedAt": "2019-05-22T14:28:16Z"
            }
        ]
    }
] */

  /* var x = JSON.parse(o);
    console.log(o);

    Object.keys(o).forEach(k => {
    o[k] = o[k].reduce((a, c) => a.concat(...Object.values(c)), [])
})


  /*  var r = [];
    _.each(o, function(v, k) {
      if(_.isArray(v)) {
        _.each(v, function(v2, i) {
          r.length <= i && r.push({});
          r[i][k] = v2;
        });
    //  }
  }); */

/*  o.forEach( (e) => {

    if (_.isObject(e)) {
        console.log(JSON.stringify(e) + ' is an object');

    } */






/*var o = {
"KeyA":"valA",
"KeyB":[
  "valB1",
  "valB2",
  "valB3",
  "valB4",
],
"KeyC":[
  "valC1",
  "valC2",
  "valC3",
  "valC4",
],
"KeyD":"valD",
"KeyE":[
  "valE1",
  "valE2",
  "valE3",
  "valE4",
],
};

var pi =
 {
    "_id":"5ce3e0bb480f9e408c52a8d7",
    "monitoredData":"Agreement",
    "hashData":
    [
		{
		   "_id":"5ce3e0bb480f9e408c52a8d9",
		   "uri":"http://92.63.107.191",
		   "hash":"4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
		   "hashIdNode":"72553b80-7bbb-11e9-a84a-017acdc34080",
		   "groupId":"71c0c3b0-7bbb-11e9-afa1-8783a6cd6f36"
		},
		{
		   "_id":"5ce3e0bb480f9e408c52a8d8",
		   "uri":"http://89.38.148.127",
		   "hash":"4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
		   "hashIdNode":"7242c4f0-7bbb-11e9-938f-010b481366e9",
		   "groupId":"71c0c3b0-7bbb-11e9-afa1-8783a6cd6f36"
		}
	],
	"__v":0
}

pi = _.omit(pi, ['__v']);
//pi = _.pick(pi, ['_id','monitoredData', 'hashData']);
console.log('pi____', pi);
//var x = delete pi ['__v']
//console.log('x____', x);
//console.log('pi____', pi);


var r = [];

_.each(o, function(v, k) {
  if(_.isArray(v)) {
    _.each(v, function(v2, i) {
      r.length <= i && r.push({});
      r[i][k] = v2;
    });
  }
});

console.log(r);


var hashObject = {"Agreement" : "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526" };
console.log('hashObject',hashObject);

var saveHashObject = [ { uri: 'http://159.69.181.36',
    hash: '4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526',
    hashIdNode: '6254e4f0-7c66-11e9-8bc6-01032281baa2',
    groupId: '61242d20-7c66-11e9-838c-95ca1b8d42ef' },
  { uri: 'http://159.65.67.34',
    hash: '4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526',
    hashIdNode: '62790ec0-7c66-11e9-ac1e-01c9e293dd01',
    groupId: '61242d20-7c66-11e9-838c-95ca1b8d42ef' } ];

  //  console.log('saveHashObject',saveHashObject);

  var proofHashObject =  [ { hashIdNode: '6254e4f0-7c66-11e9-8bc6-01032281baa2',
        proof: 'eJyNU8tu1EAQ/BmObLZ7pnsePq3EL3DKZTWPHtbSYq/WJsAxcOGaA1ckSFAC4oKEOPIf+zeMN0tQViDFkmV7rKqumql6d7NIfTfKq/HXahw3QzOfv9RtPum3z+ZpFdpu07fdOD/TV+PrjXx9crd0tQrDaregTGLqbTUSoqOUiKiwMSVb5a0VMOBJFcmCqDQwkzNZxygoiZX5NtEs27zs+iy7R0YxCRWY2WTMDFH8zMVkZoCglXIYQ1A/95DhRXzejqPcIpdh/KEA/Qx4ptRTsA1jg+70jj7124les+Qg9+htwkqfi60TrHXmmH5C/pNewelN3IYurWS4ePN5HaKsv6ewXk5L/XZ5+++y3wwfzj+ud4/3OtvcPMTj+ad+cz2swkyx2YP3KibwAxwcg9937TCeqQaZHSMSTFdjbYyJkUuiDDbqwq5E8BpUit6xtwqxkA5a53qiSUOInISz8azRFnDWZQDjYqnfPvusSZGm5AiCIsql4gG1+HrOqIyQChi8GFNf2NhyrHIh1gKlrAtBlOhZuaC9RgmpgA2QDSvtiqCqk02NlWZV7XI0wXJ2wvcJt7tFsj4ocdo5TpkzUN3dgiSpxtFERl98KFifkGo6c6j2bXWCnnxMPrljhV5XXwbhbiOdbbD5U5t48rcvU32aGoXmgNjLgeqsKMZIlIwyyQaKUlStirFWOTBSE6QtaQ0US0lcK1I0B+NDlV7ub9j1bciGi7f7Yl7WYV8OuWvz9WHs1YttO1zsTv4ncV5R0uWwnR8A8yn7vwHJyE+T',
        anchorsComplete: [ 'cal' ] },
      { hashIdNode: '62790ec0-7c66-11e9-ac1e-01c9e293dd01',
        proof: 'eJyNk71u1FAQhV+GEsczd+b+uYrEK1ClWd1f1tJir2wnQLnQ0KagowkJSkA0SIgy77Fvw/VmWSCAFEuW7GudM+doPr+9OQ59N6WX0+1ymtZjU9cvqI1H/fCsDkvXduu+7ab6jK6mV+v0+cnh6GrpxuX2mCMnVW5NyIiGQ2DmLJXKUQurdQIFlkVOMSEKAinZqEjeJ0xBCvVltlm0cdH1MW0fKaEtpACVDkpViMlWLmCqAINNwlKMgN93kvHUP2+nKd0pF276JgBtBbIS4inoRmKD9uRgH/phtpcUsxe/2xsKs70m6YI2ivm+/az8p72gkxs/uC4s03j++uPK+bT6GtxqMR/1w+Lu22W/Ht9vLlbbx7ucbWwe0nHzoV9fj0tXCal24l2KWfyABvfF77p2nM5Eg1IaicgwX43W3geJMgeOoD1labIHSyCCt0ZaLRAzkyOKZaOBwHkZkozKSkKdwWgTAZTxubzbaCOxYOJgGJxgjrnoASnZsmcUKrFw6GxSqjxIpfP9lAWlYEohZ7xRRkS2XmktA2PAEhtUocsmcrkEKOCErJIvyZi8sE4L+Ku2pRJDIRx6G91g85Nyf/QL75n2pmyu2Ss2F8P2GChzFhI9c1BlnnbsUxaF7BJLGFCpLJw0EwH7nIMsROeyA2UdFOD/7Hd9x8R4/mb3H12WYZ/2mLTxej/26nRox/Pt0f8i1kWVuuiGei+oZ1R/AGQoNuY=',
        anchorsComplete: [ 'cal' ] } ]

    //    console.log('proofHashObject',proofHashObject);

    var verifiedProofHashObject =     [ { hash: '4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526',
        hashIdNode: '6254e4f0-7c66-11e9-8bc6-01032281baa2',
        hashIdCore: '635edae0-7c66-11e9-87c1-01df70327786',
        hashSubmittedNodeAt: '2019-05-22T07:51:18Z',
        hashSubmittedCoreAt: '2019-05-22T07:51:20Z',
        branch: 'cal_anchor_branch',
        uri: 'http://80.211.48.66/calendar/3244610/hash',
        type: 'cal',
        anchorId: '3244610',
        expectedValue: '29b09416cb86515c0b69283c45c187151273562aba2b29f7a5d3c06a90b6eb41',
        verified: true,
        verifiedAt: '2019-05-22T07:51:30Z' },
      { hash: '4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526',
        hashIdNode: '62790ec0-7c66-11e9-ac1e-01c9e293dd01',
        hashIdCore: '653dfb20-7c66-11e9-83ce-01735ac78644',
        hashSubmittedNodeAt: '2019-05-22T07:51:19Z',
        hashSubmittedCoreAt: '2019-05-22T07:51:23Z',
        branch: 'cal_anchor_branch',
        uri: 'http://80.211.48.66/calendar/3244610/hash',
        type: 'cal',
        anchorId: '3244610',
        expectedValue: '29b09416cb86515c0b69283c45c187151273562aba2b29f7a5d3c06a90b6eb41',
        verified: true,
        verifiedAt: '2019-05-22T07:51:30Z' } ]

      /*    console.log('verifiedProofHashObject',verifiedProofHashObject);

      var finaltest= [{attribute: attributename}];
      finaltest.push(JSON.stringify(hashObject) + JSON.stringify(saveHashObject) + JSON.stringify(proofHashObject) + JSON.stringify(verifiedProofHashObject));
      finaltest = (JSON.stringify(saveHashObject));
      console.log('saveHashObject',finaltest.toString());

    /*  var regex = /[\']/g;
      console.log('finaltest',finaltest); */

    //  finaltest2 = finaltest.join( );
    /*  finaltest2 = JSON.parse(finaltest);
      finaltest2.push(JSON.stringify(saveHashObject));
    //  console.log('finaltest2',finaltest2); */

  /*  var newhashDefinition = [{
      elements: "element 1",
      hashElements: "hash 2",
      proofElements : "proof 2",
      verifiedElements : "verified 2"
    }]

    var newhashDefinition = [];

    var data = saveHashObject;

    for (var i = 0; i < data.length; i++) {
      //if (data[i].proofE == proofHashObject.proofE && data[i].proofE == verifiedProofHashObject.proofE) alreadyInList = true;
      newhashDefinition.push({"element": "Agreement", "hashElements":JSON.stringify(saveHashObject), "proofElements":JSON.stringify(proofHashObject), "verifiedElements": JSON.stringify(verifiedProofHashObject)});
    }
    console.log(newhashDefinition);

    /*var r = [];

    _.each(o, function(v, k) {
      if(_.isArray(v)) {
        _.each(v, function(v2, i) {
          r.length <= i && r.push({});
          r[i][k] = v2;
        });
      }
    });

    console.log(r); */
