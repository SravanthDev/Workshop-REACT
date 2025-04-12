/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_2334029096")

  // add field
  collection.fields.addAt(4, new Field({
    "hidden": false,
    "id": "number3484251168",
    "max": null,
    "min": null,
    "name": "Debit",
    "onlyInt": false,
    "presentable": false,
    "required": false,
    "system": false,
    "type": "number"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_2334029096")

  // remove field
  collection.fields.removeById("number3484251168")

  return app.save(collection)
})
