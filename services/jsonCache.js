const fs = require("fs")
const rp = require("request-promise")

async function cacheResource(resourceName, resourceLoader) {
  const resource = await resourceLoader()
  const json = JSON.stringify(resource)
  const path = __dirname + "/../assets/cache/" + resourceName + ".json"
  return new Promise((resolve, reject) => {
    fs.writeFile(path, json, err => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}

async function main() {
  try {
    await cacheResource("pumps", getPumps)
    process.exit(0)
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

const pumps = ["4764", "4762"]
const url = "https://welldone-cache.herokuapp.com/p-api/"
async function getPumps() {
  let promises = []
  pumps.forEach(pump => {
    promises.push(rp({ url: `${url}${pump}`, method: "GET", json: true }))
  })
  const result = await Promise.all(promises)
  console.log(result)

  return result
}

main()
