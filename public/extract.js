var fs = require('fs');
var obj;
fs.readFile('./municipalities.topojson', 'utf8', function (err, data) {
    if (err) throw err;
    obj = JSON.parse(data);

    console.log(JSON.stringify((obj.objects.municipalities)))

    const cities = [];

    // for (prop of obj.features) {
    //     // console.log(prop.properties)

    //     // const idstr = prop.properties.GID_1.split("_")[0].substr(4);

    //     const new_props = {
    //         name_en: prop.properties.VARNAME_1,
    //         name_jp: prop.properties.NL_NAME_1,
    //         id: parseInt(prop.properties.ISO_1.substr(3)),
    //         // str: prop.properties.ISO_1
    //     }

    //     console.log(new_props);

    //     prop.properties = new_props;
    //     cities.push(new_props);
    // }
    // console.log(cities.filter((item) => !isNaN(item.id)).sort((a,b) => a.id - b.id), cities.filter((item) => !isNaN(item.id)).sort((a,b) => a.id - b.id).length)
    // console.log(JSON.stringify(obj));

});
