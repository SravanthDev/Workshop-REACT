/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2334029096")

  // add field
  collection.fields.addAt(7, new Field({
    "hidden": false,
    "id": "select1857022774",
    "maxSelect": 2,
    "name": "Type_of_transiction",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "select",
    "values": [
      "Debit",
      "Credit"
    ]
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2334029096")

  // remove field
  collection.fields.removeById("select1857022774")

  return app.save(collection)
})
