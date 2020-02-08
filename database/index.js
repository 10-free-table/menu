const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);

const getMenuWithPageId = function(page_id, cb) { 

  var results = {
    Categories: {},
    Specials: {}
  };

  //build api from schema
  connection.query('SELECT * from sections where PageID=' + page_id, function (error, sections, fields) {
    if (error) console.error(error);

    var sectionsString = '';

    for (section in sections) {
      var sectionName = sections[section]['Name'];
      var category = sections[section]['Category'];
      if (!(category in results.Categories)) {
        results.Categories[category] = {};
      }

      if (sectionsString.length > 0) {
        sectionsString += ', ';
      }

      sectionsString += parseInt(sections[section].SectionID);

      results.Categories[category][sectionName] = {
        'ID': parseInt(sections[section].SectionID),
        'Dishes': {}
      };
    }

    connection.query('SELECT * from food where SectionID in (' + sectionsString + ')', function (error, dishes, fields) {
      if (error) console.error(error);

      for (dish in dishes) {
        for (category in results.Categories){
          for (section in results.Categories[category]) {
            if (dishes[dish]['SectionID'] === results.Categories[category][section]['ID']) {
              results.Categories[category][section]['Dishes'][dishes[dish]['DishName']] = {
                'Ingredients': dishes[dish]['Ingredients'],
                'Price': dishes[dish]['Price']
              };
            }
          }
        }
      }

      connection.query('SELECT * from specials where PageID=' + page_id, function (error, specials, fields) {
        if (error) console.error(error);

        results.Specials.Blurb = specials[0]['Blurb'];
        
        cb(results);
      });
    });
  });
};

module.exports = {
  getMenuWithPageId
};
