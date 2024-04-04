var fs = require('fs');
var obj;
fs.readFile('./public/municipalities.topojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    // console.log(JSON.stringify((obj.objects.municipalities)))

    const cities = [];

    for (prop of obj.objects.municipalities.geometries) {
        // console.log(prop.properties)

        // const idstr = prop.properties.GID_1.split("_")[0].substr(4);

        const regex = /JPN\.(\d{1,2})\.(\d{1,2})_\d/gm;

        // Alternative syntax using RegExp constructor
        // const regex = new RegExp('JPN\\.(\\d{1,2})\\.(\\d{1,2})_\\d', 'gm')

        const str = prop.properties.GID_2;
        let m;
        let prepectureID = 0;
        let id = 0;

        while ((m = regex.exec(str)) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }

            // The result can be accessed through the `m`-variable.
            m.forEach((match, groupIndex) => {
                // console.log(`Found match, group ${groupIndex}: ${match}`);
                if (groupIndex === 1) {
                    prepectureID = parseInt(match);
                }

                if (groupIndex === 2) {
                    id = parseInt(match);
                }
            });

        }


        const new_props = {
            id: id,
            name_en: prop.properties.VARNAME_1,
            name_jp: prop.properties.NL_NAME_1,
            type: prop.properties.ENGTYPE_2,
            prepecture: {
                id: prepectureID,
                name_jp: prop.properties.NL_NAME_2,
                name_en: prop.properties.NAME_2,
            }
            // str: prop.properties.ISO_1
        }

        // console.log(new_props);

        prop.properties = new_props;
        cities.push(prop.properties);
    }

    console.log(JSON.stringify(obj));

});
