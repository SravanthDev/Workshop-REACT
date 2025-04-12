/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2334029096")

  // remove field
  collection.fields.removeById("select753727511")

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2334029096")

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "select753727511",
    "maxSelect": 2,
    "name": "Type",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Debit",
      "credit"
    ]
  }))

  return app.save(collection)
})
