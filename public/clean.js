const raw = [
    {
        id: 1,
        name_en: "Agui",
        name_jp: "阿久比町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 2,
        name_en: "Aisai",
        name_jp: "愛西市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 3,
        name_en: "Anjō",
        name_jp: "安城市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 4,
        name_en: "Chiryū",
        name_jp: "知立市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 5,
        name_en: "Chita",
        name_jp: "知多市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 6,
        name_en: "Fusō",
        name_jp: "扶桑町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 7,
        name_en: "Gamagōri",
        name_jp: "蒲郡市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 8,
        name_en: "Handa",
        name_jp: "半田市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 9,
        name_en: "Haruhi",
        name_jp: "春日町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 10,
        name_en: "Hazu",
        name_jp: "幡豆町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 11,
        name_en: "Hekinan",
        name_jp: "碧南市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 12,
        name_en: "Higashiura",
        name_jp: "東浦町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 13,
        name_en: "Ichinomiya/Owari-ichinomiya",
        name_jp: "一宮市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 14,
        name_en: "Inazawa",
        name_jp: "稲沢市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 15,
        name_en: "Inuyama",
        name_jp: "犬山市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 16,
        name_en: "Isshiki",
        name_jp: "一色町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 17,
        name_en: "Iwakura",
        name_jp: "岩倉市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 18,
        name_en: "Jimokuji",
        name_jp: "甚目寺町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 19,
        name_en: "Kanie",
        name_jp: "蟹江町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 20,
        name_en: "Kariya",
        name_jp: "刈谷市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 21,
        name_en: "Kasugai",
        name_jp: "春日井市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 22,
        name_en: "Kira",
        name_jp: "吉良町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 23,
        name_en: "Kisosaki",
        name_jp: "木曽岬町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 24,
        name_en: "Kitanagoya",
        name_jp: "北名古屋市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 25,
        name_en: "Kiyosu",
        name_jp: "清須市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 26,
        name_en: "Komaki",
        name_jp: "小牧市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 27,
        name_en: "Kōnan",
        name_jp: "江南市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 28,
        name_en: "Kōta",
        name_jp: "幸田町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 29,
        name_en: "Kozakai",
        name_jp: "小坂井町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 30,
        name_en: "Mihama",
        name_jp: "美浜町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 31,
        name_en: "Minamichita",
        name_jp: "南知多町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 32,
        name_en: "Mito",
        name_jp: "御津町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 33,
        name_en: "Miwa",
        name_jp: "美和町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 34,
        name_en: "Miyoshi",
        name_jp: "三好町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 35,
        name_en: "Nagakute",
        name_jp: "長久手町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 36,
        name_en: "Nagoya",
        name_jp: "名古屋市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 37,
        name_en: "Nishio",
        name_jp: "西尾市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 38,
        name_en: "Nisshin",
        name_jp: "日進市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 39,
        name_en: "Ōbu",
        name_jp: "大府市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 40,
        name_en: "Ōguchi",
        name_jp: "大口町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 41,
        name_en: "Ōharu",
        name_jp: "大治町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 42,
        name_en: "Okazaki",
        name_jp: "岡崎市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 43,
        name_en: "Otowa",
        name_jp: "音羽町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 44,
        name_en: "Owariasahi",
        name_jp: "尾張旭市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 45,
        name_en: "Seto",
        name_jp: "瀬戸市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 46,
        name_en: "Shinshiro",
        name_jp: "新城市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 47,
        name_en: "Shippō",
        name_jp: "七宝町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 48,
        name_en: "Shitara",
        name_jp: "設楽町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 49,
        name_en: "Tahara",
        name_jp: "田原市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 50,
        name_en: "Takahama",
        name_jp: "高浜市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 51,
        name_en: "Taketoyo",
        name_jp: "武豊町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 52,
        name_en: "Tobishima",
        name_jp: "飛島村",
        type: "Village",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 53,
        name_en: "Tōei",
        name_jp: "東栄町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 54,
        name_en: "Tōgō",
        name_jp: "東郷町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 55,
        name_en: "Tōkai",
        name_jp: "東海市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 56,
        name_en: "Tokoname",
        name_jp: "常滑市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 57,
        name_en: "Toyoake",
        name_jp: "豊明市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 58,
        name_en: "Toyohashi",
        name_jp: "豊橋市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 59,
        name_en: "Toyokawa",
        name_jp: "豊川市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 60,
        name_en: "Toyone",
        name_jp: "豊根村",
        type: "Village",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 61,
        name_en: "Toyota",
        name_jp: "豊田市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 62,
        name_en: "Toyoyama",
        name_jp: "豊山町",
        type: "Town",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 63,
        name_en: "Tsushima",
        name_jp: "津島市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 64,
        name_en: "Yatomi",
        name_jp: "弥富市",
        type: "City",
        prepecture: {
            id: 23,
            name_jp: "愛知県",
            name_en: "Aichi"
        }
    },
    {
        id: 1,
        name_en: "Akita",
        name_jp: "秋田市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 2,
        name_en: "Daisen",
        name_jp: "大仙市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 3,
        name_en: "Fujisato",
        name_jp: "藤里町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 4,
        name_en: "Gojōme",
        name_jp: "五城目町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 5,
        name_en: "Hachirōgata",
        name_jp: "郎潟町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 6,
        name_en: "Happō",
        name_jp: "峰町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 7,
        name_en: "Higashinaruse",
        name_jp: "東成瀬村",
        type: "Village",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 8,
        name_en: "Ikawa",
        name_jp: "井川町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 9,
        name_en: "Kamikoani",
        name_jp: "上小阿仁村",
        type: "Village",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 10,
        name_en: "Katagami",
        name_jp: "潟上市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 11,
        name_en: "Kazuno",
        name_jp: "鹿角市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 12,
        name_en: "Kitaakita",
        name_jp: "北秋田市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 13,
        name_en: "Kosaka",
        name_jp: "小坂町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 14,
        name_en: "Misato",
        name_jp: "美郷町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 15,
        name_en: "Mitane",
        name_jp: "三種町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 16,
        name_en: "Nikaho",
        name_jp: "にかほ市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 17,
        name_en: "Noshiro",
        name_jp: "能代市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 18,
        name_en: "Ōdate",
        name_jp: "大館市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 19,
        name_en: "Oga",
        name_jp: "男鹿市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 20,
        name_en: "Ōgata",
        name_jp: "大潟村",
        type: "Village",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 21,
        name_en: "Semboku",
        name_jp: "仙北市",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 22,
        name_en: "Ugo",
        name_jp: "羽後町",
        type: "Town",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 23,
        name_en: "Yokote",
        name_jp: "横手市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 24,
        name_en: "Yurihonjō",
        name_jp: "由利本荘市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 25,
        name_en: "Yuzawa",
        name_jp: "湯沢市",
        type: "City",
        prepecture: {
            id: 5,
            name_jp: "秋田県",
            name_en: "Akita"
        }
    },
    {
        id: 1,
        name_en: "Ajigasawa",
        name_jp: "鰺ヶ沢町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 2,
        name_en: "Aomori",
        name_jp: "青森市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 3,
        name_en: "Fujisaki",
        name_jp: "藤崎町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 4,
        name_en: "Fukaura",
        name_jp: "深浦町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 5,
        name_en: "Gonohe",
        name_jp: "五戸町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 6,
        name_en: "Goshogawara",
        name_jp: "五所川原市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 7,
        name_en: "Hachinohe",
        name_jp: "八戸市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 8,
        name_en: "Hashikami",
        name_jp: "階上町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 9,
        name_en: "Higashidōri",
        name_jp: "東通村",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 10,
        name_en: "Hirakawa",
        name_jp: "平川市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 11,
        name_en: "Hiranai",
        name_jp: "平内町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 12,
        name_en: "Hirosaki",
        name_jp: "弘前市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 13,
        name_en: "Imabetsu",
        name_jp: "今別町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 14,
        name_en: "Inakadate",
        name_jp: "田舎館村",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 15,
        name_en: "Itayanagi",
        name_jp: "板柳町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 16,
        name_en: "Kazamaura",
        name_jp: "風間浦村",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 17,
        name_en: "Kuroishi",
        name_jp: "黒石市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 18,
        name_en: "Misawa",
        name_jp: "三沢市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 19,
        name_en: "Mutsu",
        name_jp: "むつ市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 20,
        name_en: "Nakadomari",
        name_jp: "中泊町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 21,
        name_en: "Nanbu",
        name_jp: "南部町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 22,
        name_en: "Nishimeya",
        name_jp: "西目屋村",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 23,
        name_en: "Noheji",
        name_jp: "野辺地町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 24,
        name_en: "Oirase",
        name_jp: "おいらせ町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 25,
        name_en: "Ōma",
        name_jp: "大間町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 26,
        name_en: "Ōwani",
        name_jp: "大鰐町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 27,
        name_en: "Rokkasho",
        name_jp: "六ヶ所村",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 28,
        name_en: "Rokunohe",
        name_jp: "六戸町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 29,
        name_en: "Sai",
        name_jp: "佐井村",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 30,
        name_en: "Sannohe",
        name_jp: "三戸町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 31,
        name_en: "Shichinohe",
        name_jp: "七戸町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 32,
        name_en: "Shingō",
        name_jp: "新郷村,",
        type: "Village",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 33,
        name_en: "Sotogahama",
        name_jp: "外ヶ浜町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 34,
        name_en: "Takko",
        name_jp: "田子町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 35,
        name_en: "Tōhoku",
        name_jp: "東北町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 36,
        name_en: "Towada",
        name_jp: "十和田市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 37,
        name_en: "Tsugaru",
        name_jp: "つがる市",
        type: "City",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 38,
        name_en: "Tsuruta",
        name_jp: "鶴田町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 39,
        name_en: "Yokohama",
        name_jp: "横浜町",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 40,
        name_en: "Yomogita",
        name_jp: "蓬田村",
        type: "Town",
        prepecture: {
            id: 2,
            name_jp: "青森県",
            name_en: "Aomori"
        }
    },
    {
        id: 1,
        name_en: "Abiko",
        name_jp: "我孫子市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 2,
        name_en: "Asahi",
        name_jp: "旭市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 3,
        name_en: "Chiba",
        name_jp: "千葉市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 4,
        name_en: "Chōnan",
        name_jp: "長南町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 5,
        name_en: "Chōsei",
        name_jp: "長生村",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 6,
        name_en: "Chōshi",
        name_jp: "銚子市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 7,
        name_en: "Funabashi",
        name_jp: "船橋市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 8,
        name_en: "Futtsu",
        name_jp: "富津市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 9,
        name_en: "Ichihara",
        name_jp: "市原市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 10,
        name_en: "Ichikawa",
        name_jp: "市川市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 11,
        name_en: "Ichinomiya",
        name_jp: "一宮町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 12,
        name_en: "Inba",
        name_jp: "印旛村",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 13,
        name_en: "Inzai",
        name_jp: "印西市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 14,
        name_en: "Isumi",
        name_jp: "いすみ市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 15,
        name_en: "Kamagaya",
        name_jp: "鎌ヶ谷市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 16,
        name_en: "Kamogawa",
        name_jp: "鴨川市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 17,
        name_en: "Kashiwa",
        name_jp: "柏市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 18,
        name_en: "Katori",
        name_jp: "香取市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 19,
        name_en: "Katsuura",
        name_jp: "勝浦市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 20,
        name_en: "Kimitsu",
        name_jp: "君津市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 21,
        name_en: "Kisarazu",
        name_jp: "木更津市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 22,
        name_en: "Kōzaki",
        name_jp: "神崎町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 23,
        name_en: "Kujūkuri",
        name_jp: "九十九里町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 24,
        name_en: "Kyonan",
        name_jp: "鋸南町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 25,
        name_en: "Matsudo",
        name_jp: "松戸市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 26,
        name_en: "Minamibōsō",
        name_jp: "南房総市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 27,
        name_en: "Mobara",
        name_jp: "茂原市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 28,
        name_en: "Motono",
        name_jp: "本埜村",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 29,
        name_en: "Mutsuzawa",
        name_jp: "睦沢町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 30,
        name_en: "Nagara",
        name_jp: "長柄町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 31,
        name_en: "Nagareyama",
        name_jp: "流山市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 32,
        name_en: "Narashino",
        name_jp: "習志野市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 33,
        name_en: "Narita",
        name_jp: "成田市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 34,
        name_en: "Noda",
        name_jp: "野田市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 35,
        name_en: "Ōamishirasato",
        name_jp: "大網白里町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 36,
        name_en: "Onjuku",
        name_jp: "御宿町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 37,
        name_en: "Ōtaki",
        name_jp: "大多喜町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 38,
        name_en: "Sakae",
        name_jp: "栄町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 39,
        name_en: "Sakura",
        name_jp: "佐倉市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 40,
        name_en: "Sanmu",
        name_jp: "山武市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 41,
        name_en: "Shibayama",
        name_jp: "芝山町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 42,
        name_en: "Shirako",
        name_jp: "白子町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 43,
        name_en: "Shiroi",
        name_jp: "白井市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 44,
        name_en: "Shisui",
        name_jp: "酒々井町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 45,
        name_en: "Sodegaura",
        name_jp: "袖ヶ浦市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 46,
        name_en: "Sōsa",
        name_jp: "匝瑳市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 47,
        name_en: "Tako",
        name_jp: "多古町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 48,
        name_en: "Tateyama",
        name_jp: "館山市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 49,
        name_en: "Tōgane",
        name_jp: "東金市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 50,
        name_en: "Tomisato",
        name_jp: "富里市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 51,
        name_en: "Tōnoshō",
        name_jp: "東庄町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 52,
        name_en: "Urayasu",
        name_jp: "浦安市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 53,
        name_en: "Yachimata",
        name_jp: "八街市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 54,
        name_en: "Yachiyo",
        name_jp: "八千代市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 55,
        name_en: "Yokoshibahikari",
        name_jp: "横芝光町",
        type: "Town",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 56,
        name_en: "Yotsukaido",
        name_jp: "四街道市",
        type: "City",
        prepecture: {
            id: 12,
            name_jp: "千葉県",
            name_en: "Chiba"
        }
    },
    {
        id: 1,
        name_en: "Ainan",
        name_jp: "愛南町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 2,
        name_en: "Ikata",
        name_jp: "伊方町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 3,
        name_en: "Imabari",
        name_jp: "今治市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 4,
        name_en: "Iyo",
        name_jp: "伊予市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 5,
        name_en: "Kamijima",
        name_jp: "上島町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 6,
        name_en: "Kihoku",
        name_jp: "鬼北町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 7,
        name_en: "Kumakōgen",
        name_jp: "久万高原町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 8,
        name_en: "Masaki",
        name_jp: "松前町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 9,
        name_en: "Matsuno",
        name_jp: "松野町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 10,
        name_en: "Matsuyama",
        name_jp: "松山市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 11,
        name_en: "Niihama",
        name_jp: "新居浜市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 12,
        name_en: "Ōzu",
        name_jp: "大洲市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 13,
        name_en: "Saijō",
        name_jp: "西条市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 14,
        name_en: "Seiyo",
        name_jp: "西予市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 15,
        name_en: "Shikokuchūō",
        name_jp: "四国中央市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 16,
        name_en: "Tobe",
        name_jp: "砥部町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 17,
        name_en: "Tōon",
        name_jp: "東温市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 18,
        name_en: "Uchiko",
        name_jp: "内子町",
        type: "Town",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 19,
        name_en: "Uwajima",
        name_jp: "宇和島市",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 20,
        name_en: "Yawatahama",
        name_jp: "八幡浜",
        type: "City",
        prepecture: {
            id: 38,
            name_jp: "愛媛県",
            name_en: "Ehime"
        }
    },
    {
        id: 1,
        name_en: "Awara",
        name_jp: "あわら市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 2,
        name_en: "Echizen",
        name_jp: "越前市",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 3,
        name_en: "EchizenCity",
        name_jp: "越前市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 4,
        name_en: "Eiheiji",
        name_jp: "永平寺町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 5,
        name_en: "Fukui",
        name_jp: "福井市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 6,
        name_en: "Ikeda",
        name_jp: "池田町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 7,
        name_en: "Katsuyama",
        name_jp: "勝山市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 8,
        name_en: "Mihama",
        name_jp: "美浜町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 9,
        name_en: "Minamiechizen",
        name_jp: "南越前町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 10,
        name_en: "Obama",
        name_jp: "小浜市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 11,
        name_en: "Ōi",
        name_jp: "おおい町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 12,
        name_en: "Ōno",
        name_jp: "大野市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 13,
        name_en: "Sabae",
        name_jp: "鯖江市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 14,
        name_en: "SakaiCity",
        name_jp: "坂井市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 15,
        name_en: "Takahama",
        name_jp: "高浜町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 16,
        name_en: "Tsuruga",
        name_jp: "敦賀市",
        type: "City",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 17,
        name_en: "Wakasa",
        name_jp: "若狭町",
        type: "Town",
        prepecture: {
            id: 18,
            name_jp: "福井県",
            name_en: "Fukui"
        }
    },
    {
        id: 1,
        name_en: "Aka",
        name_jp: "赤村",
        type: "Village",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 2,
        name_en: "Asakura",
        name_jp: "朝倉市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 3,
        name_en: "Ashiya",
        name_jp: "芦屋町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 4,
        name_en: "Buzen",
        name_jp: "豊前市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 5,
        name_en: "Chikugo",
        name_jp: "筑後市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 6,
        name_en: "Chikujō",
        name_jp: "築上町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 7,
        name_en: "Chikushino",
        name_jp: "筑紫野市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 8,
        name_en: "Chikuzen",
        name_jp: "筑前町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 9,
        name_en: "Dazaifu",
        name_jp: "太宰府市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 10,
        name_en: "Fukuchi",
        name_jp: "福智町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 11,
        name_en: "Fukuoka",
        name_jp: "福岡市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 12,
        name_en: "Fukutsu",
        name_jp: "福津市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 13,
        name_en: "Hirokawa",
        name_jp: "広川町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 14,
        name_en: "Hisayama",
        name_jp: "久山町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 15,
        name_en: "Hoshino",
        name_jp: "星野村",
        type: "Village",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 16,
        name_en: "Iizuka",
        name_jp: "飯塚市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 17,
        name_en: "Itoda",
        name_jp: "糸田町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 18,
        name_en: "Kama",
        name_jp: "嘉麻市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 19,
        name_en: "Kanda",
        name_jp: "苅田町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 20,
        name_en: "Kasuga",
        name_jp: "春日市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 21,
        name_en: "Kasuya",
        name_jp: "粕屋町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 22,
        name_en: "Kawara",
        name_jp: "香春町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 23,
        name_en: "Kawasaki",
        name_jp: "川崎町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 24,
        name_en: "Keisen",
        name_jp: "桂川町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 25,
        name_en: "Kitakyūshū",
        name_jp: "北九州市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 26,
        name_en: "Koga",
        name_jp: "古賀市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 27,
        name_en: "Kōge",
        name_jp: "上毛町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 28,
        name_en: "Kotake",
        name_jp: "小竹町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 29,
        name_en: "Kurate",
        name_jp: "鞍手町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 30,
        name_en: "Kurogi",
        name_jp: "黒木町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 31,
        name_en: "Kurume",
        name_jp: "久留米市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 32,
        name_en: "Maebaru",
        name_jp: "前原市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 33,
        name_en: "Miyako",
        name_jp: "みやこ町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 34,
        name_en: "Miyama",
        name_jp: "みやま市",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 35,
        name_en: "Miyawaka",
        name_jp: "宮若市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 36,
        name_en: "Mizumaki",
        name_jp: "水巻町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 37,
        name_en: "Munakata",
        name_jp: "宗像市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 38,
        name_en: "Nakagawa",
        name_jp: "那珂川町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 39,
        name_en: "Nakama",
        name_jp: "中間市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 40,
        name_en: "Nijō",
        name_jp: "二丈町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 41,
        name_en: "Nōgata",
        name_jp: "直方市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 42,
        name_en: "Ogōri",
        name_jp: "小郡市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 43,
        name_en: "Okagaki",
        name_jp: "岡垣町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 44,
        name_en: "Ōkawa",
        name_jp: "大川市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 45,
        name_en: "Ōki",
        name_jp: "大木町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 46,
        name_en: "Ōmuta",
        name_jp: "大牟田市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 47,
        name_en: "Onga",
        name_jp: "遠賀町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 48,
        name_en: "Ōnojō",
        name_jp: "大野城市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 49,
        name_en: "Ōtō",
        name_jp: "大任町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 50,
        name_en: "Sasaguri",
        name_jp: "篠栗町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 51,
        name_en: "Shima",
        name_jp: "志摩町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 52,
        name_en: "Shime",
        name_jp: "志免町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 53,
        name_en: "Shingū",
        name_jp: "新宮町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 54,
        name_en: "Soeda",
        name_jp: "添田町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 55,
        name_en: "Sue",
        name_jp: "須恵町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 56,
        name_en: "Tachiarai",
        name_jp: "大刀洗町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 57,
        name_en: "Tachibana",
        name_jp: "立花町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 58,
        name_en: "Tagawa",
        name_jp: "田川市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 59,
        name_en: "Tōhō",
        name_jp: "東峰村",
        type: "Village",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 60,
        name_en: "Ukiha",
        name_jp: "うきは市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 61,
        name_en: "Umi",
        name_jp: "宇美町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 62,
        name_en: "Yabe",
        name_jp: "矢部村",
        type: "Village",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 63,
        name_en: "Yame",
        name_jp: "八女市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 64,
        name_en: "Yanagawa",
        name_jp: "柳川市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 65,
        name_en: "Yoshitomi",
        name_jp: "吉富町",
        type: "Town",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 66,
        name_en: "Yukuhashi",
        name_jp: "行橋市",
        type: "City",
        prepecture: {
            id: 40,
            name_jp: "福岡県",
            name_en: "Fukuoka"
        }
    },
    {
        id: 1,
        name_en: "Aizubange",
        name_jp: "会津坂下町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 2,
        name_en: "Aizumisato",
        name_jp: "NA",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 3,
        name_en: "Aizuwakamatsu",
        name_jp: "会津若松市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 4,
        name_en: "Asakawa",
        name_jp: "浅川町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 5,
        name_en: "Bandai",
        name_jp: "磐梯町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 6,
        name_en: "Date",
        name_jp: "伊達市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 7,
        name_en: "Fukushima",
        name_jp: "福島市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 8,
        name_en: "Furudono",
        name_jp: "古殿町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 9,
        name_en: "Futaba",
        name_jp: "双葉町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 10,
        name_en: "Hanawa",
        name_jp: "塙町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 11,
        name_en: "Hinoemata",
        name_jp: "檜枝岐村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 12,
        name_en: "Hirata",
        name_jp: "平田村",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 13,
        name_en: "Hirono",
        name_jp: "広野町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 14,
        name_en: "Iino",
        name_jp: "飯野町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 15,
        name_en: "Iitate",
        name_jp: "飯舘村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 16,
        name_en: "Inawashiro",
        name_jp: "猪苗代町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 17,
        name_en: "Ishikawa",
        name_jp: "石川町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 18,
        name_en: "Iwaki",
        name_jp: "いわき市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 19,
        name_en: "Izumizaki",
        name_jp: "泉崎村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 20,
        name_en: "Kagamiishi",
        name_jp: "鏡石町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 21,
        name_en: "Kaneyama",
        name_jp: "金山町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 22,
        name_en: "Katsurao",
        name_jp: "葛尾村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 23,
        name_en: "Kawamata",
        name_jp: "川俣町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 24,
        name_en: "Kawauchi",
        name_jp: "川内村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 25,
        name_en: "Kitakata",
        name_jp: "喜多方市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 26,
        name_en: "Kitashiobara",
        name_jp: "北塩原村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 27,
        name_en: "Kōri",
        name_jp: "桑折町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 28,
        name_en: "Kōriyama",
        name_jp: "郡山市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 29,
        name_en: "Kunimi",
        name_jp: "国見町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 30,
        name_en: "Miharu",
        name_jp: "三春町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 31,
        name_en: "Minamiaizu",
        name_jp: "南会津町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 32,
        name_en: "Minamisōma",
        name_jp: "南相馬市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 33,
        name_en: "Mishima",
        name_jp: "三島町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 34,
        name_en: "Motomiya",
        name_jp: "本宮市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 35,
        name_en: "Nakajima",
        name_jp: "中島村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 36,
        name_en: "Namie",
        name_jp: "浪江町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 37,
        name_en: "Naraha",
        name_jp: "楢葉町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 38,
        name_en: "Nihonmatsu",
        name_jp: "二本松市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 39,
        name_en: "Nishiaizu",
        name_jp: "西会津町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 40,
        name_en: "Nishigou",
        name_jp: "西郷村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 41,
        name_en: "Ōkuma",
        name_jp: "大熊町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 42,
        name_en: "Ono",
        name_jp: "小野町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 43,
        name_en: "Ōtama",
        name_jp: "大玉村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 44,
        name_en: "Samegawa",
        name_jp: "鮫川村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 45,
        name_en: "Shimogō",
        name_jp: "下郷町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 46,
        name_en: "Shinchi",
        name_jp: "新地町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 47,
        name_en: "Shirakawa",
        name_jp: "白河市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 48,
        name_en: "Shōwa",
        name_jp: "昭和村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 49,
        name_en: "Sōma",
        name_jp: "相馬市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 50,
        name_en: "Sukagawa",
        name_jp: "須賀川市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 51,
        name_en: "Tadami",
        name_jp: "只見町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 52,
        name_en: "Tamakawa",
        name_jp: "玉川村",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 53,
        name_en: "Tamura",
        name_jp: "田村市",
        type: "City",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 54,
        name_en: "Tanagura",
        name_jp: "棚倉町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 55,
        name_en: "Ten'ei",
        name_jp: "天栄村;",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 56,
        name_en: "Tomioka",
        name_jp: "富岡町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 57,
        name_en: "Yabuki",
        name_jp: "矢吹町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 58,
        name_en: "Yamatsuri",
        name_jp: "矢祭町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 59,
        name_en: "Yanaizu",
        name_jp: "柳津町",
        type: "Town",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 60,
        name_en: "Yugawa",
        name_jp: "湯川村",
        type: "Village",
        prepecture: {
            id: 7,
            name_jp: "福島県",
            name_en: "Fukushima"
        }
    },
    {
        id: 1,
        name_en: "Anpachi",
        name_jp: "安八町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 2,
        name_en: "Ena",
        name_jp: "恵那市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 3,
        name_en: "Gero",
        name_jp: "下呂市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 4,
        name_en: "Gifu",
        name_jp: "岐阜市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 5,
        name_en: "Ginan",
        name_jp: "岐南町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 6,
        name_en: "Godo",
        name_jp: "神戸町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 7,
        name_en: "Gujō",
        name_jp: "郡上市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 8,
        name_en: "Hashima",
        name_jp: "羽島市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 9,
        name_en: "Hichiso",
        name_jp: "七宗町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 10,
        name_en: "Hida",
        name_jp: "飛騨市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 11,
        name_en: "Higashishirakawa",
        name_jp: "東白川村",
        type: "Village",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 12,
        name_en: "Ibigawa",
        name_jp: "揖斐川町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 13,
        name_en: "IkedaTown",
        name_jp: "池田町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 14,
        name_en: "Kaizu",
        name_jp: "海津市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 15,
        name_en: "Kakamigahara",
        name_jp: "各務原市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 16,
        name_en: "Kani",
        name_jp: "可児市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 17,
        name_en: "Kasamatsu",
        name_jp: "笠松町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 18,
        name_en: "Kawabe",
        name_jp: "川辺町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 19,
        name_en: "Kitagata",
        name_jp: "北方町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 20,
        name_en: "Mino",
        name_jp: "美濃市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 21,
        name_en: "Minokamo",
        name_jp: "美濃加茂市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 22,
        name_en: "Mitake",
        name_jp: "御嵩町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 23,
        name_en: "Mizuho",
        name_jp: "瑞穂市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 24,
        name_en: "Mizunami",
        name_jp: "瑞浪市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 25,
        name_en: "Motosu",
        name_jp: "本巣市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 26,
        name_en: "Nakatsugawa",
        name_jp: "中津川市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 27,
        name_en: "Ōgaki",
        name_jp: "大垣市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 28,
        name_en: "Ono",
        name_jp: "大野町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 29,
        name_en: "Sakahogi",
        name_jp: "坂祝町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 30,
        name_en: "Seki",
        name_jp: "関市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 31,
        name_en: "Sekigahara",
        name_jp: "関ヶ原町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 32,
        name_en: "Shirakawa",
        name_jp: "白川村",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 33,
        name_en: "ShirakawaVillage",
        name_jp: "白川村",
        type: "Village",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 34,
        name_en: "Tajimi",
        name_jp: "多治見市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 35,
        name_en: "Takayama",
        name_jp: "高山市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 36,
        name_en: "Tarui",
        name_jp: "垂井町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 37,
        name_en: "Toki",
        name_jp: "土岐市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 38,
        name_en: "Tomika",
        name_jp: "富加町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 40,
        name_en: "Wanouchi",
        name_jp: "輪之内町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 41,
        name_en: "Yamagata",
        name_jp: "山県市",
        type: "City",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 42,
        name_en: "Yaotsu",
        name_jp: "八百津町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 43,
        name_en: "Yōrō",
        name_jp: "養老町",
        type: "Town",
        prepecture: {
            id: 21,
            name_jp: "岐阜県",
            name_en: "Gifu"
        }
    },
    {
        id: 1,
        name_en: "Annaka",
        name_jp: "安中市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 2,
        name_en: "Chiyoda",
        name_jp: "千代田町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 3,
        name_en: "Fujimi",
        name_jp: "富士見村",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 4,
        name_en: "Fujioka",
        name_jp: "藤岡市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 5,
        name_en: "Higashiagatsuma",
        name_jp: "東吾妻町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 6,
        name_en: "Isesaki",
        name_jp: "伊勢崎市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 7,
        name_en: "Itakura",
        name_jp: "板倉町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 8,
        name_en: "Kanna",
        name_jp: "神流町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 9,
        name_en: "Kanra",
        name_jp: "甘楽町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 10,
        name_en: "Katashina",
        name_jp: "片品村",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 11,
        name_en: "Kawaba",
        name_jp: "川場町",
        type: "Village",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 12,
        name_en: "Kiryū",
        name_jp: "桐生市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 13,
        name_en: "Kuni",
        name_jp: "六合村",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 14,
        name_en: "Kusatsu",
        name_jp: "草津町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 15,
        name_en: "Maebashi",
        name_jp: "前橋市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 16,
        name_en: "Meiwa",
        name_jp: "明和町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 17,
        name_en: "Midori",
        name_jp: "みどり市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 18,
        name_en: "Minakami",
        name_jp: "みなかみ町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 19,
        name_en: "Naganohara",
        name_jp: "長野原町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 20,
        name_en: "Nakanojō",
        name_jp: "中之条町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 21,
        name_en: "Nanmoku",
        name_jp: "南牧村",
        type: "Village",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 22,
        name_en: "Numata",
        name_jp: "沼田市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 23,
        name_en: "Ōizumi",
        name_jp: "大泉町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 24,
        name_en: "Ōra",
        name_jp: "邑楽町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 25,
        name_en: "Ōta",
        name_jp: "太田市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 26,
        name_en: "Shibukawa",
        name_jp: "渋川市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 27,
        name_en: "Shimonita",
        name_jp: "下仁田町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 28,
        name_en: "Shintō",
        name_jp: "榛東村",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 29,
        name_en: "Shōwa",
        name_jp: "昭和村",
        type: "Village",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 30,
        name_en: "Takasaki",
        name_jp: "高崎市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 31,
        name_en: "Takayama",
        name_jp: "高山村",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 32,
        name_en: "Tamamura",
        name_jp: "玉村町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 33,
        name_en: "Tatebayashi",
        name_jp: "館林市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 34,
        name_en: "Tomioka",
        name_jp: "富岡市",
        type: "City",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 35,
        name_en: "Tsumagoi",
        name_jp: "嬬恋村",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 36,
        name_en: "Ueno",
        name_jp: "上野村",
        type: "Village",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 37,
        name_en: "Yoshii",
        name_jp: "吉井町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 38,
        name_en: "Yoshioka",
        name_jp: "吉岡町",
        type: "Town",
        prepecture: {
            id: 10,
            name_jp: "群馬県",
            name_en: "Gunma"
        }
    },
    {
        id: 1,
        name_en: "Akiōta",
        name_jp: "安芸太田町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 2,
        name_en: "Akitakata",
        name_jp: "安芸高田市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 3,
        name_en: "Etajima",
        name_jp: "江田島市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 4,
        name_en: "Fuchū",
        name_jp: "府中市",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 5,
        name_en: "FuchūCity",
        name_jp: "府中市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 6,
        name_en: "Fukuyama",
        name_jp: "福山市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 7,
        name_en: "Hatsukaichi",
        name_jp: "廿日市市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 8,
        name_en: "Higashihiroshima",
        name_jp: "東広島市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 9,
        name_en: "Hiroshima",
        name_jp: "広島市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 10,
        name_en: "Jinsekikōgen",
        name_jp: "神石高原町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 11,
        name_en: "Kaita",
        name_jp: "海田町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 12,
        name_en: "Kitahiroshima",
        name_jp: "北広島町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 13,
        name_en: "Kumano",
        name_jp: "熊野町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 14,
        name_en: "Kure",
        name_jp: "呉市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 15,
        name_en: "Mihara",
        name_jp: "三原市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 16,
        name_en: "Miyoshi",
        name_jp: "三次市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 17,
        name_en: "Onomichi",
        name_jp: "尾道市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 18,
        name_en: "Ōsakikamijima",
        name_jp: "大崎上島町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 19,
        name_en: "Ōtake",
        name_jp: "大竹市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 20,
        name_en: "Saka",
        name_jp: "坂町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 21,
        name_en: "Sera",
        name_jp: "世羅町",
        type: "Town",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 22,
        name_en: "Shōbara",
        name_jp: "庄原市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 23,
        name_en: "Takehara",
        name_jp: "竹原市",
        type: "City",
        prepecture: {
            id: 34,
            name_jp: "広島県",
            name_en: "Hiroshima"
        }
    },
    {
        id: 1,
        name_en: "Abashiri",
        name_jp: "網走市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 2,
        name_en: "Abira",
        name_jp: "安平町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 3,
        name_en: "Aibetsu",
        name_jp: "愛別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 4,
        name_en: "Akabira",
        name_jp: "赤平市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 5,
        name_en: "Akaigawa",
        name_jp: "赤井川村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 6,
        name_en: "Akkeshi",
        name_jp: "厚岸町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 7,
        name_en: "Asahikawa",
        name_jp: "旭川市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 8,
        name_en: "Ashibetsu",
        name_jp: "芦別市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 9,
        name_en: "Ashoro",
        name_jp: "足寄町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 10,
        name_en: "Assabu",
        name_jp: "厚沢部町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 11,
        name_en: "Atsuma",
        name_jp: "厚真町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 12,
        name_en: "Betsukai",
        name_jp: "別海町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 13,
        name_en: "Bibai",
        name_jp: "美唄市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 14,
        name_en: "Biei",
        name_jp: "美瑛町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 15,
        name_en: "Bifuka",
        name_jp: "美深町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 16,
        name_en: "Bihoro",
        name_jp: "美幌町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 17,
        name_en: "Biratori",
        name_jp: "平取町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 18,
        name_en: "Chippubetsu",
        name_jp: "秩父別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 19,
        name_en: "Chitose",
        name_jp: "千歳市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 20,
        name_en: "Date",
        name_jp: "伊達市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 21,
        name_en: "Ebetsu",
        name_jp: "江別市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 22,
        name_en: "Enbetsu",
        name_jp: "遠別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 23,
        name_en: "Engaru",
        name_jp: "遠軽町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 24,
        name_en: "Eniwa",
        name_jp: "恵庭市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 25,
        name_en: "Erimo",
        name_jp: "えりも町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 26,
        name_en: "Esashi",
        name_jp: "枝幸町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 27,
        name_en: "EsashiCapital",
        name_jp: "枝幸町",
        type: "Capital",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 28,
        name_en: "Fukagawa",
        name_jp: "深川市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 29,
        name_en: "Fukushima",
        name_jp: "福島町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 30,
        name_en: "Furano",
        name_jp: "富良野市",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 31,
        name_en: "Furubira",
        name_jp: "古平町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 32,
        name_en: "Haboro",
        name_jp: "羽幌町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 33,
        name_en: "Hakodate",
        name_jp: "函館市",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 34,
        name_en: "Hamanaka",
        name_jp: "浜中町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 35,
        name_en: "Hamatonbetsu",
        name_jp: "浜頓別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 36,
        name_en: "Hidaka",
        name_jp: "日高町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 37,
        name_en: "Higashikagura",
        name_jp: "東神楽町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 38,
        name_en: "Higashikawa",
        name_jp: "東川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 39,
        name_en: "Hiroo",
        name_jp: "広尾町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 40,
        name_en: "Hokuryū",
        name_jp: "北竜町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 41,
        name_en: "Hokuto",
        name_jp: "北斗市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 42,
        name_en: "Honbetsu",
        name_jp: "本別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 43,
        name_en: "Horokanai",
        name_jp: "幌加内町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 44,
        name_en: "Horonobe",
        name_jp: "幌延町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 45,
        name_en: "Ikeda",
        name_jp: "池田町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 46,
        name_en: "Imakane",
        name_jp: "今金町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 47,
        name_en: "Ishikari",
        name_jp: "石狩市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 48,
        name_en: "Iwamizawa",
        name_jp: "岩見沢市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 49,
        name_en: "Iwanai",
        name_jp: "岩内町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 50,
        name_en: "Kamifurano",
        name_jp: "上富良野町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 51,
        name_en: "Kamikawa",
        name_jp: "上川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 52,
        name_en: "Kaminokuni",
        name_jp: "上ノ国町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 53,
        name_en: "Kamishihoro",
        name_jp: "上士幌町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 54,
        name_en: "Kamisunagawa",
        name_jp: "上砂川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 55,
        name_en: "Kamiyūbetsu",
        name_jp: "上湧別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 56,
        name_en: "Kamoenai",
        name_jp: "神恵内村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 57,
        name_en: "Kenbuchi",
        name_jp: "剣淵町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 58,
        name_en: "Kikonai",
        name_jp: "木古内町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 59,
        name_en: "Kimobetsu",
        name_jp: "喜茂別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 60,
        name_en: "Kitahiroshima",
        name_jp: "北広島市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 61,
        name_en: "Kitami",
        name_jp: "北見市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 62,
        name_en: "Kiyosato",
        name_jp: "清里町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 63,
        name_en: "Koshimizu",
        name_jp: "小清水町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 64,
        name_en: "Kunneppu",
        name_jp: "訓子府町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 65,
        name_en: "Kuriyama",
        name_jp: "栗山町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 66,
        name_en: "Kuromatsunai",
        name_jp: "黒松内町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 67,
        name_en: "Kushiro",
        name_jp: "釧路町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 68,
        name_en: "KushiroCity",
        name_jp: "釧路町",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 69,
        name_en: "Kutchan",
        name_jp: "倶知安町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 70,
        name_en: "Kyōgoku",
        name_jp: "京極町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 71,
        name_en: "Kyōwa",
        name_jp: "共和町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 72,
        name_en: "Makkari",
        name_jp: "真狩村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 73,
        name_en: "Makubetsu",
        name_jp: "幕別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 74,
        name_en: "Mashike",
        name_jp: "増毛町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 75,
        name_en: "Matsumae",
        name_jp: "松前町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 76,
        name_en: "Memuro",
        name_jp: "芽室町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 77,
        name_en: "Mikasa",
        name_jp: "三笠市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 78,
        name_en: "Minamifurano",
        name_jp: "南富良野町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 79,
        name_en: "Monbetsu",
        name_jp: "紋別市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 80,
        name_en: "Mori",
        name_jp: "森町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 81,
        name_en: "Moseushi",
        name_jp: "妹背牛町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 82,
        name_en: "Mukawa",
        name_jp: "鵡川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 83,
        name_en: "Muroran",
        name_jp: "室蘭市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 84,
        name_en: "Naganuma",
        name_jp: "長沼町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 85,
        name_en: "Naie",
        name_jp: "奈井江町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 86,
        name_en: "Nakafurano",
        name_jp: "中富良野町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 87,
        name_en: "Nakagawa",
        name_jp: "中川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 88,
        name_en: "Nakasatsunai",
        name_jp: "中札内村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 89,
        name_en: "Nakashibetsu",
        name_jp: "中標津町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 90,
        name_en: "Nakatonbetsu",
        name_jp: "中頓別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 91,
        name_en: "Nanae",
        name_jp: "七飯町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 92,
        name_en: "Nanporo",
        name_jp: "南幌町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 93,
        name_en: "Nayoro",
        name_jp: "名寄市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 94,
        name_en: "Nemuro",
        name_jp: "根室市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 95,
        name_en: "Niikappu",
        name_jp: "新冠町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 96,
        name_en: "Niki",
        name_jp: "仁木町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 97,
        name_en: "Niseko",
        name_jp: "ニセコ町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 98,
        name_en: "Nishiokoppe",
        name_jp: "西興部村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 99,
        name_en: "Noboribetsu",
        name_jp: "登別市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 100,
        name_en: "Numata",
        name_jp: "沼田町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 101,
        name_en: "Obihiro",
        name_jp: "帯広市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 102,
        name_en: "Obira",
        name_jp: "小平町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 103,
        name_en: "Oketo",
        name_jp: "置戸町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 104,
        name_en: "Okoppe",
        name_jp: "興部町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 105,
        name_en: "Okushiri",
        name_jp: "奥尻町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 106,
        name_en: "Ōmu",
        name_jp: "雄武町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 107,
        name_en: "Oshamanbe",
        name_jp: "長万部町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 108,
        name_en: "Otaru",
        name_jp: "小樽市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 109,
        name_en: "Otobe",
        name_jp: "乙部町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 110,
        name_en: "Otofuke",
        name_jp: "音更町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 111,
        name_en: "Otoineppu",
        name_jp: "音威子府村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 112,
        name_en: "Ōzora",
        name_jp: "大空町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 113,
        name_en: "Pippu",
        name_jp: "比布町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 114,
        name_en: "Rankoshi",
        name_jp: "蘭越町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 115,
        name_en: "Rausu",
        name_jp: "羅臼町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 116,
        name_en: "Rebun",
        name_jp: "礼文町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 117,
        name_en: "Rikubetsu",
        name_jp: "陸別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 118,
        name_en: "Rishiri",
        name_jp: "利尻町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 119,
        name_en: "Rishirifuji",
        name_jp: "利尻富士町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 120,
        name_en: "Rumoi",
        name_jp: "留萌市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 121,
        name_en: "Rusutsu",
        name_jp: "留寿都村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 122,
        name_en: "Samani",
        name_jp: "様似町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 123,
        name_en: "Sapporo",
        name_jp: "札幌市",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 124,
        name_en: "Sarabetsu",
        name_jp: "更別村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 125,
        name_en: "Saroma",
        name_jp: "佐呂間町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 126,
        name_en: "Sarufutsu",
        name_jp: "猿払村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 127,
        name_en: "Setana",
        name_jp: "せたな町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 128,
        name_en: "Shakotan",
        name_jp: "積丹町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 129,
        name_en: "Shari",
        name_jp: "斜里町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 130,
        name_en: "Shibecha",
        name_jp: "標茶町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 131,
        name_en: "Shibetsu",
        name_jp: "士別市",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 132,
        name_en: "ShibetsuCity",
        name_jp: "士別市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 133,
        name_en: "Shihoro",
        name_jp: "士幌町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 134,
        name_en: "Shikabe",
        name_jp: "鹿部町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 135,
        name_en: "Shikaoi",
        name_jp: "鹿追町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 136,
        name_en: "Shimamaki",
        name_jp: "島牧村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 137,
        name_en: "Shimizu",
        name_jp: "清水町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 138,
        name_en: "Shimokawa",
        name_jp: "下川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 139,
        name_en: "Shimukappu",
        name_jp: "占冠村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 140,
        name_en: "Shinhidaka",
        name_jp: "新ひだか町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 141,
        name_en: "Shinshinotsu",
        name_jp: "新篠津村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 142,
        name_en: "Shintoku",
        name_jp: "新得町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 143,
        name_en: "Shintotsukawa",
        name_jp: "新十津川町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 144,
        name_en: "Shiranuka",
        name_jp: "白糠町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 145,
        name_en: "Shiraoi",
        name_jp: "登別市",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 146,
        name_en: "Shiriuchi",
        name_jp: "知内町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 147,
        name_en: "Shosanbetsu",
        name_jp: "初山別村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 148,
        name_en: "Sōbetsu",
        name_jp: "壮瞥町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 149,
        name_en: "Sunagawa",
        name_jp: "砂川市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 150,
        name_en: "Suttsu",
        name_jp: "寿都町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 151,
        name_en: "Taiki",
        name_jp: "大樹町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 152,
        name_en: "Takasu",
        name_jp: "鷹栖町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 153,
        name_en: "Takikawa",
        name_jp: "滝川市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 154,
        name_en: "Takinoue",
        name_jp: "滝上町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 155,
        name_en: "Teshikaga",
        name_jp: "弟子屈町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 156,
        name_en: "Teshio",
        name_jp: "天塩町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 157,
        name_en: "Tōbetsu",
        name_jp: "当別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 158,
        name_en: "Tōma",
        name_jp: "当麻町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 159,
        name_en: "Tomakomai",
        name_jp: "苫小牧市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 160,
        name_en: "Tomamae",
        name_jp: "苫前町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 161,
        name_en: "Tomari",
        name_jp: "泊村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 162,
        name_en: "Tōyako",
        name_jp: "洞爺湖町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 163,
        name_en: "Toyokoro",
        name_jp: "豊頃町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 164,
        name_en: "Toyotomi",
        name_jp: "豊富町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 165,
        name_en: "Toyoura",
        name_jp: "豊浦町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 166,
        name_en: "Tsubetsu",
        name_jp: "津別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 167,
        name_en: "Tsukigata",
        name_jp: "月形町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 168,
        name_en: "Tsurui",
        name_jp: "鶴居村",
        type: "Village",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 169,
        name_en: "Urahoro",
        name_jp: "浦幌町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 170,
        name_en: "Urakawa",
        name_jp: "浦河町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 171,
        name_en: "Urausu",
        name_jp: "浦臼町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 172,
        name_en: "Uryū",
        name_jp: "雨竜町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 173,
        name_en: "Utashinai",
        name_jp: "歌志内市",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 174,
        name_en: "Wakkanai",
        name_jp: "稚内市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 175,
        name_en: "Wassamu",
        name_jp: "和寒町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 176,
        name_en: "Yakumo",
        name_jp: "八雲町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 177,
        name_en: "Yoichi",
        name_jp: "余市町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 178,
        name_en: "Yūbari",
        name_jp: "夕張市",
        type: "City",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 179,
        name_en: "Yūbetsu",
        name_jp: "湧別町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 180,
        name_en: "Yuni",
        name_jp: "由仁町",
        type: "Town",
        prepecture: {
            id: 1,
            name_jp: "北海道",
            name_en: "Hokkaido"
        }
    },
    {
        id: 1,
        name_en: "Aioi",
        name_jp: "相生",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 2,
        name_en: "Akashi",
        name_jp: "明石",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 3,
        name_en: "Akō",
        name_jp: "赤穂市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 4,
        name_en: "Amagasaki",
        name_jp: "尼崎市",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 5,
        name_en: "Asago",
        name_jp: "朝来市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 6,
        name_en: "Ashiya",
        name_jp: "芦屋市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 7,
        name_en: "Awaji",
        name_jp: "淡路市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 8,
        name_en: "Fukusaki",
        name_jp: "福崎町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 9,
        name_en: "Harima",
        name_jp: "播磨町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 10,
        name_en: "Himeji",
        name_jp: "姫路",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 11,
        name_en: "Ichikawa",
        name_jp: "市川町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 12,
        name_en: "Inagawa",
        name_jp: "猪名川町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 13,
        name_en: "Inami",
        name_jp: "稲美町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 14,
        name_en: "Itami",
        name_jp: "伊丹市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 15,
        name_en: "Kakogawa",
        name_jp: "加古川市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 16,
        name_en: "Kami",
        name_jp: "香美町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 17,
        name_en: "Kamigōri",
        name_jp: "上郡町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 18,
        name_en: "Kamikawa",
        name_jp: "神河町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 19,
        name_en: "Kasai",
        name_jp: "加西市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 20,
        name_en: "Katō",
        name_jp: "加東市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 21,
        name_en: "Kawanishi",
        name_jp: "川西市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 22,
        name_en: "Kobe",
        name_jp: "神戸市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 23,
        name_en: "Miki",
        name_jp: "三木市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 24,
        name_en: "Minamiawaji",
        name_jp: "南あわじ市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 25,
        name_en: "Nishinomiya",
        name_jp: "西宮市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 26,
        name_en: "Nishiwaki",
        name_jp: "西脇市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 27,
        name_en: "Ono",
        name_jp: "小野市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 28,
        name_en: "Sanda",
        name_jp: "三田市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 29,
        name_en: "Sasayama",
        name_jp: "篠山市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 30,
        name_en: "Sayō",
        name_jp: "佐用町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 31,
        name_en: "Shin'onsen",
        name_jp: "新温泉町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 32,
        name_en: "Shisō",
        name_jp: "宍粟市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 33,
        name_en: "Sumoto",
        name_jp: "洲本市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 34,
        name_en: "Taishi",
        name_jp: "太子町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 35,
        name_en: "Taka",
        name_jp: "多可町",
        type: "Town",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 36,
        name_en: "Takarazuka",
        name_jp: "宝塚市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 37,
        name_en: "Takasago",
        name_jp: "高砂市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 38,
        name_en: "Tamba",
        name_jp: "丹波市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 39,
        name_en: "Tatsuno",
        name_jp: "たつの市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 40,
        name_en: "Toyooka",
        name_jp: "豊岡市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 41,
        name_en: "Yabu",
        name_jp: "養父市",
        type: "City",
        prepecture: {
            id: 28,
            name_jp: "兵庫県",
            name_en: "Hyōgo"
        }
    },
    {
        id: 1,
        name_en: "Ami",
        name_jp: "阿見町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 2,
        name_en: "Bandō",
        name_jp: "坂東市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 3,
        name_en: "Chikusei",
        name_jp: "筑西市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 4,
        name_en: "Daigo",
        name_jp: "大子町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 5,
        name_en: "Goka",
        name_jp: "五霞町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 6,
        name_en: "Hitachi",
        name_jp: "日立市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 7,
        name_en: "Hitachinaka",
        name_jp: "ひたちなか市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 8,
        name_en: "Hitachiōmiya",
        name_jp: "常陸大宮市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 9,
        name_en: "Hitachiōta",
        name_jp: "常陸太田市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 10,
        name_en: "Hokota",
        name_jp: "鉾田市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 11,
        name_en: "Ibaraki",
        name_jp: "茨城町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 12,
        name_en: "Inashiki",
        name_jp: "稲敷市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 13,
        name_en: "Ishioka",
        name_jp: "石岡市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 14,
        name_en: "Itako",
        name_jp: "潮来市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 15,
        name_en: "Jōsō",
        name_jp: "常総市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 16,
        name_en: "Kamisu",
        name_jp: "神栖市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 17,
        name_en: "Kasama",
        name_jp: "笠間市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 18,
        name_en: "Kashima",
        name_jp: "鹿嶋市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 19,
        name_en: "Kasumigaura",
        name_jp: "かすみがうら市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 20,
        name_en: "Kawachi",
        name_jp: "河内町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 21,
        name_en: "Kitaibaraki",
        name_jp: "北茨城市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 22,
        name_en: "Koga",
        name_jp: "古河市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 23,
        name_en: "Miho",
        name_jp: "美浦村",
        type: "Village",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 24,
        name_en: "Mito",
        name_jp: "水戸市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 25,
        name_en: "Moriya",
        name_jp: "守谷市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 26,
        name_en: "Naka",
        name_jp: "那珂市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 27,
        name_en: "Namegata",
        name_jp: "行方市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 28,
        name_en: "Ōarai",
        name_jp: "大洗町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 29,
        name_en: "Omitama",
        name_jp: "小美玉市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 30,
        name_en: "Ryūgasaki",
        name_jp: "龍ヶ崎市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 31,
        name_en: "Sakai",
        name_jp: "境町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 32,
        name_en: "Sakuragawa",
        name_jp: "桜川市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 33,
        name_en: "Shimotsuma",
        name_jp: "下妻市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 34,
        name_en: "Shirosato",
        name_jp: "城里町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 35,
        name_en: "Takahagi",
        name_jp: "高萩市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 36,
        name_en: "Tōkai",
        name_jp: "東海村",
        type: "Village",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 37,
        name_en: "Tone",
        name_jp: "利根町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 38,
        name_en: "Toride",
        name_jp: "取手市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 39,
        name_en: "Tsuchiura",
        name_jp: "土浦市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 40,
        name_en: "Tsukuba",
        name_jp: "つくば市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 41,
        name_en: "Tsukubamirai",
        name_jp: "つくばみらい市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 42,
        name_en: "Ushiku",
        name_jp: "牛久市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 43,
        name_en: "Waterbody",
        name_jp: "NA",
        type: "Waterbody",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 44,
        name_en: "Yachiyo",
        name_jp: "八千代町",
        type: "Town",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 45,
        name_en: "Yūki",
        name_jp: "結城市",
        type: "City",
        prepecture: {
            id: 8,
            name_jp: "茨城県",
            name_en: "Ibaraki"
        }
    },
    {
        id: 1,
        name_en: "Anamizu",
        name_jp: "穴水町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 2,
        name_en: "Hakui",
        name_jp: "羽咋市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 3,
        name_en: "Hakusan",
        name_jp: "白山市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 4,
        name_en: "Hodatsushimizu",
        name_jp: "宝達志水町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 5,
        name_en: "Kaga",
        name_jp: "加賀市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 6,
        name_en: "Kahoku",
        name_jp: "かほく市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 7,
        name_en: "Kanazawa",
        name_jp: "金沢市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 8,
        name_en: "Kawakita",
        name_jp: "川北町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 9,
        name_en: "Komatsu",
        name_jp: "小松市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 10,
        name_en: "Nakanoto",
        name_jp: "中能登町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 11,
        name_en: "Nanao",
        name_jp: "七尾市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 12,
        name_en: "Nomi",
        name_jp: "能美市",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 13,
        name_en: "Nonoichi",
        name_jp: "野々市町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 14,
        name_en: "Noto",
        name_jp: "能登町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 15,
        name_en: "Shika",
        name_jp: "志賀町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 16,
        name_en: "Suzu",
        name_jp: "珠洲市,",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 17,
        name_en: "Tsubata",
        name_jp: "津幡町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 18,
        name_en: "Uchinada",
        name_jp: "内灘町",
        type: "Town",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 19,
        name_en: "Wajima",
        name_jp: "輪島市,",
        type: "City",
        prepecture: {
            id: 17,
            name_jp: "石川県",
            name_en: "Ishikawa"
        }
    },
    {
        id: 1,
        name_en: "Fudai",
        name_jp: "普代村",
        type: "Village",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 2,
        name_en: "Fujisawa",
        name_jp: "藤沢町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 3,
        name_en: "Hachimantai",
        name_jp: "八幡平市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 4,
        name_en: "Hanamaki",
        name_jp: "花巻市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 5,
        name_en: "Hiraizumi",
        name_jp: "平泉町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 6,
        name_en: "Hirono",
        name_jp: "洋野町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 7,
        name_en: "Ichinohe",
        name_jp: "一戸町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 8,
        name_en: "Ichinoseki",
        name_jp: "一関市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 9,
        name_en: "Iwate",
        name_jp: "岩手町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 10,
        name_en: "Iwazumi",
        name_jp: "岩泉町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 11,
        name_en: "Kamaishi",
        name_jp: "釜石市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 12,
        name_en: "Kanegasaki",
        name_jp: "金ヶ崎町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 13,
        name_en: "Karumai",
        name_jp: "軽米町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 14,
        name_en: "Kawai",
        name_jp: "川井村",
        type: "Village",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 15,
        name_en: "Kitakami",
        name_jp: "北上市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 16,
        name_en: "Kuji",
        name_jp: "久慈市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 17,
        name_en: "Kunohe",
        name_jp: "九戸村",
        type: "Village",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 18,
        name_en: "Kuzumaki",
        name_jp: "葛巻町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 19,
        name_en: "Miyako",
        name_jp: "宮古市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 20,
        name_en: "Morioka",
        name_jp: "盛岡市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 21,
        name_en: "Ninohe",
        name_jp: "二戸市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 22,
        name_en: "Nishiwaga",
        name_jp: "西和賀町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 23,
        name_en: "Noda",
        name_jp: "野田村",
        type: "Village",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 24,
        name_en: "Ōfunato",
        name_jp: "大船渡市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 25,
        name_en: "Ōshū",
        name_jp: "奥州市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 26,
        name_en: "Ōtsuchi",
        name_jp: "大槌町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 27,
        name_en: "Rikuzentakata",
        name_jp: "陸前高田市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 28,
        name_en: "Shiwa",
        name_jp: "紫波町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 29,
        name_en: "Shizukuishi",
        name_jp: "雫石町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 30,
        name_en: "Sumita",
        name_jp: "住田町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 31,
        name_en: "Takizawa",
        name_jp: "滝沢村",
        type: "Village",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 32,
        name_en: "Tanohata",
        name_jp: "田野畑村",
        type: "Village",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 33,
        name_en: "Tōno",
        name_jp: "遠野市",
        type: "City",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 34,
        name_en: "Yahaba",
        name_jp: "矢巾町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 35,
        name_en: "Yamada",
        name_jp: "山田町",
        type: "Town",
        prepecture: {
            id: 3,
            name_jp: "岩手県",
            name_en: "Iwate"
        }
    },
    {
        id: 1,
        name_en: "Ayagawa",
        name_jp: "綾川町",
        type: "Town",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 2,
        name_en: "Higashikagawa",
        name_jp: "東かがわ市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 3,
        name_en: "Kan'onji",
        name_jp: "観音寺市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 4,
        name_en: "Kotohira",
        name_jp: "琴平町",
        type: "Town",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 5,
        name_en: "Mannō",
        name_jp: "まんのう町",
        type: "Town",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 6,
        name_en: "Marugame",
        name_jp: "丸亀市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 7,
        name_en: "Miki",
        name_jp: "三木町",
        type: "Town",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 8,
        name_en: "Mitoyo",
        name_jp: "三豊市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 9,
        name_en: "Sakaide",
        name_jp: "坂出市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 10,
        name_en: "Sanuki",
        name_jp: "さぬき市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 11,
        name_en: "Tadotsu",
        name_jp: "多度津町",
        type: "Town",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 12,
        name_en: "Takamatsu",
        name_jp: "高松市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 13,
        name_en: "Utazu",
        name_jp: "宇多津町",
        type: "Town",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 14,
        name_en: "Zentsūji",
        name_jp: "善通寺市",
        type: "City",
        prepecture: {
            id: 37,
            name_jp: "香川県",
            name_en: "Kagawa"
        }
    },
    {
        id: 1,
        name_en: "Aira",
        name_jp: "姶良町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 2,
        name_en: "Akune",
        name_jp: "阿久根市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 3,
        name_en: "Amagi",
        name_jp: "天城町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 4,
        name_en: "Amami",
        name_jp: "奄美市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 5,
        name_en: "China",
        name_jp: "知名町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 6,
        name_en: "Higashikushira",
        name_jp: "東串良町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 7,
        name_en: "Hioki",
        name_jp: "日置市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 8,
        name_en: "Hishikari",
        name_jp: "菱刈町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 9,
        name_en: "Ibusuki",
        name_jp: "指宿市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 10,
        name_en: "Ichikikushikino",
        name_jp: "いちき串木野市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 11,
        name_en: "Isen",
        name_jp: "伊仙町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 12,
        name_en: "Izumi",
        name_jp: "出水市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 13,
        name_en: "Kagoshima",
        name_jp: "鹿児島市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 14,
        name_en: "Kajiki",
        name_jp: "加治木町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 15,
        name_en: "Kamō",
        name_jp: "蒲生町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 16,
        name_en: "Kanoya",
        name_jp: "鹿屋市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 17,
        name_en: "Kikai",
        name_jp: "喜界町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 18,
        name_en: "Kimotsuki",
        name_jp: "肝付町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 19,
        name_en: "Kinkō",
        name_jp: "錦江町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 20,
        name_en: "Kirishima",
        name_jp: "霧島市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 21,
        name_en: "Makurazaki",
        name_jp: "枕崎市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 22,
        name_en: "Minamikyūshū",
        name_jp: "南九州市",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 23,
        name_en: "Minamiōsumi",
        name_jp: "南大隅町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 24,
        name_en: "Minamisatsuma",
        name_jp: "南さつま市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 25,
        name_en: "Minamitane",
        name_jp: "南種子町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 26,
        name_en: "Mishima",
        name_jp: "三島村",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 27,
        name_en: "Nagashima",
        name_jp: "長島町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 28,
        name_en: "Nakatane",
        name_jp: "中種子町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 29,
        name_en: "Nishinoomote",
        name_jp: "西之表市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 30,
        name_en: "Ōkuchi",
        name_jp: "大口市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 31,
        name_en: "Ōsaki",
        name_jp: "大崎町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 32,
        name_en: "Satsuma",
        name_jp: "さつま町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 33,
        name_en: "Satsumasendai",
        name_jp: "薩摩川内市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 34,
        name_en: "Setouchi",
        name_jp: "瀬戸内町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 35,
        name_en: "Shibushi",
        name_jp: "志布志市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 36,
        name_en: "Soo",
        name_jp: "曽於市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 37,
        name_en: "Tarumizu",
        name_jp: "垂水市",
        type: "City",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 38,
        name_en: "Tatsugō",
        name_jp: "龍郷町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 39,
        name_en: "Tokunoshima",
        name_jp: "徳之島町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 40,
        name_en: "Toshima",
        name_jp: "十島村",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 41,
        name_en: "Uken",
        name_jp: "宇検村",
        type: "Village",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 42,
        name_en: "Wadomari",
        name_jp: "和泊町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 43,
        name_en: "Yakushima",
        name_jp: "屋久島町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 44,
        name_en: "Yamato",
        name_jp: "大和村",
        type: "Village",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 45,
        name_en: "Yoron",
        name_jp: "与論町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 46,
        name_en: "Yūsui",
        name_jp: "湧水町",
        type: "Town",
        prepecture: {
            id: 46,
            name_jp: "鹿児島県",
            name_en: "Kagoshima"
        }
    },
    {
        id: 1,
        name_en: "Aikawa",
        name_jp: "愛川町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 2,
        name_en: "Atsugi",
        name_jp: "厚木市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 3,
        name_en: "Ayase",
        name_jp: "綾瀬市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 4,
        name_en: "Chigasaki",
        name_jp: "茅ヶ崎市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 5,
        name_en: "Ebina",
        name_jp: "海老名市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 6,
        name_en: "Fujisawa",
        name_jp: "藤沢市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 7,
        name_en: "Hadano",
        name_jp: "秦野市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 8,
        name_en: "Hakone",
        name_jp: "箱根町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 9,
        name_en: "Hayama",
        name_jp: "葉山町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 10,
        name_en: "Hiratsuka",
        name_jp: "平塚市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 11,
        name_en: "Isehara",
        name_jp: "伊勢原市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 12,
        name_en: "Kaisei",
        name_jp: "開成町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 13,
        name_en: "Kamakura",
        name_jp: "鎌倉市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 14,
        name_en: "Kawasaki",
        name_jp: "川崎市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 15,
        name_en: "Kiyokawa",
        name_jp: "清川村",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 16,
        name_en: "Manazuru",
        name_jp: "真鶴町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 17,
        name_en: "Matsuda",
        name_jp: "松田町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 18,
        name_en: "Minamiashigara",
        name_jp: "南足柄市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 19,
        name_en: "Miura",
        name_jp: "三浦市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 20,
        name_en: "Nakai",
        name_jp: "中井町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 21,
        name_en: "Ninomiya",
        name_jp: "二宮町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 22,
        name_en: "Odawara",
        name_jp: "小田原市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 23,
        name_en: "Ōi",
        name_jp: "大井町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 24,
        name_en: "Ōiso",
        name_jp: "大磯町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 25,
        name_en: "Sagamihara",
        name_jp: "相模原市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 26,
        name_en: "Samukawa",
        name_jp: "寒川町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 27,
        name_en: "Yamakita",
        name_jp: "山北町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 28,
        name_en: "Yamato",
        name_jp: "大和市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 29,
        name_en: "Yokohama",
        name_jp: "横浜市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 30,
        name_en: "Yokosuka",
        name_jp: "横須賀市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 31,
        name_en: "Yugawara",
        name_jp: "湯河原町",
        type: "Town",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 32,
        name_en: "Zama",
        name_jp: "座間市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 33,
        name_en: "Zushi",
        name_jp: "逗子市",
        type: "City",
        prepecture: {
            id: 14,
            name_jp: "神奈川県",
            name_en: "Kanagawa"
        }
    },
    {
        id: 1,
        name_en: "Aki",
        name_jp: "安芸市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 2,
        name_en: "Geisei",
        name_jp: "芸西村",
        type: "Village",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 3,
        name_en: "Haruno",
        name_jp: "春野町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 4,
        name_en: "Hidaka",
        name_jp: "日高村",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 5,
        name_en: "Ino",
        name_jp: "いの町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 6,
        name_en: "Kami",
        name_jp: "香美市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 7,
        name_en: "Kitagawa",
        name_jp: "北川村",
        type: "Village",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 8,
        name_en: "Kōchi",
        name_jp: "高知市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 9,
        name_en: "Kōnan",
        name_jp: "香南市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 10,
        name_en: "Kuroshio",
        name_jp: "黒潮町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 11,
        name_en: "Mihara",
        name_jp: "三原村",
        type: "Village",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 12,
        name_en: "Motoyama",
        name_jp: "本山町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 13,
        name_en: "Muroto",
        name_jp: "室戸市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 14,
        name_en: "Nahari",
        name_jp: "奈半利町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 15,
        name_en: "Nakatosa",
        name_jp: "中土佐町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 16,
        name_en: "Nankoku",
        name_jp: "南国市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 17,
        name_en: "Niyodogawa",
        name_jp: "仁淀川町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 18,
        name_en: "Ochi",
        name_jp: "越知町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 19,
        name_en: "Ōkawa",
        name_jp: "大川村",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 20,
        name_en: "Ōtoyo",
        name_jp: "大豊町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 21,
        name_en: "Ōtsuki",
        name_jp: "大月町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 22,
        name_en: "Sakawa",
        name_jp: "佐川町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 23,
        name_en: "Shimanto",
        name_jp: "四万十町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 24,
        name_en: "ShimantoCity",
        name_jp: "四万十町",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 25,
        name_en: "Sukumo",
        name_jp: "宿毛市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 26,
        name_en: "Susaki",
        name_jp: "須崎市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 27,
        name_en: "Tano",
        name_jp: "田野町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 28,
        name_en: "Tosa",
        name_jp: "土佐町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 29,
        name_en: "TosaCity",
        name_jp: "土佐町",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 30,
        name_en: "Tosashimizu",
        name_jp: "土佐清水市",
        type: "City",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 31,
        name_en: "Tōyō",
        name_jp: "東洋町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 32,
        name_en: "Tsuno",
        name_jp: "津野町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 33,
        name_en: "Umaji",
        name_jp: "馬路村",
        type: "Village",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 34,
        name_en: "Yasuda",
        name_jp: "安田町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 35,
        name_en: "Yusuhara",
        name_jp: "檮原町",
        type: "Town",
        prepecture: {
            id: 39,
            name_jp: "高知県",
            name_en: "Kochi"
        }
    },
    {
        id: 1,
        name_en: "Amakusa",
        name_jp: "天草市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 42,
        name_en: "Arao",
        name_jp: "荒尾市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 2,
        name_en: "Asagiri",
        name_jp: "あさぎり町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 3,
        name_en: "Ashikita",
        name_jp: "芦北町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 4,
        name_en: "Aso",
        name_jp: "阿蘇市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 5,
        name_en: "Gyokutō",
        name_jp: "玉東町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 6,
        name_en: "Hikawa",
        name_jp: "氷川町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 7,
        name_en: "Hitoyoshi",
        name_jp: "人吉市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 8,
        name_en: "Itsuki",
        name_jp: "五木村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 9,
        name_en: "Jōnan",
        name_jp: "城南町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 10,
        name_en: "Kami-Amakusa",
        name_jp: "上天草市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 11,
        name_en: "Kashima",
        name_jp: "嘉島町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 12,
        name_en: "Kikuchi",
        name_jp: "菊池市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 13,
        name_en: "Kikuyō",
        name_jp: "菊陽町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 14,
        name_en: "Kōsa",
        name_jp: "甲佐町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 15,
        name_en: "Kōshi",
        name_jp: "合志市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 16,
        name_en: "Kuma",
        name_jp: "球磨村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 17,
        name_en: "Kumamoto",
        name_jp: "熊本市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 18,
        name_en: "Mashiki",
        name_jp: "益城町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 19,
        name_en: "Mifune",
        name_jp: "御船町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 20,
        name_en: "Minamata",
        name_jp: "水俣市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 21,
        name_en: "Minamiaso",
        name_jp: "南阿蘇村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 22,
        name_en: "Minamioguni",
        name_jp: "南小国町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 23,
        name_en: "Misato",
        name_jp: "美里町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 24,
        name_en: "Mizukami",
        name_jp: "水上村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 25,
        name_en: "Nagasu",
        name_jp: "長洲町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 26,
        name_en: "Nagomi",
        name_jp: "和水町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 27,
        name_en: "Nankan",
        name_jp: "南関町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 28,
        name_en: "Nishihara",
        name_jp: "西原村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 29,
        name_en: "Nishiki",
        name_jp: "錦町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 30,
        name_en: "Oguni",
        name_jp: "小国町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 31,
        name_en: "Ōzu",
        name_jp: "大津町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 32,
        name_en: "Reihoku",
        name_jp: "苓北町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 33,
        name_en: "Sagara",
        name_jp: "相良村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 34,
        name_en: "Takamori",
        name_jp: "高森町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 35,
        name_en: "Tamana",
        name_jp: "玉名市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 36,
        name_en: "Taragi",
        name_jp: "多良木町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 37,
        name_en: "Tomiai",
        name_jp: "富合町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 38,
        name_en: "Tsunagi",
        name_jp: "津奈木町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 39,
        name_en: "Ubuyama",
        name_jp: "産山村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 40,
        name_en: "Ueki",
        name_jp: "植木町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 41,
        name_en: "Uki",
        name_jp: "宇城市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 43,
        name_en: "Uto",
        name_jp: "宇土市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 44,
        name_en: "Yamae",
        name_jp: "山江村",
        type: "Village",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 45,
        name_en: "Yamaga",
        name_jp: "山鹿市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 46,
        name_en: "Yamato",
        name_jp: "山都町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 47,
        name_en: "Yatsushiro",
        name_jp: "八代市",
        type: "City",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 48,
        name_en: "Yunomae",
        name_jp: "湯前町",
        type: "Town",
        prepecture: {
            id: 43,
            name_jp: "熊本県",
            name_en: "Kumamoto"
        }
    },
    {
        id: 1,
        name_en: "Ayabe",
        name_jp: "綾部市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 2,
        name_en: "Fukuchiyama",
        name_jp: "福知山市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 3,
        name_en: "Ide",
        name_jp: "井手町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 4,
        name_en: "Ine",
        name_jp: "伊根",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 5,
        name_en: "Jōyō",
        name_jp: "城陽市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 6,
        name_en: "Kameoka",
        name_jp: "亀岡市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 7,
        name_en: "Kasagi",
        name_jp: "笠置町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 8,
        name_en: "Kizugawa",
        name_jp: "木津川市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 9,
        name_en: "Kumiyama",
        name_jp: "久御山",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 10,
        name_en: "Kyōtamba",
        name_jp: "京丹波町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 11,
        name_en: "Kyōtanabe",
        name_jp: "京田辺市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 12,
        name_en: "Kyōtango",
        name_jp: "京丹後市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 13,
        name_en: "Kyoto",
        name_jp: "京都市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 14,
        name_en: "Maizuru",
        name_jp: "舞鶴市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 15,
        name_en: "Minamiyamashiro",
        name_jp: "南山城村",
        type: "Village",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 16,
        name_en: "Miyazu",
        name_jp: "宮津",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 17,
        name_en: "Mukō",
        name_jp: "向日",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 18,
        name_en: "Nagaokakyō",
        name_jp: "長岡京市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 19,
        name_en: "Nantan",
        name_jp: "南丹市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 20,
        name_en: "Ōyamazaki",
        name_jp: "大山崎町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 21,
        name_en: "Seika",
        name_jp: "精華町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 22,
        name_en: "Uji",
        name_jp: "宇治市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 23,
        name_en: "Ujitawara",
        name_jp: "宇治田原町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 24,
        name_en: "Wazuka",
        name_jp: "和束町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 25,
        name_en: "Yawata",
        name_jp: "八幡市",
        type: "City",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 26,
        name_en: "Yosano",
        name_jp: "与謝野町",
        type: "Town",
        prepecture: {
            id: 26,
            name_jp: "京都府",
            name_en: "Kyoto"
        }
    },
    {
        id: 1,
        name_en: "Asahi",
        name_jp: "朝日町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 2,
        name_en: "Iga",
        name_jp: "伊賀市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 3,
        name_en: "Inabe",
        name_jp: "いなべ市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 4,
        name_en: "Ise",
        name_jp: "伊勢市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 5,
        name_en: "Kameyama",
        name_jp: "亀山市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 6,
        name_en: "Kawagoe",
        name_jp: "川越町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 7,
        name_en: "Kihō",
        name_jp: "紀宝町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 8,
        name_en: "Kihoku",
        name_jp: "紀北町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 9,
        name_en: "Komono",
        name_jp: "菰野町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 10,
        name_en: "Kumano",
        name_jp: "熊野市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 11,
        name_en: "Kuwana",
        name_jp: "桑名市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 12,
        name_en: "Matsusaka",
        name_jp: "松阪市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 13,
        name_en: "Meiwa",
        name_jp: "明和町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 14,
        name_en: "Mihama",
        name_jp: "御浜町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 15,
        name_en: "Minamiise",
        name_jp: "南伊勢町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 16,
        name_en: "Nabari",
        name_jp: "名張市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 17,
        name_en: "Ōdai",
        name_jp: "大台町",
        type: "Village",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 18,
        name_en: "Owase",
        name_jp: "尾鷲市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 19,
        name_en: "Shima",
        name_jp: "志摩市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 20,
        name_en: "Suzuka",
        name_jp: "鈴鹿市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 21,
        name_en: "Taiki",
        name_jp: "大紀町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 22,
        name_en: "Taki",
        name_jp: "多気町",
        type: "Village",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 23,
        name_en: "Tamaki",
        name_jp: "玉城町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 24,
        name_en: "Toba",
        name_jp: "鳥羽市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 25,
        name_en: "Tōin",
        name_jp: "東員町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 26,
        name_en: "Tsu",
        name_jp: "津市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 27,
        name_en: "Watarai",
        name_jp: "度会町",
        type: "Town",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 28,
        name_en: "Yokkaichi",
        name_jp: "四日市市",
        type: "City",
        prepecture: {
            id: 24,
            name_jp: "三重県",
            name_en: "Mie"
        }
    },
    {
        id: 1,
        name_en: "Higashimatsushima",
        name_jp: "東松島市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 2,
        name_en: "Ishinomaki",
        name_jp: "石巻市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 3,
        name_en: "Iwanuma",
        name_jp: "岩沼市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 4,
        name_en: "Kakuda",
        name_jp: "角田市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 5,
        name_en: "KamiTown",
        name_jp: "加美町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 6,
        name_en: "Kawasaki",
        name_jp: "川崎町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 7,
        name_en: "Kesennuma",
        name_jp: "気仙沼市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 8,
        name_en: "Kurihara",
        name_jp: "栗原市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 9,
        name_en: "Marumori",
        name_jp: "丸森町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 10,
        name_en: "Matsushima",
        name_jp: "松島町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 11,
        name_en: "Minamisanriku",
        name_jp: "南三陸町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 12,
        name_en: "Misato",
        name_jp: "美里町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 13,
        name_en: "Motoyoshi",
        name_jp: "本吉町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 14,
        name_en: "Murata",
        name_jp: "村田町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 15,
        name_en: "Natori",
        name_jp: "名取市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 16,
        name_en: "Ōgawara",
        name_jp: "大河原町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 17,
        name_en: "Ōhira",
        name_jp: "大衡村",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 18,
        name_en: "Onagawa",
        name_jp: "女川町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 19,
        name_en: "Ōsaki",
        name_jp: "大崎市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 20,
        name_en: "Ōsato",
        name_jp: "大郷町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 21,
        name_en: "Rifu",
        name_jp: "利府町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 22,
        name_en: "Sendai",
        name_jp: "仙台市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 23,
        name_en: "Shibata",
        name_jp: "柴田町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 24,
        name_en: "Shichigahama",
        name_jp: "七ヶ浜町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 25,
        name_en: "Shichikashuku",
        name_jp: "七ヶ宿町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 26,
        name_en: "Shikama",
        name_jp: "色麻町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 27,
        name_en: "Shiogama",
        name_jp: "塩竈市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 28,
        name_en: "Shiroishi",
        name_jp: "白石市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 29,
        name_en: "Tagajō",
        name_jp: "多賀城市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 30,
        name_en: "Taiwa",
        name_jp: "大和町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 31,
        name_en: "Tome",
        name_jp: "登米市",
        type: "City",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 32,
        name_en: "Tomiya",
        name_jp: "富谷町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 33,
        name_en: "Wakuya",
        name_jp: "涌谷町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 34,
        name_en: "Watari",
        name_jp: "亘理町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 35,
        name_en: "Yamamoto",
        name_jp: "山元町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 36,
        name_en: "Zaō",
        name_jp: "蔵王町",
        type: "Town",
        prepecture: {
            id: 4,
            name_jp: "宮城県",
            name_en: "Miyagi"
        }
    },
    {
        id: 1,
        name_en: "Aya",
        name_jp: "綾町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 2,
        name_en: "Ebino",
        name_jp: "えびの市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 3,
        name_en: "Gokase",
        name_jp: "五ヶ瀬町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 4,
        name_en: "Hinokage",
        name_jp: "日之影町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 5,
        name_en: "Hyūga",
        name_jp: "日向市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 6,
        name_en: "Kadogawa",
        name_jp: "門川町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 7,
        name_en: "Kawaminami",
        name_jp: "川南町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 8,
        name_en: "Kijō",
        name_jp: "木城町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 9,
        name_en: "Kitagō",
        name_jp: "北郷町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 10,
        name_en: "Kiyotake",
        name_jp: "清武町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 11,
        name_en: "Kobayashi",
        name_jp: "小林市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 12,
        name_en: "Kunitomi",
        name_jp: "国富町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 13,
        name_en: "Kushima",
        name_jp: "串間市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 14,
        name_en: "Mimata",
        name_jp: "三股町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 15,
        name_en: "Misato",
        name_jp: "美郷町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 16,
        name_en: "Miyakonojō",
        name_jp: "都城市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 17,
        name_en: "Miyazaki",
        name_jp: "宮崎市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 18,
        name_en: "Morotsuka",
        name_jp: "諸塚村",
        type: "Village",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 19,
        name_en: "Nangō",
        name_jp: "南郷町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 20,
        name_en: "Nichinan",
        name_jp: "日南市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 21,
        name_en: "Nishimera",
        name_jp: "西米良村",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 22,
        name_en: "Nobeoka",
        name_jp: "延岡市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 23,
        name_en: "Nojiri",
        name_jp: "野尻町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 24,
        name_en: "Saito",
        name_jp: "西都市",
        type: "City",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 25,
        name_en: "Shība",
        name_jp: "椎葉村",
        type: "Village",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 26,
        name_en: "Shintomi",
        name_jp: "新富町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 27,
        name_en: "Takachiho",
        name_jp: "高千穂町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 28,
        name_en: "Takaharu",
        name_jp: "高原町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 29,
        name_en: "Takanabe",
        name_jp: "高鍋町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 30,
        name_en: "Tsuno",
        name_jp: "都農町",
        type: "Town",
        prepecture: {
            id: 45,
            name_jp: "宮崎県",
            name_en: "Miyazaki"
        }
    },
    {
        id: 1,
        name_en: "Achi",
        name_jp: "阿智村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 2,
        name_en: "Agematsu",
        name_jp: "上松町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 3,
        name_en: "Anan",
        name_jp: "阿南町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 4,
        name_en: "Aoki",
        name_jp: "青木村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 5,
        name_en: "Asahi",
        name_jp: "朝日村",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 6,
        name_en: "Azumino",
        name_jp: "安曇野市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 7,
        name_en: "Chikuhoku",
        name_jp: "筑北村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 8,
        name_en: "Chikuma",
        name_jp: "千曲市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 9,
        name_en: "Chino",
        name_jp: "茅野市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 10,
        name_en: "Fujimi",
        name_jp: "富士見町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 11,
        name_en: "Hakuba",
        name_jp: "白馬村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 12,
        name_en: "Hara",
        name_jp: "原村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 13,
        name_en: "Hata",
        name_jp: "波田町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 14,
        name_en: "Hiraya",
        name_jp: "平谷村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 15,
        name_en: "Iida",
        name_jp: "飯田市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 16,
        name_en: "Iijima",
        name_jp: "飯島町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 17,
        name_en: "Iiyama",
        name_jp: "飯山市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 18,
        name_en: "Iizuna",
        name_jp: "飯綱",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 19,
        name_en: "Ikeda",
        name_jp: "池田町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 20,
        name_en: "Ikusaka",
        name_jp: "生坂村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 21,
        name_en: "Ina",
        name_jp: "伊那市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 78,
        name_en: "Kamiina",
        name_jp: "上伊那郡",
        type: "County",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 22,
        name_en: "Karuizawa",
        name_jp: "軽井沢町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 23,
        name_en: "Kawakami",
        name_jp: "川上村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 24,
        name_en: "Kijimadaira",
        name_jp: "木島平村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 25,
        name_en: "Kiso",
        name_jp: "木曽町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 26,
        name_en: "KisoVillage",
        name_jp: "木曽町",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 27,
        name_en: "Kitaaiki",
        name_jp: "北相木村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 77,
        name_en: "Kitaazumi",
        name_jp: "北安曇郡",
        type: "County",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 28,
        name_en: "Komagane",
        name_jp: "駒ヶ根市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 29,
        name_en: "Komoro",
        name_jp: "小諸市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 30,
        name_en: "Koumi",
        name_jp: "小海町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 31,
        name_en: "Matsukawa",
        name_jp: "松川町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 32,
        name_en: "Matsumoto",
        name_jp: "松本市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 33,
        name_en: "Minamiaiki",
        name_jp: "南相木村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 34,
        name_en: "Minamimak",
        name_jp: "南牧村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 35,
        name_en: "Minamiminowa",
        name_jp: "南箕輪村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 36,
        name_en: "Minowa",
        name_jp: "箕輪町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 37,
        name_en: "Miyada",
        name_jp: "宮田村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 38,
        name_en: "Miyota",
        name_jp: "御代田",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 39,
        name_en: "Nagano",
        name_jp: "長野市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 40,
        name_en: "Nagawa",
        name_jp: "長和町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 41,
        name_en: "Nagiso",
        name_jp: "南木曽町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 42,
        name_en: "Nakagawa",
        name_jp: "中川村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 43,
        name_en: "Nakajō",
        name_jp: "中条村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 44,
        name_en: "Nakano",
        name_jp: "中野市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 45,
        name_en: "Neba",
        name_jp: "根羽村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 46,
        name_en: "Nozawaonsen",
        name_jp: "野沢温泉村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 47,
        name_en: "Obuse",
        name_jp: "小布施町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 48,
        name_en: "Ogawa",
        name_jp: "小川村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 49,
        name_en: "Okaya",
        name_jp: "岡谷市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 50,
        name_en: "Ōkuwa",
        name_jp: "大桑村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 51,
        name_en: "Ōmachi",
        name_jp: "大町市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 52,
        name_en: "Omi",
        name_jp: "麻績村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 53,
        name_en: "Ōshika",
        name_jp: "大鹿村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 54,
        name_en: "Ōtaki",
        name_jp: "王滝村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 55,
        name_en: "Otari",
        name_jp: "小谷村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 56,
        name_en: "Sakae",
        name_jp: "栄村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 57,
        name_en: "Sakaki",
        name_jp: "坂城町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 58,
        name_en: "Saku",
        name_jp: "佐久市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 59,
        name_en: "Sakuho",
        name_jp: "佐久穂町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 60,
        name_en: "Seinaiji",
        name_jp: "清内路村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 61,
        name_en: "Shimojō",
        name_jp: "下條村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 62,
        name_en: "Shimosuwa",
        name_jp: "下諏訪町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 63,
        name_en: "Shinano",
        name_jp: "信濃町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 64,
        name_en: "Shinshūshin",
        name_jp: "信州新町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 65,
        name_en: "Shiojiri",
        name_jp: "塩尻市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 66,
        name_en: "Suwa",
        name_jp: "諏訪市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 67,
        name_en: "Suzaka",
        name_jp: "須坂市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 68,
        name_en: "Takagi",
        name_jp: "喬木村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 69,
        name_en: "Takamori",
        name_jp: "高森町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 70,
        name_en: "Takayama",
        name_jp: "高山村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 71,
        name_en: "Tateshina",
        name_jp: "立科町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 72,
        name_en: "Tatsuno",
        name_jp: "辰野町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 73,
        name_en: "Tenryū",
        name_jp: "天龍村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 74,
        name_en: "Tōmi",
        name_jp: "東御市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 75,
        name_en: "Toyooka",
        name_jp: "豊丘村",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 76,
        name_en: "Ueda",
        name_jp: "上田市",
        type: "City",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 79,
        name_en: "Urugi",
        name_jp: "売木村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 80,
        name_en: "Yamagata",
        name_jp: "山形村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 81,
        name_en: "Yamanouchi",
        name_jp: "山ノ内町",
        type: "Town",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 82,
        name_en: "Yasuoka",
        name_jp: "泰阜村",
        type: "Village",
        prepecture: {
            id: 20,
            name_jp: "長野県",
            name_en: "Nagano"
        }
    },
    {
        id: 1,
        name_en: "Emukae",
        name_jp: "江迎町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 2,
        name_en: "Gotō",
        name_jp: "五島市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 3,
        name_en: "Hasami",
        name_jp: "波佐見町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 4,
        name_en: "Higashisonogi",
        name_jp: "東彼杵町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 5,
        name_en: "Hirado",
        name_jp: "平戸市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 6,
        name_en: "Iki",
        name_jp: "壱岐市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 7,
        name_en: "Isahaya",
        name_jp: "諫早市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 8,
        name_en: "Kawatana",
        name_jp: "川棚町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 9,
        name_en: "Matsuura",
        name_jp: "松浦市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 10,
        name_en: "Minamishimabara",
        name_jp: "南島原市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 11,
        name_en: "Nagasaki",
        name_jp: "長崎市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 12,
        name_en: "Nagayo",
        name_jp: "長与町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 13,
        name_en: "Ojika",
        name_jp: "小値賀町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 14,
        name_en: "Ōmura",
        name_jp: "大村市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 15,
        name_en: "Saikai",
        name_jp: "西海市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 16,
        name_en: "Sasebo",
        name_jp: "佐世保市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 17,
        name_en: "Saza",
        name_jp: "佐々町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 18,
        name_en: "Shikamachi",
        name_jp: "鹿町町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 19,
        name_en: "Shimabara",
        name_jp: "島原市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 20,
        name_en: "Shinkamigotō",
        name_jp: "新上五島町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 21,
        name_en: "Togitsu",
        name_jp: "時津町",
        type: "Town",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 22,
        name_en: "Tsushima",
        name_jp: "対馬市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 23,
        name_en: "Unzen",
        name_jp: "雲仙市",
        type: "City",
        prepecture: {
            id: 42,
            name_jp: "長崎県",
            name_en: "Naoasaki"
        }
    },
    {
        id: 1,
        name_en: "Ando",
        name_jp: "安堵町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 2,
        name_en: "Asuka",
        name_jp: "明日香村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 3,
        name_en: "Gojō",
        name_jp: "五條市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 4,
        name_en: "Gose",
        name_jp: "御所市",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 5,
        name_en: "Heguri",
        name_jp: "平群町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 6,
        name_en: "Higashiyoshino",
        name_jp: "東吉野村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 7,
        name_en: "Ikaruga",
        name_jp: "斑鳩町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 8,
        name_en: "Ikoma",
        name_jp: "生駒市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 9,
        name_en: "Kamikitayama",
        name_jp: "上北山村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 10,
        name_en: "Kanmaki",
        name_jp: "上牧町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 11,
        name_en: "Kashiba",
        name_jp: "香芝市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 12,
        name_en: "Kashihara",
        name_jp: "橿原市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 13,
        name_en: "Katsuragi",
        name_jp: "葛城市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 14,
        name_en: "Kawai",
        name_jp: "河合町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 15,
        name_en: "Kawakami",
        name_jp: "川上村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 16,
        name_en: "KawanishiTown",
        name_jp: "川西町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 17,
        name_en: "Kōryō",
        name_jp: "広陵町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 18,
        name_en: "Kurotaki",
        name_jp: "黒滝村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 19,
        name_en: "Mitsue",
        name_jp: "御杖村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 20,
        name_en: "Miyake",
        name_jp: "三宅町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 21,
        name_en: "Nara",
        name_jp: "奈良市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 22,
        name_en: "Nosegawa",
        name_jp: "野迫川村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 23,
        name_en: "Ōji",
        name_jp: "王寺町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 24,
        name_en: "Ōyodo",
        name_jp: "大淀町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 25,
        name_en: "Sakurai",
        name_jp: "桜井市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 26,
        name_en: "Sangō",
        name_jp: "三郷町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 27,
        name_en: "Shimoichi",
        name_jp: "下市町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 28,
        name_en: "Shimokitayama",
        name_jp: "下北山村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 29,
        name_en: "Soni",
        name_jp: "曽爾村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 30,
        name_en: "Takatori",
        name_jp: "高取町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 31,
        name_en: "Tawaramoto",
        name_jp: "田原本町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 32,
        name_en: "Tenkawa",
        name_jp: "天川村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 33,
        name_en: "Tenri",
        name_jp: "天理市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 34,
        name_en: "Totsukawa",
        name_jp: "十津川村",
        type: "Village",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 35,
        name_en: "Uda",
        name_jp: "宇陀市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 36,
        name_en: "Yamatokōriyama",
        name_jp: "大和郡山市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 37,
        name_en: "Yamatotakada",
        name_jp: "大和高田市",
        type: "City",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 38,
        name_en: "Yamazoe",
        name_jp: "山添村",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 39,
        name_en: "Yoshino",
        name_jp: "吉野町",
        type: "Town",
        prepecture: {
            id: 29,
            name_jp: "奈良県",
            name_en: "Nara"
        }
    },
    {
        id: 1,
        name_en: "Aga",
        name_jp: "阿賀町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 2,
        name_en: "Agano",
        name_jp: "阿賀野市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 3,
        name_en: "Awashimaura",
        name_jp: "粟島浦村",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 4,
        name_en: "Gosen",
        name_jp: "五泉市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 5,
        name_en: "Itoigawa",
        name_jp: "糸魚川市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 6,
        name_en: "Izumozaki",
        name_jp: "出雲崎町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 7,
        name_en: "Jōetsu",
        name_jp: "上越市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 8,
        name_en: "Kamo",
        name_jp: "加茂市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 9,
        name_en: "Kariwa",
        name_jp: "刈羽村",
        type: "Village",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 10,
        name_en: "Kashiwazaki",
        name_jp: "柏崎市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 11,
        name_en: "Kawaguchi",
        name_jp: "川口町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 12,
        name_en: "Minamiuonuma",
        name_jp: "南魚沼市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 13,
        name_en: "Mitsuke",
        name_jp: "見附市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 14,
        name_en: "Murakami",
        name_jp: "村上市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 15,
        name_en: "Myōkō",
        name_jp: "妙高市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 16,
        name_en: "Nagaoka",
        name_jp: "長岡市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 17,
        name_en: "Niigata",
        name_jp: "新潟市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 18,
        name_en: "Ojiya",
        name_jp: "小千谷市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 19,
        name_en: "Sado",
        name_jp: "佐渡市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 20,
        name_en: "Sanjō",
        name_jp: "三条市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 21,
        name_en: "Seirō",
        name_jp: "聖籠町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 22,
        name_en: "Sekikawa",
        name_jp: "関川村",
        type: "Village",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 23,
        name_en: "Shibata",
        name_jp: "新発田市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 24,
        name_en: "Tagami",
        name_jp: "田上町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 25,
        name_en: "Tainai",
        name_jp: "胎内市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 26,
        name_en: "Tōkamachi",
        name_jp: "十日町市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 27,
        name_en: "Tsubame",
        name_jp: "燕市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 28,
        name_en: "Tsunan",
        name_jp: "津南町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 29,
        name_en: "Uonuma",
        name_jp: "魚沼市",
        type: "City",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 30,
        name_en: "Yahiko",
        name_jp: "弥彦村",
        type: "Village",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 31,
        name_en: "Yuzawa",
        name_jp: "湯沢町",
        type: "Town",
        prepecture: {
            id: 15,
            name_jp: "新潟県",
            name_en: "Niigata"
        }
    },
    {
        id: 1,
        name_en: "Beppu",
        name_jp: "別府市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 2,
        name_en: "Bungo-ōno",
        name_jp: "豊後大野市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 3,
        name_en: "Bungotakada",
        name_jp: "豊後高田市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 4,
        name_en: "Hiji",
        name_jp: "日出町",
        type: "Town",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 5,
        name_en: "Himeshima",
        name_jp: "姫島村",
        type: "Village",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 6,
        name_en: "Hita",
        name_jp: "日田市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 7,
        name_en: "Kitsuki",
        name_jp: "杵築市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 8,
        name_en: "Kokonoe",
        name_jp: "九重町",
        type: "Town",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 9,
        name_en: "Kunisaki",
        name_jp: "国東市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 10,
        name_en: "Kusu",
        name_jp: "玖珠町",
        type: "Town",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 11,
        name_en: "Nakatsu",
        name_jp: "中津市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 12,
        name_en: "Ōita",
        name_jp: "大分市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 13,
        name_en: "Saiki",
        name_jp: "佐伯市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 14,
        name_en: "Taketa",
        name_jp: "竹田市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 15,
        name_en: "Tsukumi",
        name_jp: "津久見市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 16,
        name_en: "Usa",
        name_jp: "宇佐市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 17,
        name_en: "Usuki",
        name_jp: "臼杵市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 18,
        name_en: "Yufu",
        name_jp: "由布市",
        type: "City",
        prepecture: {
            id: 44,
            name_jp: "大分県",
            name_en: "Oita"
        }
    },
    {
        id: 1,
        name_en: "Akaiwa",
        name_jp: "赤磐",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 2,
        name_en: "Asakuchi",
        name_jp: "浅口市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 3,
        name_en: "Bizen",
        name_jp: "備前市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 4,
        name_en: "Hayashima",
        name_jp: "早島町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 5,
        name_en: "Ibara",
        name_jp: "井原市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 6,
        name_en: "Kagamino",
        name_jp: "鏡野町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 7,
        name_en: "Kasaoka",
        name_jp: "笠岡市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 8,
        name_en: "Kibichūō",
        name_jp: "吉備中央町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 9,
        name_en: "Kumenan",
        name_jp: "久米南町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 10,
        name_en: "Kurashiki",
        name_jp: "倉敷市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 11,
        name_en: "Maniwa",
        name_jp: "真庭市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 12,
        name_en: "Mimasaka",
        name_jp: "美作市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 13,
        name_en: "Misaki",
        name_jp: "美咲町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 14,
        name_en: "Nagi",
        name_jp: "奈義町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 15,
        name_en: "Naoshima",
        name_jp: "直島町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 16,
        name_en: "Niimi",
        name_jp: "新見市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 17,
        name_en: "Nishiawakura",
        name_jp: "西粟倉村",
        type: "Village",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 18,
        name_en: "Okayama",
        name_jp: "岡山市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 19,
        name_en: "Satoshō",
        name_jp: "里庄町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 20,
        name_en: "Setouchi",
        name_jp: "瀬戸内市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 21,
        name_en: "Shinjō",
        name_jp: "新庄村",
        type: "Village",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 22,
        name_en: "Shōdoshima",
        name_jp: "小豆島町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 23,
        name_en: "Shōō",
        name_jp: "勝央町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 24,
        name_en: "Sōja",
        name_jp: "総社市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 25,
        name_en: "Takahashi",
        name_jp: "高梁市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 26,
        name_en: "Tamano",
        name_jp: "玉野市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 27,
        name_en: "Tonoshō",
        name_jp: "土庄町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 28,
        name_en: "Tsuyama",
        name_jp: "津山市",
        type: "City",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 29,
        name_en: "Wake",
        name_jp: "和気町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 30,
        name_en: "Yakage",
        name_jp: "矢掛町",
        type: "Town",
        prepecture: {
            id: 33,
            name_jp: "岡山県",
            name_en: "Okayama"
        }
    },
    {
        id: 1,
        name_en: "Aguni",
        name_jp: "粟国村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 2,
        name_en: "Chatan",
        name_jp: "北谷町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 3,
        name_en: "Ginowan",
        name_jp: "宜野湾市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 4,
        name_en: "Ginoza",
        name_jp: "宜野座村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 5,
        name_en: "Haebaru",
        name_jp: "島尻郡",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 6,
        name_en: "Higashi",
        name_jp: "東村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 7,
        name_en: "Ie",
        name_jp: "伊江村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 8,
        name_en: "Iheya",
        name_jp: "島尻郡",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 9,
        name_en: "Ishigaki",
        name_jp: "石垣市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 10,
        name_en: "Itoman",
        name_jp: "糸満市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 11,
        name_en: "Izena",
        name_jp: "島尻郡",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 12,
        name_en: "Kadena",
        name_jp: "嘉手納町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 13,
        name_en: "Kin",
        name_jp: "金武町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 14,
        name_en: "Kitanakagusuku",
        name_jp: "北中城村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 15,
        name_en: "Kumejima",
        name_jp: "久米島町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 16,
        name_en: "Kunigami",
        name_jp: "国頭村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 17,
        name_en: "MinamiDaito",
        name_jp: "南大東島",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 34,
        name_en: "Minamidaitō",
        name_jp: "島尻郡",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 18,
        name_en: "Miyakojima",
        name_jp: "宮古島市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 19,
        name_en: "Motobu",
        name_jp: "本部町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 20,
        name_en: "Nago",
        name_jp: "名護市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 21,
        name_en: "Naha",
        name_jp: "那覇市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 22,
        name_en: "Nakagusuku",
        name_jp: "中城村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 23,
        name_en: "Nakijin",
        name_jp: "今帰仁村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 24,
        name_en: "Nanjō",
        name_jp: "南城市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 25,
        name_en: "Nishihara",
        name_jp: "西原町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 26,
        name_en: "Ōgimi",
        name_jp: "大宜味村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 27,
        name_en: "Okinawa",
        name_jp: "沖縄市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 28,
        name_en: "Onna",
        name_jp: "恩納村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 29,
        name_en: "Taketomi",
        name_jp: "竹富町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 30,
        name_en: "Tarama",
        name_jp: "多良間村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 31,
        name_en: "Tokashiki",
        name_jp: "島尻郡",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 32,
        name_en: "Tomigusuku",
        name_jp: "豊見城市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 33,
        name_en: "Tonaki",
        name_jp: "渡名喜村",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 36,
        name_en: "Urasoe",
        name_jp: "浦添市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 37,
        name_en: "Uruma",
        name_jp: "うるま市",
        type: "City",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 38,
        name_en: "Yaese",
        name_jp: "島尻郡",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 39,
        name_en: "Yomitan",
        name_jp: "読谷村",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 40,
        name_en: "Yonabaru",
        name_jp: "島尻郡",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 41,
        name_en: "Yonaguni",
        name_jp: "与那国町",
        type: "Town",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 42,
        name_en: "Zamami",
        name_jp: "島尻郡",
        type: "Village",
        prepecture: {
            id: 47,
            name_jp: "沖縄県",
            name_en: "Okinawa"
        }
    },
    {
        id: 1,
        name_en: "Chihayaakasaka",
        name_jp: "千早赤阪村",
        type: "Village",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 2,
        name_en: "Daitō",
        name_jp: "大東市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 3,
        name_en: "Fujiidera",
        name_jp: "藤井寺市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 4,
        name_en: "Habikino",
        name_jp: "羽曳野市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 5,
        name_en: "Hannan",
        name_jp: "阪南市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 6,
        name_en: "Higashiōsaka",
        name_jp: "東大阪市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 7,
        name_en: "Hirakata",
        name_jp: "枚方市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 8,
        name_en: "Ibaraki",
        name_jp: "茨木市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 9,
        name_en: "Ikeda",
        name_jp: "池田市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 10,
        name_en: "Izumi",
        name_jp: "和泉市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 11,
        name_en: "Izumiōtsu",
        name_jp: "泉大津市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 12,
        name_en: "Izumisano",
        name_jp: "泉佐野市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 13,
        name_en: "Kadoma",
        name_jp: "門真市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 14,
        name_en: "Kaizuka",
        name_jp: "貝塚市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 15,
        name_en: "Kanan",
        name_jp: "河南町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 16,
        name_en: "Kashiwara",
        name_jp: "柏原市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 17,
        name_en: "Katano",
        name_jp: "交野市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 18,
        name_en: "Kawachinagano",
        name_jp: "河内長野市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 19,
        name_en: "Kishiwada",
        name_jp: "岸和田市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 20,
        name_en: "Kumatori",
        name_jp: "熊取町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 21,
        name_en: "Matsubara",
        name_jp: "松原市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 22,
        name_en: "Minoo",
        name_jp: "箕面市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 23,
        name_en: "Misaki",
        name_jp: "岬町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 24,
        name_en: "Moriguchi",
        name_jp: "守口市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 25,
        name_en: "Neyagawa",
        name_jp: "寝屋川市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 26,
        name_en: "Nose",
        name_jp: "能勢町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 27,
        name_en: "Osaka",
        name_jp: "大阪市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 28,
        name_en: "Ōsakasayama",
        name_jp: "大阪狭山市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 29,
        name_en: "Sakai",
        name_jp: "堺市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 30,
        name_en: "Sennan",
        name_jp: "泉南市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 31,
        name_en: "Settsu",
        name_jp: "摂津市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 32,
        name_en: "Shijōnawate",
        name_jp: "四条畷市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 33,
        name_en: "Shimamoto",
        name_jp: "島本町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 34,
        name_en: "Suita",
        name_jp: "吹田市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 35,
        name_en: "Tadaoka",
        name_jp: "忠岡町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 36,
        name_en: "Taishi",
        name_jp: "太子町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 37,
        name_en: "Tajiri",
        name_jp: "田尻町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 38,
        name_en: "Takaishi",
        name_jp: "高石市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 39,
        name_en: "Takatsuki",
        name_jp: "高槻市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 40,
        name_en: "Tondabayashi",
        name_jp: "富田林市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 41,
        name_en: "Toyonaka",
        name_jp: "豊中市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 42,
        name_en: "Toyono",
        name_jp: "豊能町",
        type: "Town",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 43,
        name_en: "Yao",
        name_jp: "八尾市",
        type: "City",
        prepecture: {
            id: 27,
            name_jp: "大阪府",
            name_en: "Osaka"
        }
    },
    {
        id: 1,
        name_en: "Arita",
        name_jp: "有田町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 2,
        name_en: "Genkai",
        name_jp: "玄海町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 3,
        name_en: "Imari",
        name_jp: "伊万里市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 4,
        name_en: "Kamimine",
        name_jp: "上峰町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 5,
        name_en: "Kanzaki",
        name_jp: "神埼市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 6,
        name_en: "Karatsu",
        name_jp: "唐津市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 7,
        name_en: "Kashima",
        name_jp: "鹿島市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 8,
        name_en: "Kiyama",
        name_jp: "基山町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 9,
        name_en: "Kōhoku",
        name_jp: "江北町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 10,
        name_en: "Miyaki",
        name_jp: "みやき町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 11,
        name_en: "Ogi",
        name_jp: "小城市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 12,
        name_en: "Ōmachi",
        name_jp: "大町町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 13,
        name_en: "Saga",
        name_jp: "佐賀市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 14,
        name_en: "Shiroishi",
        name_jp: "白石町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 15,
        name_en: "Takeo",
        name_jp: "武雄市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 16,
        name_en: "Taku",
        name_jp: "多久市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 17,
        name_en: "Tara",
        name_jp: "太良町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 18,
        name_en: "Tosu",
        name_jp: "鳥栖市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 19,
        name_en: "Ureshino",
        name_jp: "嬉野市",
        type: "City",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 20,
        name_en: "Yoshinogari",
        name_jp: "吉野ヶ里町",
        type: "Town",
        prepecture: {
            id: 41,
            name_jp: "佐賀県",
            name_en: "Saga"
        }
    },
    {
        id: 1,
        name_en: "Ageo",
        name_jp: "上尾市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 2,
        name_en: "Asaka",
        name_jp: "朝霞市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 3,
        name_en: "Chichibu",
        name_jp: "秩父市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 4,
        name_en: "Fujimi",
        name_jp: "富士見市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 5,
        name_en: "Fujimino",
        name_jp: "ふじみ野市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 6,
        name_en: "Fukaya",
        name_jp: "深谷市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 7,
        name_en: "Gyōda",
        name_jp: "行田市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 8,
        name_en: "Hannō",
        name_jp: "飯能市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 9,
        name_en: "Hanyū",
        name_jp: "羽生市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 10,
        name_en: "Hasuda",
        name_jp: "蓮田市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 11,
        name_en: "Hatogaya",
        name_jp: "鳩ヶ谷市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 12,
        name_en: "Hatoyama",
        name_jp: "鳩山町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 13,
        name_en: "Hidaka",
        name_jp: "日高市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 14,
        name_en: "Higashichichibu",
        name_jp: "東秩父村",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 15,
        name_en: "Higashimatsuyama",
        name_jp: "東松山",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 16,
        name_en: "Honjō",
        name_jp: "本庄市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 17,
        name_en: "Ina",
        name_jp: "伊奈町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 18,
        name_en: "Iruma",
        name_jp: "入間市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 19,
        name_en: "Kamikawa",
        name_jp: "神川町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 20,
        name_en: "Kamisato",
        name_jp: "上里町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 21,
        name_en: "Kasukabe",
        name_jp: "春日部市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 22,
        name_en: "Kawagoe",
        name_jp: "川越市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 23,
        name_en: "Kawaguchi",
        name_jp: "川口市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 24,
        name_en: "Kawajima",
        name_jp: "川島町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 25,
        name_en: "Kazo",
        name_jp: "加須市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 26,
        name_en: "Kisai",
        name_jp: "騎西町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 27,
        name_en: "Kitakawabe",
        name_jp: "北川辺町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 28,
        name_en: "Kitamoto",
        name_jp: "北本市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 29,
        name_en: "Kōnosu",
        name_jp: "鴻巣市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 30,
        name_en: "Koshigaya",
        name_jp: "越谷市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 31,
        name_en: "Kuki",
        name_jp: "久喜市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 32,
        name_en: "Kumagaya",
        name_jp: "熊谷市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 33,
        name_en: "Kurihashi",
        name_jp: "栗橋町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 34,
        name_en: "Matsubushi",
        name_jp: "松伏町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 35,
        name_en: "Minano",
        name_jp: "皆野町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 36,
        name_en: "Misato",
        name_jp: "美里町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 37,
        name_en: "MisatoCity",
        name_jp: "美里町",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 38,
        name_en: "Miyashiro",
        name_jp: "宮代町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 39,
        name_en: "Miyoshi",
        name_jp: "三芳町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 40,
        name_en: "Moroyama",
        name_jp: "毛呂山町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 41,
        name_en: "Nagatoro",
        name_jp: "長瀞町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 42,
        name_en: "Namegawa",
        name_jp: "滑川町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 43,
        name_en: "Niiza",
        name_jp: "新座市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 44,
        name_en: "Ogano",
        name_jp: "小鹿野町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 45,
        name_en: "Ogawa",
        name_jp: "小川町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 46,
        name_en: "Ogose",
        name_jp: "越生町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 47,
        name_en: "Okegawa",
        name_jp: "桶川市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 48,
        name_en: "Ōtone",
        name_jp: "大利根町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 49,
        name_en: "Ranzan",
        name_jp: "嵐山町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 50,
        name_en: "Saitama",
        name_jp: "さいたま市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 51,
        name_en: "Sakado",
        name_jp: "坂戸市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 52,
        name_en: "Satte",
        name_jp: "幸手市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 53,
        name_en: "Sayama",
        name_jp: "狭山市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 54,
        name_en: "Shiki",
        name_jp: "志木市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 55,
        name_en: "Shiraoka",
        name_jp: "白岡町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 56,
        name_en: "Shōbu",
        name_jp: "菖蒲町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 57,
        name_en: "Sōka",
        name_jp: "草加市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 58,
        name_en: "Sugito",
        name_jp: "杉戸町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 59,
        name_en: "Toda",
        name_jp: "戸田市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 60,
        name_en: "Tokigawa",
        name_jp: "ときがわ町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 61,
        name_en: "Tokorozawa",
        name_jp: "所沢市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 62,
        name_en: "Tsurugashima",
        name_jp: "鶴ヶ島市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 63,
        name_en: "Wakō",
        name_jp: "和光市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 64,
        name_en: "Warabi",
        name_jp: "蕨市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 65,
        name_en: "Washimiya",
        name_jp: "鷲宮町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 66,
        name_en: "Yashio",
        name_jp: "八潮市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 67,
        name_en: "Yokoze",
        name_jp: "横瀬町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 68,
        name_en: "Yorii",
        name_jp: "寄居町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 69,
        name_en: "Yoshikawa",
        name_jp: "吉川市",
        type: "City",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 70,
        name_en: "Yoshimi",
        name_jp: "吉見町",
        type: "Town",
        prepecture: {
            id: 11,
            name_jp: "埼玉県",
            name_en: "Saitama"
        }
    },
    {
        id: 1,
        name_en: "Aishō",
        name_jp: "愛荘町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 2,
        name_en: "Azuchi",
        name_jp: "安土町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 3,
        name_en: "Higashiōmi",
        name_jp: "東近江市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 4,
        name_en: "Hikone",
        name_jp: "彦根市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 5,
        name_en: "Hino",
        name_jp: "日野町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 6,
        name_en: "Kinomoto",
        name_jp: "木之本町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 7,
        name_en: "Kohoku",
        name_jp: "湖北町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 8,
        name_en: "Kōka",
        name_jp: "甲賀市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 9,
        name_en: "Konan",
        name_jp: "湖南市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 10,
        name_en: "Kōra",
        name_jp: "甲良町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 11,
        name_en: "Kusatsu",
        name_jp: "草津市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 12,
        name_en: "LakeBiwa",
        name_jp: "琵琶湖",
        type: "Waterbody",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 13,
        name_en: "Maibara",
        name_jp: "米原市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 14,
        name_en: "Moriyama",
        name_jp: "守山市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 15,
        name_en: "Nagahama",
        name_jp: "長浜市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 16,
        name_en: "Nishiazai",
        name_jp: "西浅井町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 17,
        name_en: "Ōmihachiman",
        name_jp: "近江八幡市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 18,
        name_en: "Ōtsu",
        name_jp: "大津市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 19,
        name_en: "Rittō",
        name_jp: "栗東市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 20,
        name_en: "Ryūō",
        name_jp: "竜王町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 21,
        name_en: "Taga",
        name_jp: "多賀町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 22,
        name_en: "Takashima",
        name_jp: "高島市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 23,
        name_en: "Takatsuki",
        name_jp: "高月町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 24,
        name_en: "Torahime",
        name_jp: "虎姫町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 25,
        name_en: "Toyosato",
        name_jp: "豊郷町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 26,
        name_en: "Yasu",
        name_jp: "野洲市",
        type: "City",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 27,
        name_en: "Yogo",
        name_jp: "余呉町",
        type: "Town",
        prepecture: {
            id: 25,
            name_jp: "滋賀県",
            name_en: "Shiga"
        }
    },
    {
        id: 1,
        name_en: "Ama",
        name_jp: "海士町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 2,
        name_en: "Chibu",
        name_jp: "知夫村",
        type: "Village",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 3,
        name_en: "Gōtsu",
        name_jp: "江津市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 4,
        name_en: "Hamada",
        name_jp: "浜田市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 5,
        name_en: "Higashiizumo",
        name_jp: "東出雲町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 6,
        name_en: "Hikawa",
        name_jp: "斐川町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 7,
        name_en: "Iinan",
        name_jp: "飯南町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 8,
        name_en: "Izumo",
        name_jp: "出雲市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 9,
        name_en: "Kawamoto",
        name_jp: "川本町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 10,
        name_en: "Masuda",
        name_jp: "益田市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 11,
        name_en: "Matsue",
        name_jp: "松江市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 12,
        name_en: "Misato",
        name_jp: "美郷町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 13,
        name_en: "Nishinoshima",
        name_jp: "西ノ島町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 14,
        name_en: "Ōda",
        name_jp: "大田市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 15,
        name_en: "Okinoshima",
        name_jp: "隠岐の島町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 16,
        name_en: "Okuizumo",
        name_jp: "奥出雲町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 17,
        name_en: "Ōnan",
        name_jp: "邑南町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 18,
        name_en: "Tsuwano",
        name_jp: "津和野町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 20,
        name_en: "Unnan",
        name_jp: "雲南市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 21,
        name_en: "Yasugi",
        name_jp: "安来市",
        type: "City",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 22,
        name_en: "Yoshika",
        name_jp: "吉賀町",
        type: "Town",
        prepecture: {
            id: 32,
            name_jp: "島根県",
            name_en: "Shimane"
        }
    },
    {
        id: 1,
        name_en: "Arai",
        name_jp: "新居町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 2,
        name_en: "Atami",
        name_jp: "熱海市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 3,
        name_en: "Fuji",
        name_jp: "富士市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 4,
        name_en: "Fujieda",
        name_jp: "藤枝市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 5,
        name_en: "Fujikawa",
        name_jp: "富士川町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 6,
        name_en: "Fujinomiya",
        name_jp: "富士宮市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 7,
        name_en: "Fukuroi",
        name_jp: "袋井市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 8,
        name_en: "Gotemba",
        name_jp: "御殿場市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 9,
        name_en: "Hamamatsu",
        name_jp: "浜松市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 10,
        name_en: "Higashiizu",
        name_jp: "東伊豆町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 11,
        name_en: "Itō",
        name_jp: "伊東市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 12,
        name_en: "Iwata",
        name_jp: "磐田市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 13,
        name_en: "Izu",
        name_jp: "伊豆市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 14,
        name_en: "Izunokuni",
        name_jp: "伊豆の国市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 15,
        name_en: "Kakegawa",
        name_jp: "掛川市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 16,
        name_en: "Kannami",
        name_jp: "函南町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 17,
        name_en: "Kawane",
        name_jp: "川根町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 18,
        name_en: "Kawanehon",
        name_jp: "川根本町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 19,
        name_en: "Kawazu",
        name_jp: "河津町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 20,
        name_en: "Kikugawa",
        name_jp: "菊川市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 21,
        name_en: "Kosai",
        name_jp: "湖西市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 22,
        name_en: "Makinohara",
        name_jp: "牧之原市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 23,
        name_en: "Matsuzaki",
        name_jp: "松崎町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 24,
        name_en: "Minamiizu",
        name_jp: "南伊豆町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 25,
        name_en: "Mishima",
        name_jp: "三島市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 26,
        name_en: "Mori",
        name_jp: "森町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 27,
        name_en: "Nagaizumi",
        name_jp: "長泉町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 28,
        name_en: "Nishiizu",
        name_jp: "西伊豆町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 29,
        name_en: "Numazu",
        name_jp: "沼津市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 30,
        name_en: "Ōigawa",
        name_jp: "大井川町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 31,
        name_en: "Okabe",
        name_jp: "岡部町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 32,
        name_en: "Omaezaki",
        name_jp: "御前崎市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 33,
        name_en: "Oyama",
        name_jp: "小山町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 34,
        name_en: "Shibakawa",
        name_jp: "芝川町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 35,
        name_en: "Shimada",
        name_jp: "島田市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 36,
        name_en: "Shimizu",
        name_jp: "清水町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 37,
        name_en: "Shimoda",
        name_jp: "下田市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 38,
        name_en: "Shizuoka",
        name_jp: "静岡市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 39,
        name_en: "Susono",
        name_jp: "裾野市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 41,
        name_en: "Yaizu",
        name_jp: "焼津市",
        type: "City",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 42,
        name_en: "Yoshida",
        name_jp: "吉田町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 43,
        name_en: "Yui",
        name_jp: "由比町",
        type: "Town",
        prepecture: {
            id: 22,
            name_jp: "静岡県",
            name_en: "Shizuoka"
        }
    },
    {
        id: 1,
        name_en: "Ashikaga",
        name_jp: "足利市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 2,
        name_en: "Fujioka",
        name_jp: "藤岡町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 3,
        name_en: "Haga",
        name_jp: "芳賀町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 4,
        name_en: "Ichikai",
        name_jp: "市貝町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 5,
        name_en: "Iwafune",
        name_jp: "岩舟町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 6,
        name_en: "Kaminokawa",
        name_jp: "上三川町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 7,
        name_en: "Kanuma",
        name_jp: "鹿沼市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 8,
        name_en: "Mashiko",
        name_jp: "益子町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 9,
        name_en: "Mibu",
        name_jp: "壬生町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 10,
        name_en: "Mōka",
        name_jp: "真岡市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 11,
        name_en: "Motegi",
        name_jp: "茂木町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 12,
        name_en: "Nakagawa",
        name_jp: "那珂川町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 13,
        name_en: "Nasu",
        name_jp: "那須町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 14,
        name_en: "Nasukarasuyama",
        name_jp: "那須烏山市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 15,
        name_en: "Nasushiobara",
        name_jp: "那須塩原市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 16,
        name_en: "Nikkō",
        name_jp: "日光市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 17,
        name_en: "Ninomiya",
        name_jp: "二宮町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 18,
        name_en: "Nishikata",
        name_jp: "西方町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 19,
        name_en: "Nogi",
        name_jp: "野木町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 20,
        name_en: "Ōhira",
        name_jp: "大平町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 21,
        name_en: "Otawara",
        name_jp: "大田原市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 22,
        name_en: "Oyama",
        name_jp: "小山市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 23,
        name_en: "Sakura",
        name_jp: "さくら市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 24,
        name_en: "Sano",
        name_jp: "佐野市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 25,
        name_en: "Shimotsuke",
        name_jp: "下野市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 26,
        name_en: "Shioya",
        name_jp: "塩谷町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 27,
        name_en: "Takanezawa",
        name_jp: "高根沢町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 28,
        name_en: "Tochigi",
        name_jp: "栃木市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 29,
        name_en: "Tsuga",
        name_jp: "都賀町",
        type: "Town",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 30,
        name_en: "Utsunomiya",
        name_jp: "宇都宮市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 31,
        name_en: "Yaita",
        name_jp: "矢板市",
        type: "City",
        prepecture: {
            id: 9,
            name_jp: "栃木県",
            name_en: "Tochigi"
        }
    },
    {
        id: 1,
        name_en: "Aizumi",
        name_jp: "藍住町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 2,
        name_en: "Anan",
        name_jp: "阿南市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 3,
        name_en: "Awa",
        name_jp: "阿波市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 4,
        name_en: "Higashimiyoshi",
        name_jp: "東みよし町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 5,
        name_en: "Ishii",
        name_jp: "石井町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 6,
        name_en: "Itano",
        name_jp: "板野町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 7,
        name_en: "Kaiyō",
        name_jp: "海陽町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 8,
        name_en: "Kamiita",
        name_jp: "上板町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 9,
        name_en: "Kamikatsu",
        name_jp: "上勝町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 10,
        name_en: "Kamiyama",
        name_jp: "神山町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 11,
        name_en: "Katsuura",
        name_jp: "勝浦町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 12,
        name_en: "Kitajima",
        name_jp: "北島町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 13,
        name_en: "Komatsushima",
        name_jp: "小松島市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 14,
        name_en: "Matsushige",
        name_jp: "松茂町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 15,
        name_en: "Mima",
        name_jp: "美馬市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 16,
        name_en: "Minami",
        name_jp: "美波町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 17,
        name_en: "Miyoshi",
        name_jp: "三好市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 18,
        name_en: "Mugi",
        name_jp: "牟岐町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 19,
        name_en: "Naka",
        name_jp: "那賀町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 20,
        name_en: "Naruto",
        name_jp: "鳴門市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 21,
        name_en: "Sanagōchi",
        name_jp: "佐那河内村",
        type: "Village",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 22,
        name_en: "Tokushima",
        name_jp: "徳島市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 23,
        name_en: "Tsurugi",
        name_jp: "つるぎ町",
        type: "Town",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 24,
        name_en: "Yoshinogawa",
        name_jp: "吉野川市",
        type: "City",
        prepecture: {
            id: 36,
            name_jp: "徳島県",
            name_en: "Tokushima"
        }
    },
    {
        id: 1,
        name_en: "Adachi",
        name_jp: "足立区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 2,
        name_en: "Akiruno",
        name_jp: "あきる野市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 3,
        name_en: "Akishima",
        name_jp: "昭島市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 4,
        name_en: "Arakawa",
        name_jp: "荒川区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 5,
        name_en: "Bunkyō",
        name_jp: "文京区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 6,
        name_en: "Chiyoda",
        name_jp: "千代田区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 7,
        name_en: "Chōfu",
        name_jp: "調布市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 8,
        name_en: "Chūō",
        name_jp: "中央区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 9,
        name_en: "Edogawa",
        name_jp: "江戸川区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 10,
        name_en: "Fuchū",
        name_jp: "府中市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 11,
        name_en: "Fussa",
        name_jp: "福生市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 57,
        name_en: "Hachijō",
        name_jp: "大島支庁",
        type: "Subprefecture",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 12,
        name_en: "Hachiōji",
        name_jp: "八王子市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 13,
        name_en: "Hamura",
        name_jp: "羽村市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 14,
        name_en: "Higashikurume",
        name_jp: "東久留米市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 15,
        name_en: "Higashimurayama",
        name_jp: "東村山市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 16,
        name_en: "Higashiyamato",
        name_jp: "東大和市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 17,
        name_en: "Hino",
        name_jp: "日野市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 18,
        name_en: "Hinode",
        name_jp: "日の出町",
        type: "Town",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 19,
        name_en: "Hinohara",
        name_jp: "檜原村",
        type: "Town",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 20,
        name_en: "Inagi",
        name_jp: "稲城市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 21,
        name_en: "Itabashi",
        name_jp: "板橋区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 22,
        name_en: "Katsushika",
        name_jp: "葛飾区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 23,
        name_en: "Kita",
        name_jp: "北区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 24,
        name_en: "Kiyose",
        name_jp: "清瀬市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 25,
        name_en: "Kodaira",
        name_jp: "小平市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 26,
        name_en: "Koganei",
        name_jp: "小金井市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 27,
        name_en: "Kokubunji",
        name_jp: "国分寺市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 28,
        name_en: "Komae",
        name_jp: "狛江市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 29,
        name_en: "Kōtō",
        name_jp: "江東区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 30,
        name_en: "Kunitachi",
        name_jp: "国立市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 31,
        name_en: "Machida",
        name_jp: "町田市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 32,
        name_en: "Meguro",
        name_jp: "目黒区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 33,
        name_en: "Minato",
        name_jp: "港区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 34,
        name_en: "Mitaka",
        name_jp: "三鷹市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 56,
        name_en: "Miyake",
        name_jp: "大島支庁",
        type: "Subprefecture",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 35,
        name_en: "Mizuho",
        name_jp: "瑞穂町",
        type: "Town",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 36,
        name_en: "Musashimurayama",
        name_jp: "武蔵村山市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 37,
        name_en: "Musashino",
        name_jp: "武蔵野市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 38,
        name_en: "Nakano",
        name_jp: "中野区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 39,
        name_en: "Nerima",
        name_jp: "練馬区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 40,
        name_en: "Nishitōkyō",
        name_jp: "西東京市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 54,
        name_en: "Ogasawara",
        name_jp: "大島支庁",
        type: "Subprefecture",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 41,
        name_en: "Okutama",
        name_jp: "奥多摩町",
        type: "Town",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 42,
        name_en: "Ōme",
        name_jp: "青梅市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 55,
        name_en: "Ōshima",
        name_jp: "大島支庁",
        type: "Subprefecture",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 43,
        name_en: "Ōta",
        name_jp: "大田区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 44,
        name_en: "Setagaya",
        name_jp: "世田谷区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 45,
        name_en: "Shibuya",
        name_jp: "渋谷区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 46,
        name_en: "Shinagawa",
        name_jp: "品川区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 47,
        name_en: "Shinjuku",
        name_jp: "新宿区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 48,
        name_en: "Suginami",
        name_jp: "杉並区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 49,
        name_en: "Sumida",
        name_jp: "墨田区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 50,
        name_en: "Tachikawa",
        name_jp: "立川市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 51,
        name_en: "Taitō",
        name_jp: "台東区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 52,
        name_en: "Tama",
        name_jp: "多摩市",
        type: "City",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 53,
        name_en: "Toshima",
        name_jp: "豊島区",
        type: "SpecialWard",
        prepecture: {
            id: 13,
            name_jp: "東京都",
            name_en: "Tokyo"
        }
    },
    {
        id: 1,
        name_en: "Chizu",
        name_jp: "智頭町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 2,
        name_en: "Daisen",
        name_jp: "大山町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 3,
        name_en: "Hiezu",
        name_jp: "日吉津",
        type: "Village",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 4,
        name_en: "Hino",
        name_jp: "日野町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 5,
        name_en: "Hōki",
        name_jp: "伯耆町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 6,
        name_en: "Hokuei",
        name_jp: "北栄町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 7,
        name_en: "Iwami",
        name_jp: "岩美町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 8,
        name_en: "Kōfu",
        name_jp: "江府町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 9,
        name_en: "Kotoura",
        name_jp: "琴浦町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 10,
        name_en: "Kurayoshi",
        name_jp: "倉吉市",
        type: "City",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 11,
        name_en: "Misasa",
        name_jp: "三朝町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 12,
        name_en: "Nanbu",
        name_jp: "南部町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 13,
        name_en: "Nichinan",
        name_jp: "日南町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 14,
        name_en: "Tottori",
        name_jp: "鳥取市",
        type: "City",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 15,
        name_en: "Wakasa",
        name_jp: "若桜町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 16,
        name_en: "Yazu",
        name_jp: "八頭町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 17,
        name_en: "Yonago",
        name_jp: "米子市",
        type: "City",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 18,
        name_en: "Yurihama",
        name_jp: "湯梨浜町",
        type: "Town",
        prepecture: {
            id: 31,
            name_jp: "鳥取県",
            name_en: "Tottori"
        }
    },
    {
        id: 1,
        name_en: "Asahi",
        name_jp: "朝日町",
        type: "Town",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 2,
        name_en: "Funahashi",
        name_jp: "舟橋村",
        type: "Village",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 3,
        name_en: "Himi",
        name_jp: "氷見市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 4,
        name_en: "Imizu",
        name_jp: "射水市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 5,
        name_en: "Kamiichi",
        name_jp: "上市町",
        type: "Town",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 6,
        name_en: "Kurobe",
        name_jp: "黒部市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 7,
        name_en: "Namerikawa",
        name_jp: "滑川市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 8,
        name_en: "Nanto",
        name_jp: "南砺市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 9,
        name_en: "Nyūzen",
        name_jp: "入善町",
        type: "Town",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 10,
        name_en: "Oyabe",
        name_jp: "小矢部市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 11,
        name_en: "Takaoka",
        name_jp: "高岡市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 12,
        name_en: "Tateyama",
        name_jp: "立山町",
        type: "Town",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 13,
        name_en: "Tonami",
        name_jp: "砺波市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 14,
        name_en: "Toyama",
        name_jp: "富山市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 15,
        name_en: "Uozu",
        name_jp: "魚津市",
        type: "City",
        prepecture: {
            id: 16,
            name_jp: "富山県",
            name_en: "Toyama"
        }
    },
    {
        id: 1,
        name_en: "Arida",
        name_jp: "有田市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 2,
        name_en: "Aridagawa",
        name_jp: "有田川町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 3,
        name_en: "Gobō",
        name_jp: "御坊市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 4,
        name_en: "Hashimoto",
        name_jp: "橋本市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 5,
        name_en: "Hidaka",
        name_jp: "日高町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 6,
        name_en: "Hidakagawa",
        name_jp: "日高川町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 7,
        name_en: "Hirogawa",
        name_jp: "広川町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 8,
        name_en: "InamiTown",
        name_jp: "印南町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 9,
        name_en: "Iwade",
        name_jp: "岩出市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 10,
        name_en: "Kainan",
        name_jp: "海南市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 11,
        name_en: "Kamitonda",
        name_jp: "上富田町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 12,
        name_en: "Katsuragi",
        name_jp: "かつらぎ町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 13,
        name_en: "Kimino",
        name_jp: "紀美野町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 14,
        name_en: "Kinokawa",
        name_jp: "紀の川市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 15,
        name_en: "Kōya",
        name_jp: "高野町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 16,
        name_en: "Kozagawa",
        name_jp: "古座川町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 17,
        name_en: "Kudoyama",
        name_jp: "九度山町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 18,
        name_en: "Kushimoto",
        name_jp: "串本町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 19,
        name_en: "Kyōtanabe",
        name_jp: "田辺市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 20,
        name_en: "Mihama",
        name_jp: "美浜町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 21,
        name_en: "Minabe",
        name_jp: "みなべ町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 22,
        name_en: "Nachikatsuura",
        name_jp: "那智勝浦町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 23,
        name_en: "Shingū",
        name_jp: "新宮市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 24,
        name_en: "Shirahama",
        name_jp: "白浜町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 25,
        name_en: "Susami",
        name_jp: "すさみ町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 26,
        name_en: "Taiji",
        name_jp: "太地町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 27,
        name_en: "Wakayama",
        name_jp: "和歌山市",
        type: "City",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 28,
        name_en: "Yuasa",
        name_jp: "湯浅町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 29,
        name_en: "Yura",
        name_jp: "由良町",
        type: "Town",
        prepecture: {
            id: 30,
            name_jp: "和歌山県",
            name_en: "Wakayama"
        }
    },
    {
        id: 1,
        name_en: "Asahi",
        name_jp: "朝日町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 2,
        name_en: "Funagata",
        name_jp: "舟形町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 3,
        name_en: "Higashine",
        name_jp: "東根市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 4,
        name_en: "Iide",
        name_jp: "飯豊町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 5,
        name_en: "Kahoku",
        name_jp: "河北町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 6,
        name_en: "Kaminoyama",
        name_jp: "上山市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 7,
        name_en: "Kaneyama",
        name_jp: "金山町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 8,
        name_en: "Kawanishi",
        name_jp: "川西町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 9,
        name_en: "Mamurogawa",
        name_jp: "真室川町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 10,
        name_en: "Mikawa",
        name_jp: "三川町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 11,
        name_en: "Mogami",
        name_jp: "最上町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 12,
        name_en: "Murayama",
        name_jp: "村山市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 13,
        name_en: "Nagai",
        name_jp: "長井市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 14,
        name_en: "Nakayama",
        name_jp: "中山町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 15,
        name_en: "Nan'yo",
        name_jp: "南陽市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 16,
        name_en: "Nishikawa",
        name_jp: "西川町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 17,
        name_en: "Obanazawa",
        name_jp: "尾花沢市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 18,
        name_en: "Ōe",
        name_jp: "大江町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 19,
        name_en: "Oguni",
        name_jp: "小国町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 20,
        name_en: "Ōishida",
        name_jp: "大石田町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 21,
        name_en: "Ōkura",
        name_jp: "大蔵村",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 22,
        name_en: "Sagae",
        name_jp: "寒河江市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 23,
        name_en: "Sakata",
        name_jp: "酒田市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 24,
        name_en: "Sakegawa",
        name_jp: "鮭川村",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 25,
        name_en: "Shinjo",
        name_jp: "新庄市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 26,
        name_en: "Shirataka",
        name_jp: "白鷹町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 27,
        name_en: "Shōnai",
        name_jp: "庄内町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 28,
        name_en: "Takahata",
        name_jp: "高畠町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 29,
        name_en: "Tendo",
        name_jp: "天童市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 30,
        name_en: "Tozawa",
        name_jp: "戸沢村",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 31,
        name_en: "Tsuruoka",
        name_jp: "鶴岡市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 32,
        name_en: "Yamagata",
        name_jp: "山形市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 33,
        name_en: "Yamanobe",
        name_jp: "山辺町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 34,
        name_en: "Yonezawa",
        name_jp: "米沢市",
        type: "City",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 35,
        name_en: "Yuza",
        name_jp: "遊佐町",
        type: "Town",
        prepecture: {
            id: 6,
            name_jp: "山形県",
            name_en: "Yamagata"
        }
    },
    {
        id: 1,
        name_en: "Abu",
        name_jp: "阿武町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 2,
        name_en: "Atō",
        name_jp: "阿東町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 3,
        name_en: "Hagi",
        name_jp: "萩市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 4,
        name_en: "Hikari",
        name_jp: "光市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 5,
        name_en: "Hirao",
        name_jp: "平生町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 6,
        name_en: "Hōfu",
        name_jp: "防府市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 7,
        name_en: "Iwakuni",
        name_jp: "岩国市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 8,
        name_en: "Kaminoseki",
        name_jp: "上関町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 9,
        name_en: "Kudamatsu",
        name_jp: "下松市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 10,
        name_en: "Mine",
        name_jp: "美祢市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 11,
        name_en: "Nagato",
        name_jp: "長門市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 12,
        name_en: "San'yō-Onoda",
        name_jp: "山陽小野田市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 13,
        name_en: "Shimonoseki",
        name_jp: "下関市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 14,
        name_en: "Shūnan",
        name_jp: "周南市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 15,
        name_en: "Suō-Ōshima",
        name_jp: "周防大島町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 16,
        name_en: "Tabuse",
        name_jp: "田布施町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 17,
        name_en: "Ube",
        name_jp: "宇部市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 18,
        name_en: "Waki",
        name_jp: "和木町",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 19,
        name_en: "Yamaguchi",
        name_jp: "山口市",
        type: "City",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 20,
        name_en: "Yanai",
        name_jp: "柳井市",
        type: "Town",
        prepecture: {
            id: 35,
            name_jp: "山口県",
            name_en: "Yamaguchi"
        }
    },
    {
        id: 1,
        name_en: "Chūō",
        name_jp: "中央市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 2,
        name_en: "Dōshi",
        name_jp: "道志村",
        type: "Village",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 3,
        name_en: "Fuefuki",
        name_jp: "笛吹市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 4,
        name_en: "Fujikawaguchiko",
        name_jp: "富士河口湖町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 5,
        name_en: "Fujiyoshida",
        name_jp: "富士吉田市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 6,
        name_en: "Hayakawa",
        name_jp: "早川町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 7,
        name_en: "Hokuto",
        name_jp: "北杜市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 8,
        name_en: "Ichikawamisato",
        name_jp: "市川三郷町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 9,
        name_en: "Kai",
        name_jp: "甲斐市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 10,
        name_en: "Kajikazawa",
        name_jp: "鰍沢町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 11,
        name_en: "Kōfu",
        name_jp: "甲府市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 12,
        name_en: "Kōshū",
        name_jp: "甲州市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 13,
        name_en: "Kosuge",
        name_jp: "小菅村",
        type: "Village",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 14,
        name_en: "Masuho",
        name_jp: "増穂町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 15,
        name_en: "Minami-Alps",
        name_jp: "南アルプス市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 16,
        name_en: "Minobu",
        name_jp: "身延町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 17,
        name_en: "Nanbu",
        name_jp: "南部町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 18,
        name_en: "Narusawa",
        name_jp: "鳴沢村",
        type: "Village",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 19,
        name_en: "Nirasaki",
        name_jp: "韮崎市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 20,
        name_en: "Nishikatsura",
        name_jp: "西桂町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 21,
        name_en: "Oshino",
        name_jp: "忍野村",
        type: "Village",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 22,
        name_en: "Ōtsuki",
        name_jp: "大月市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 23,
        name_en: "Shōwa",
        name_jp: "昭和町",
        type: "Town",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 24,
        name_en: "Tabayama",
        name_jp: "丹波山村",
        type: "Village",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 25,
        name_en: "Tsuru",
        name_jp: "都留市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 26,
        name_en: "Uenohara",
        name_jp: "上野原市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 27,
        name_en: "Yamanakako",
        name_jp: "山中湖村",
        type: "Village",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    },
    {
        id: 28,
        name_en: "Yamanashi",
        name_jp: "山梨市",
        type: "City",
        prepecture: {
            id: 19,
            name_jp: "山梨県",
            name_en: "Yamanashi"
        }
    }
];
const ids = new Set();
const map = new Map();

for (let m of raw) {
    if (ids.has(m.prepecture.id)) {
        const prefecture = map.get(m.prepecture.id);
        prefecture.municipalities.push({
            id: m.id,
            name_en: m.name_en,
            name_jp: m.name_jp,
            type: m.type,
        })
    } else {
        const prefecture = {
            ...m.prepecture, municipalities: [{
                id: m.id,
                name_en: m.name_en,
                name_jp: m.name_jp,
                type: m.type,
            }]
        };
        map.set(m.prepecture.id, prefecture);
        ids.add(m.prepecture.id);
    }
}

const ans = []

for (p of map.values()) {
    ans.push(p)
}

console.log(JSON.stringify(ans))