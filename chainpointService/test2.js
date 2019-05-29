var string = '{"key1": "value", "key2": "value1", "Key3": {"key31":"value 31"}}';



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


var p = {
          "proofElements": [
            {
                "hashIdNode": "1002b280-7c9e-11e9-a84a-01fbe0ad3329",
                "proof": "eJyNk8FuEzEQhl+GI2ns8Xhs7ykSr8Cpl2hsj8lKIRtltwWOhQvXHrgilRa1IC5IiGPfI2+DNw1FDSB1JR92vP/vb7z/vL+ZpW41yOvhdjEM676ZTl+ZNh91mxfTtOB2te7a1TA9NVfDm7V8fXZfulpwv9jOMKNQXc5o1NpjSohYLFHJDoJzokgFhCJZtAajrEVP2cQoWpIF+jbazNs8X3VZtk+0UhDBq4lLQSZaS5iwR54oXaIozsZA+LmT9CfxZTsMcqec8/ADlA4TZScAzzU2EBoLx/f2qduM9poriX1oT67aJ+89J+AAh/aj8t/29vgmbniVFtKfv/285CjL74mX87HUbeZ3e5fduv94drHcPt1xtrl5TI9nn7r1db/gCVjaiXcUo/gRHRyKP6zafjiFRlvrrbEGVX2ahNGKU74ocWQkRe2oiBFfYsHgTSSKPpRAFDhTLqZUSqGCWSp/YlDOaefBaVM/CpgcCzm2KjOaiFYTkKDzgqJtfU9BRSxQ2DpWoN0h5YytxOqRK6YFn0xyWlsOo92YL7RQbIFa98EiGsXjhoopZ8dBIP9lSCkDYQLlsRKEELJKJQTjSWIwZJhcBMslZLAI2TsTolGxCJHD4sqhYTCApAPeX2RwjW5+j008+jMv4/g0NQrNXnF2sdnO6n+v4EXnkVigduAyA7iYNBIhs7AkTsWh0r5iYFaacs2DJusi8gOc67uQ9efvdoN5WQ/7ss9dm6/3x16dbNr+fHv0P8RpVckq82a6F0zH7P8CNxlTUA==",
                "anchorsComplete": [
                    "cal"
                ]
            },
            {
                "hashIdNode": "1009b760-7c9e-11e9-9dd0-01f161954d50",
                "proof": "eJyNU8tuFDEQ/BmObNbdbj96TivxC5xyWdnuNjtS2F3tTHgcAxeuOXBFggQlIC5IiCP/sX+Dd/OARCCYGV88ruqqcveby1lZLUd9Mf5YjON66KbT57aXg9XmybQsUr9cr/rlOH1mz8eXa/386HbrfJGGxXZGQurbChYIIFIpRFSd91UCcghqvGHCqqIAaI1zFL3YnBW0OPRfdjTzXubLlej2ARjDOXgzCYV1AqA8YREzMVDBAzsSZ77vIcNxftqPo14h52n8hgZ4YtwE8TFQh9w5PLylL6vNnp4E2fxOn5lSowexLMaJyH36HfLP9PbwMm/Ssix0OH318ShlPfpa0tF8t7XazK/+na3Ww7uT90fbh3udvXT/4/Hkw2p9MSzSBJ3fg/cq9uB/O7gPfrvsh/EZduBcdNZhNO3pwGYTLAdvQwRKlL1JJop4gpxEWdUlVrAFCxgxKhBzJGSP7ai0Q5DVsRMraBBrQkTmaAonDoVS8Cycs+eKJVefQFMmW9GqRaOA9a7KzXZmmvuiStEIWNM+LVBcYaqVcom1GNteFymIRXLAgYNRqzlhBE72vu2ZL4KeCppI4DJzi6dUZhu9ZrbeJh8yulRZ0BFKbGlka3JV7wPVUO8TcivbLohugmzhddDdjE0++DUvu/HpWit014i9v929O6ogRSQokjVBWmohFyDvKSVNWlKpgQzEJoOkJSJJLHgXMqU7ci6ummw4fb0fzLNW7NN13/VycV32/HjTD6fbg79JnDaULiVtpteA6a73fwK5IlCg",
                "anchorsComplete": [
                    "cal"
                ]
            }
        ]
}

var q = {

         "verifiedElements": [
            {
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "1002b280-7c9e-11e9-a84a-01fbe0ad3329",
                "hashIdCore": "11afed50-7c9e-11e9-a867-01c888ac2a92",
                "hashSubmittedNodeAt": "2019-05-22T14:29:52Z",
                "hashSubmittedCoreAt": "2019-05-22T14:29:55Z",
                "branch": "cal_anchor_branch",
                "uri": "http://80.211.115.171/calendar/3246194/hash",
                "type": "cal",
                "anchorId": "3246194",
                "expectedValue": "9ad4210410fd66e76a212f3cc8d0199ba2be8b5968bd48a1603b77d833ecebba",
                "verified": true,
                "verifiedAt": "2019-05-22T14:30:03Z"
            },
            {
                "hash": "4d4e6d4e73141184cc444f566fd72977e060942fede1123055486d3bbe1ec526",
                "hashIdNode": "1009b760-7c9e-11e9-9dd0-01f161954d50",
                "hashIdCore": "104d2900-7c9e-11e9-b94a-011d39d05ddd",
                "hashSubmittedNodeAt": "2019-05-22T14:29:52Z",
                "hashSubmittedCoreAt": "2019-05-22T14:29:53Z",
                "branch": "cal_anchor_branch",
                "uri": "http://80.211.115.171/calendar/3246194/hash",
                "type": "cal",
                "anchorId": "3246194",
                "expectedValue": "9ad4210410fd66e76a212f3cc8d0199ba2be8b5968bd48a1603b77d833ecebba",
                "verified": true,
                "verifiedAt": "2019-05-22T14:30:03Z"
            }
        ]
}

var obj = o;
var obj2 = p;
var obj3 = q;

var xtable = [];
xtable[0] = Object.assign(obj.hashElements[0], obj2.proofElements[0], obj3.verifiedElements[0]);
xtable[1] = Object.assign(obj.hashElements[1], obj2.proofElements[1], obj3.verifiedElements[1]);

console.log(xtable);
