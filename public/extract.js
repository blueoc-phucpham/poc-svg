var fs = require('fs');
var obj;
fs.readFile('./prefectures.topojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    for (prop of obj.features) {
        console.log(prop.properties)

        const idstr = prop.properties.GID_1.split("_");

        const new_props = {
            name_en: prop.properties.NAME_1,
            name_jp: prop.properties.NL_NAME_1,
            id:  12,
        }

    }

});
