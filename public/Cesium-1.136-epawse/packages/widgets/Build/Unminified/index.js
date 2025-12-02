/**
 * @license
 * Cesium - https://github.com/CesiumGS/cesium
 * Version 1.136.0
 *
 * Copyright 2011-2022 Cesium Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Columbus View (Pat. Pend.)
 *
 * Portions licensed separately.
 * See https://github.com/CesiumGS/cesium/blob/main/LICENSE.md for full licensing details.
 */

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/nosleep.js/src/media.js
var require_media = __commonJS({
  "node_modules/nosleep.js/src/media.js"(exports, module) {
    module.exports = {
      webm: "data:video/webm;base64,GkXfowEAAAAAAAAfQoaBAUL3gQFC8oEEQvOBCEKChHdlYm1Ch4EEQoWBAhhTgGcBAAAAAAAVkhFNm3RALE27i1OrhBVJqWZTrIHfTbuMU6uEFlSua1OsggEwTbuMU6uEHFO7a1OsghV17AEAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmAQAAAAAAAEUq17GDD0JATYCNTGF2ZjU1LjMzLjEwMFdBjUxhdmY1NS4zMy4xMDBzpJBlrrXf3DCDVB8KcgbMpcr+RImIQJBgAAAAAAAWVK5rAQAAAAAAD++uAQAAAAAAADLXgQFzxYEBnIEAIrWcg3VuZIaFVl9WUDiDgQEj44OEAmJaAOABAAAAAAAABrCBsLqBkK4BAAAAAAAPq9eBAnPFgQKcgQAitZyDdW5khohBX1ZPUkJJU4OBAuEBAAAAAAAAEZ+BArWIQOdwAAAAAABiZIEgY6JPbwIeVgF2b3JiaXMAAAAAAoC7AAAAAAAAgLUBAAAAAAC4AQN2b3JiaXMtAAAAWGlwaC5PcmcgbGliVm9yYmlzIEkgMjAxMDExMDEgKFNjaGF1ZmVudWdnZXQpAQAAABUAAABlbmNvZGVyPUxhdmM1NS41Mi4xMDIBBXZvcmJpcyVCQ1YBAEAAACRzGCpGpXMWhBAaQlAZ4xxCzmvsGUJMEYIcMkxbyyVzkCGkoEKIWyiB0JBVAABAAACHQXgUhIpBCCGEJT1YkoMnPQghhIg5eBSEaUEIIYQQQgghhBBCCCGERTlokoMnQQgdhOMwOAyD5Tj4HIRFOVgQgydB6CCED0K4moOsOQghhCQ1SFCDBjnoHITCLCiKgsQwuBaEBDUojILkMMjUgwtCiJqDSTX4GoRnQXgWhGlBCCGEJEFIkIMGQcgYhEZBWJKDBjm4FITLQagahCo5CB+EIDRkFQCQAACgoiiKoigKEBqyCgDIAAAQQFEUx3EcyZEcybEcCwgNWQUAAAEACAAAoEiKpEiO5EiSJFmSJVmSJVmS5omqLMuyLMuyLMsyEBqyCgBIAABQUQxFcRQHCA1ZBQBkAAAIoDiKpViKpWiK54iOCISGrAIAgAAABAAAEDRDUzxHlETPVFXXtm3btm3btm3btm3btm1blmUZCA1ZBQBAAAAQ0mlmqQaIMAMZBkJDVgEACAAAgBGKMMSA0JBVAABAAACAGEoOogmtOd+c46BZDppKsTkdnEi1eZKbirk555xzzsnmnDHOOeecopxZDJoJrTnnnMSgWQqaCa0555wnsXnQmiqtOeeccc7pYJwRxjnnnCateZCajbU555wFrWmOmkuxOeecSLl5UptLtTnnnHPOOeecc84555zqxekcnBPOOeecqL25lpvQxTnnnE/G6d6cEM4555xzzjnnnHPOOeecIDRkFQAABABAEIaNYdwpCNLnaCBGEWIaMulB9+gwCRqDnELq0ehopJQ6CCWVcVJKJwgNWQUAAAIAQAghhRRSSCGFFFJIIYUUYoghhhhyyimnoIJKKqmooowyyyyzzDLLLLPMOuyssw47DDHEEEMrrcRSU2011lhr7jnnmoO0VlprrbVSSimllFIKQkNWAQAgAAAEQgYZZJBRSCGFFGKIKaeccgoqqIDQkFUAACAAgAAAAABP8hzRER3RER3RER3RER3R8RzPESVREiVREi3TMjXTU0VVdWXXlnVZt31b2IVd933d933d+HVhWJZlWZZlWZZlWZZlWZZlWZYgNGQVAAACAAAghBBCSCGFFFJIKcYYc8w56CSUEAgNWQUAAAIACAAAAHAUR3EcyZEcSbIkS9IkzdIsT/M0TxM9URRF0zRV0RVdUTdtUTZl0zVdUzZdVVZtV5ZtW7Z125dl2/d93/d93/d93/d93/d9XQdCQ1YBABIAADqSIymSIimS4ziOJElAaMgqAEAGAEAAAIriKI7jOJIkSZIlaZJneZaomZrpmZ4qqkBoyCoAABAAQAAAAAAAAIqmeIqpeIqoeI7oiJJomZaoqZoryqbsuq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq7ruq4LhIasAgAkAAB0JEdyJEdSJEVSJEdygNCQVQCADACAAAAcwzEkRXIsy9I0T/M0TxM90RM901NFV3SB0JBVAAAgAIAAAAAAAAAMybAUy9EcTRIl1VItVVMt1VJF1VNVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVN0zRNEwgNWQkAkAEAkBBTLS3GmgmLJGLSaqugYwxS7KWxSCpntbfKMYUYtV4ah5RREHupJGOKQcwtpNApJq3WVEKFFKSYYyoVUg5SIDRkhQAQmgHgcBxAsixAsiwAAAAAAAAAkDQN0DwPsDQPAAAAAAAAACRNAyxPAzTPAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAA0DwP8DwR8EQRAAAAAAAAACzPAzTRAzxRBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABA0jRA8zxA8zwAAAAAAAAAsDwP8EQR0DwRAAAAAAAAACzPAzxRBDzRAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAEOAAABBgIRQasiIAiBMAcEgSJAmSBM0DSJYFTYOmwTQBkmVB06BpME0AAAAAAAAAAAAAJE2DpkHTIIoASdOgadA0iCIAAAAAAAAAAAAAkqZB06BpEEWApGnQNGgaRBEAAAAAAAAAAAAAzzQhihBFmCbAM02IIkQRpgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAGHAAAAgwoQwUGrIiAIgTAHA4imUBAIDjOJYFAACO41gWAABYliWKAABgWZooAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAYcAAACDChDBQashIAiAIAcCiKZQHHsSzgOJYFJMmyAJYF0DyApgFEEQAIAAAocAAACLBBU2JxgEJDVgIAUQAABsWxLE0TRZKkaZoniiRJ0zxPFGma53meacLzPM80IYqiaJoQRVE0TZimaaoqME1VFQAAUOAAABBgg6bE4gCFhqwEAEICAByKYlma5nmeJ4qmqZokSdM8TxRF0TRNU1VJkqZ5niiKommapqqyLE3zPFEURdNUVVWFpnmeKIqiaaqq6sLzPE8URdE0VdV14XmeJ4qiaJqq6roQRVE0TdNUTVV1XSCKpmmaqqqqrgtETxRNU1Vd13WB54miaaqqq7ouEE3TVFVVdV1ZBpimaaqq68oyQFVV1XVdV5YBqqqqruu6sgxQVdd1XVmWZQCu67qyLMsCAAAOHAAAAoygk4wqi7DRhAsPQKEhKwKAKAAAwBimFFPKMCYhpBAaxiSEFEImJaXSUqogpFJSKRWEVEoqJaOUUmopVRBSKamUCkIqJZVSAADYgQMA2IGFUGjISgAgDwCAMEYpxhhzTiKkFGPOOScRUoox55yTSjHmnHPOSSkZc8w556SUzjnnnHNSSuacc845KaVzzjnnnJRSSuecc05KKSWEzkEnpZTSOeecEwAAVOAAABBgo8jmBCNBhYasBABSAQAMjmNZmuZ5omialiRpmud5niiapiZJmuZ5nieKqsnzPE8URdE0VZXneZ4oiqJpqirXFUXTNE1VVV2yLIqmaZqq6rowTdNUVdd1XZimaaqq67oubFtVVdV1ZRm2raqq6rqyDFzXdWXZloEsu67s2rIAAPAEBwCgAhtWRzgpGgssNGQlAJABAEAYg5BCCCFlEEIKIYSUUggJAAAYcAAACDChDBQashIASAUAAIyx1lprrbXWQGettdZaa62AzFprrbXWWmuttdZaa6211lJrrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmuttdZaa6211lprrbXWWmstpZRSSimllFJKKaWUUkoppZRSSgUA+lU4APg/2LA6wknRWGChISsBgHAAAMAYpRhzDEIppVQIMeacdFRai7FCiDHnJKTUWmzFc85BKCGV1mIsnnMOQikpxVZjUSmEUlJKLbZYi0qho5JSSq3VWIwxqaTWWoutxmKMSSm01FqLMRYjbE2ptdhqq7EYY2sqLbQYY4zFCF9kbC2m2moNxggjWywt1VprMMYY3VuLpbaaizE++NpSLDHWXAAAd4MDAESCjTOsJJ0VjgYXGrISAAgJACAQUooxxhhzzjnnpFKMOeaccw5CCKFUijHGnHMOQgghlIwx5pxzEEIIIYRSSsaccxBCCCGEkFLqnHMQQgghhBBKKZ1zDkIIIYQQQimlgxBCCCGEEEoopaQUQgghhBBCCKmklEIIIYRSQighlZRSCCGEEEIpJaSUUgohhFJCCKGElFJKKYUQQgillJJSSimlEkoJJYQSUikppRRKCCGUUkpKKaVUSgmhhBJKKSWllFJKIYQQSikFAAAcOAAABBhBJxlVFmGjCRcegEJDVgIAZAAAkKKUUiktRYIipRikGEtGFXNQWoqocgxSzalSziDmJJaIMYSUk1Qy5hRCDELqHHVMKQYtlRhCxhik2HJLoXMOAAAAQQCAgJAAAAMEBTMAwOAA4XMQdAIERxsAgCBEZohEw0JweFAJEBFTAUBigkIuAFRYXKRdXECXAS7o4q4DIQQhCEEsDqCABByccMMTb3jCDU7QKSp1IAAAAAAADADwAACQXAAREdHMYWRobHB0eHyAhIiMkAgAAAAAABcAfAAAJCVAREQ0cxgZGhscHR4fICEiIyQBAIAAAgAAAAAggAAEBAQAAAAAAAIAAAAEBB9DtnUBAAAAAAAEPueBAKOFggAAgACjzoEAA4BwBwCdASqwAJAAAEcIhYWIhYSIAgIABhwJ7kPfbJyHvtk5D32ych77ZOQ99snIe+2TkPfbJyHvtk5D32ych77ZOQ99YAD+/6tQgKOFggADgAqjhYIAD4AOo4WCACSADqOZgQArADECAAEQEAAYABhYL/QACIBDmAYAAKOFggA6gA6jhYIAT4AOo5mBAFMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAGSADqOFggB6gA6jmYEAewAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAj4AOo5mBAKMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAKSADqOFggC6gA6jmYEAywAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIAz4AOo4WCAOSADqOZgQDzADECAAEQEAAYABhYL/QACIBDmAYAAKOFggD6gA6jhYIBD4AOo5iBARsAEQIAARAQFGAAYWC/0AAiAQ5gGACjhYIBJIAOo4WCATqADqOZgQFDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggFPgA6jhYIBZIAOo5mBAWsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAXqADqOFggGPgA6jmYEBkwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIBpIAOo4WCAbqADqOZgQG7ADECAAEQEAAYABhYL/QACIBDmAYAAKOFggHPgA6jmYEB4wAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIB5IAOo4WCAfqADqOZgQILADECAAEQEAAYABhYL/QACIBDmAYAAKOFggIPgA6jhYICJIAOo5mBAjMAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAjqADqOFggJPgA6jmYECWwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYICZIAOo4WCAnqADqOZgQKDADECAAEQEAAYABhYL/QACIBDmAYAAKOFggKPgA6jhYICpIAOo5mBAqsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCArqADqOFggLPgA6jmIEC0wARAgABEBAUYABhYL/QACIBDmAYAKOFggLkgA6jhYIC+oAOo5mBAvsAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCAw+ADqOZgQMjADECAAEQEAAYABhYL/QACIBDmAYAAKOFggMkgA6jhYIDOoAOo5mBA0sAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA0+ADqOFggNkgA6jmYEDcwAxAgABEBAAGAAYWC/0AAiAQ5gGAACjhYIDeoAOo4WCA4+ADqOZgQObADECAAEQEAAYABhYL/QACIBDmAYAAKOFggOkgA6jhYIDuoAOo5mBA8MAMQIAARAQABgAGFgv9AAIgEOYBgAAo4WCA8+ADqOFggPkgA6jhYID+oAOo4WCBA+ADhxTu2sBAAAAAAAAEbuPs4EDt4r3gQHxghEr8IEK",
      mp4: "data:video/mp4;base64,AAAAHGZ0eXBNNFYgAAACAGlzb21pc28yYXZjMQAAAAhmcmVlAAAGF21kYXTeBAAAbGliZmFhYyAxLjI4AABCAJMgBDIARwAAArEGBf//rdxF6b3m2Ui3lizYINkj7u94MjY0IC0gY29yZSAxNDIgcjIgOTU2YzhkOCAtIEguMjY0L01QRUctNCBBVkMgY29kZWMgLSBDb3B5bGVmdCAyMDAzLTIwMTQgLSBodHRwOi8vd3d3LnZpZGVvbGFuLm9yZy94MjY0Lmh0bWwgLSBvcHRpb25zOiBjYWJhYz0wIHJlZj0zIGRlYmxvY2s9MTowOjAgYW5hbHlzZT0weDE6MHgxMTEgbWU9aGV4IHN1Ym1lPTcgcHN5PTEgcHN5X3JkPTEuMDA6MC4wMCBtaXhlZF9yZWY9MSBtZV9yYW5nZT0xNiBjaHJvbWFfbWU9MSB0cmVsbGlzPTEgOHg4ZGN0PTAgY3FtPTAgZGVhZHpvbmU9MjEsMTEgZmFzdF9wc2tpcD0xIGNocm9tYV9xcF9vZmZzZXQ9LTIgdGhyZWFkcz02IGxvb2thaGVhZF90aHJlYWRzPTEgc2xpY2VkX3RocmVhZHM9MCBucj0wIGRlY2ltYXRlPTEgaW50ZXJsYWNlZD0wIGJsdXJheV9jb21wYXQ9MCBjb25zdHJhaW5lZF9pbnRyYT0wIGJmcmFtZXM9MCB3ZWlnaHRwPTAga2V5aW50PTI1MCBrZXlpbnRfbWluPTI1IHNjZW5lY3V0PTQwIGludHJhX3JlZnJlc2g9MCByY19sb29rYWhlYWQ9NDAgcmM9Y3JmIG1idHJlZT0xIGNyZj0yMy4wIHFjb21wPTAuNjAgcXBtaW49MCBxcG1heD02OSBxcHN0ZXA9NCB2YnZfbWF4cmF0ZT03NjggdmJ2X2J1ZnNpemU9MzAwMCBjcmZfbWF4PTAuMCBuYWxfaHJkPW5vbmUgZmlsbGVyPTAgaXBfcmF0aW89MS40MCBhcT0xOjEuMDAAgAAAAFZliIQL8mKAAKvMnJycnJycnJycnXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXiEASZACGQAjgCEASZACGQAjgAAAAAdBmjgX4GSAIQBJkAIZACOAAAAAB0GaVAX4GSAhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGagC/AySEASZACGQAjgAAAAAZBmqAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZrAL8DJIQBJkAIZACOAAAAABkGa4C/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmwAvwMkhAEmQAhkAI4AAAAAGQZsgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGbQC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm2AvwMkhAEmQAhkAI4AAAAAGQZuAL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGboC/AySEASZACGQAjgAAAAAZBm8AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZvgL8DJIQBJkAIZACOAAAAABkGaAC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmiAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZpAL8DJIQBJkAIZACOAAAAABkGaYC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBmoAvwMkhAEmQAhkAI4AAAAAGQZqgL8DJIQBJkAIZACOAIQBJkAIZACOAAAAABkGawC/AySEASZACGQAjgAAAAAZBmuAvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZsAL8DJIQBJkAIZACOAAAAABkGbIC/AySEASZACGQAjgCEASZACGQAjgAAAAAZBm0AvwMkhAEmQAhkAI4AhAEmQAhkAI4AAAAAGQZtgL8DJIQBJkAIZACOAAAAABkGbgCvAySEASZACGQAjgCEASZACGQAjgAAAAAZBm6AnwMkhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AhAEmQAhkAI4AAAAhubW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAABDcAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAzB0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+kAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAALAAAACQAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPpAAAAAAABAAAAAAKobWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAB1MAAAdU5VxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAACU21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAhNzdGJsAAAAr3N0c2QAAAAAAAAAAQAAAJ9hdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAALAAkABIAAAASAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGP//AAAALWF2Y0MBQsAN/+EAFWdCwA3ZAsTsBEAAAPpAADqYA8UKkgEABWjLg8sgAAAAHHV1aWRraEDyXyRPxbo5pRvPAyPzAAAAAAAAABhzdHRzAAAAAAAAAAEAAAAeAAAD6QAAABRzdHNzAAAAAAAAAAEAAAABAAAAHHN0c2MAAAAAAAAAAQAAAAEAAAABAAAAAQAAAIxzdHN6AAAAAAAAAAAAAAAeAAADDwAAAAsAAAALAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAiHN0Y28AAAAAAAAAHgAAAEYAAANnAAADewAAA5gAAAO0AAADxwAAA+MAAAP2AAAEEgAABCUAAARBAAAEXQAABHAAAASMAAAEnwAABLsAAATOAAAE6gAABQYAAAUZAAAFNQAABUgAAAVkAAAFdwAABZMAAAWmAAAFwgAABd4AAAXxAAAGDQAABGh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAACAAAAAAAABDcAAAAAAAAAAAAAAAEBAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAQkAAADcAABAAAAAAPgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAC7gAAAykBVxAAAAAAALWhkbHIAAAAAAAAAAHNvdW4AAAAAAAAAAAAAAABTb3VuZEhhbmRsZXIAAAADi21pbmYAAAAQc21oZAAAAAAAAAAAAAAAJGRpbmYAAAAcZHJlZgAAAAAAAAABAAAADHVybCAAAAABAAADT3N0YmwAAABnc3RzZAAAAAAAAAABAAAAV21wNGEAAAAAAAAAAQAAAAAAAAAAAAIAEAAAAAC7gAAAAAAAM2VzZHMAAAAAA4CAgCIAAgAEgICAFEAVBbjYAAu4AAAADcoFgICAAhGQBoCAgAECAAAAIHN0dHMAAAAAAAAAAgAAADIAAAQAAAAAAQAAAkAAAAFUc3RzYwAAAAAAAAAbAAAAAQAAAAEAAAABAAAAAgAAAAIAAAABAAAAAwAAAAEAAAABAAAABAAAAAIAAAABAAAABgAAAAEAAAABAAAABwAAAAIAAAABAAAACAAAAAEAAAABAAAACQAAAAIAAAABAAAACgAAAAEAAAABAAAACwAAAAIAAAABAAAADQAAAAEAAAABAAAADgAAAAIAAAABAAAADwAAAAEAAAABAAAAEAAAAAIAAAABAAAAEQAAAAEAAAABAAAAEgAAAAIAAAABAAAAFAAAAAEAAAABAAAAFQAAAAIAAAABAAAAFgAAAAEAAAABAAAAFwAAAAIAAAABAAAAGAAAAAEAAAABAAAAGQAAAAIAAAABAAAAGgAAAAEAAAABAAAAGwAAAAIAAAABAAAAHQAAAAEAAAABAAAAHgAAAAIAAAABAAAAHwAAAAQAAAABAAAA4HN0c3oAAAAAAAAAAAAAADMAAAAaAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAAAJAAAACQAAAAkAAACMc3RjbwAAAAAAAAAfAAAALAAAA1UAAANyAAADhgAAA6IAAAO+AAAD0QAAA+0AAAQAAAAEHAAABC8AAARLAAAEZwAABHoAAASWAAAEqQAABMUAAATYAAAE9AAABRAAAAUjAAAFPwAABVIAAAVuAAAFgQAABZ0AAAWwAAAFzAAABegAAAX7AAAGFwAAAGJ1ZHRhAAAAWm1ldGEAAAAAAAAAIWhkbHIAAAAAAAAAAG1kaXJhcHBsAAAAAAAAAAAAAAAALWlsc3QAAAAlqXRvbwAAAB1kYXRhAAAAAQAAAABMYXZmNTUuMzMuMTAw"
    };
  }
});

// node_modules/nosleep.js/src/index.js
var require_src = __commonJS({
  "node_modules/nosleep.js/src/index.js"(exports, module) {
    var { webm, mp4 } = require_media();
    var oldIOS = () => typeof navigator !== "undefined" && parseFloat(
      ("" + (/CPU.*OS ([0-9_]{3,4})[0-9_]{0,1}|(CPU like).*AppleWebKit.*Mobile/i.exec(
        navigator.userAgent
      ) || [0, ""])[1]).replace("undefined", "3_2").replace("_", ".").replace("_", "")
    ) < 10 && !window.MSStream;
    var nativeWakeLock = () => "wakeLock" in navigator;
    var NoSleep2 = class {
      constructor() {
        this.enabled = false;
        if (nativeWakeLock()) {
          this._wakeLock = null;
          const handleVisibilityChange = () => {
            if (this._wakeLock !== null && document.visibilityState === "visible") {
              this.enable();
            }
          };
          document.addEventListener("visibilitychange", handleVisibilityChange);
          document.addEventListener("fullscreenchange", handleVisibilityChange);
        } else if (oldIOS()) {
          this.noSleepTimer = null;
        } else {
          this.noSleepVideo = document.createElement("video");
          this.noSleepVideo.setAttribute("title", "No Sleep");
          this.noSleepVideo.setAttribute("playsinline", "");
          this._addSourceToVideo(this.noSleepVideo, "webm", webm);
          this._addSourceToVideo(this.noSleepVideo, "mp4", mp4);
          this.noSleepVideo.addEventListener("loadedmetadata", () => {
            if (this.noSleepVideo.duration <= 1) {
              this.noSleepVideo.setAttribute("loop", "");
            } else {
              this.noSleepVideo.addEventListener("timeupdate", () => {
                if (this.noSleepVideo.currentTime > 0.5) {
                  this.noSleepVideo.currentTime = Math.random();
                }
              });
            }
          });
        }
      }
      _addSourceToVideo(element, type, dataURI) {
        var source = document.createElement("source");
        source.src = dataURI;
        source.type = `video/${type}`;
        element.appendChild(source);
      }
      get isEnabled() {
        return this.enabled;
      }
      enable() {
        if (nativeWakeLock()) {
          return navigator.wakeLock.request("screen").then((wakeLock) => {
            this._wakeLock = wakeLock;
            this.enabled = true;
            console.log("Wake Lock active.");
            this._wakeLock.addEventListener("release", () => {
              console.log("Wake Lock released.");
            });
          }).catch((err) => {
            this.enabled = false;
            console.error(`${err.name}, ${err.message}`);
            throw err;
          });
        } else if (oldIOS()) {
          this.disable();
          console.warn(`
        NoSleep enabled for older iOS devices. This can interrupt
        active or long-running network requests from completing successfully.
        See https://github.com/richtr/NoSleep.js/issues/15 for more details.
      `);
          this.noSleepTimer = window.setInterval(() => {
            if (!document.hidden) {
              window.location.href = window.location.href.split("#")[0];
              window.setTimeout(window.stop, 0);
            }
          }, 15e3);
          this.enabled = true;
          return Promise.resolve();
        } else {
          let playPromise = this.noSleepVideo.play();
          return playPromise.then((res) => {
            this.enabled = true;
            return res;
          }).catch((err) => {
            this.enabled = false;
            throw err;
          });
        }
      }
      disable() {
        if (nativeWakeLock()) {
          if (this._wakeLock) {
            this._wakeLock.release();
          }
          this._wakeLock = null;
        } else if (oldIOS()) {
          if (this.noSleepTimer) {
            console.warn(`
          NoSleep now disabled for older iOS devices.
        `);
            window.clearInterval(this.noSleepTimer);
            this.noSleepTimer = null;
          }
        } else {
          this.noSleepVideo.pause();
        }
        this.enabled = false;
      }
    };
    module.exports = NoSleep2;
  }
});

// packages/widgets/Source/ClockViewModel.js
import {
  Clock,
  defined,
  destroyObject,
  EventHelper,
  JulianDate
} from "@cesium/engine";

// packages/widgets/Source/ThirdParty/knockout-3.5.1.js
var oldValue;
if (typeof ko !== "undefined") {
  oldValue = ko;
}
(function() {
  /*!
   * Knockout JavaScript library v3.5.1
   * (c) The Knockout.js team - http://knockoutjs.com/
   * License: MIT (http://www.opensource.org/licenses/mit-license.php)
   */
  (function() {
    (function(n) {
      var A = this || (0, eval)("this"), w = A.document, R = A.navigator, v = A.jQuery, H = A.JSON;
      v || "undefined" === typeof jQuery || (v = jQuery);
      (function(n2) {
        n2(A.ko = {});
      })(function(S, T) {
        function K(a2, c) {
          return null === a2 || typeof a2 in W ? a2 === c : false;
        }
        function X(b, c) {
          var d;
          return function() {
            d || (d = a.a.setTimeout(function() {
              d = n;
              b();
            }, c));
          };
        }
        function Y(b, c) {
          var d;
          return function() {
            clearTimeout(d);
            d = a.a.setTimeout(b, c);
          };
        }
        function Z(a2, c) {
          c && "change" !== c ? "beforeChange" === c ? this.pc(a2) : this.gb(a2, c) : this.qc(a2);
        }
        function aa(a2, c) {
          null !== c && c.s && c.s();
        }
        function ba(a2, c) {
          var d = this.qd, e = d[r];
          e.ra || (this.Qb && this.mb[c] ? (d.uc(c, a2, this.mb[c]), this.mb[c] = null, --this.Qb) : e.I[c] || d.uc(c, a2, e.J ? { da: a2 } : d.$c(a2)), a2.Ja && a2.gd());
        }
        var a = "undefined" !== typeof S ? S : {};
        a.b = function(b, c) {
          for (var d = b.split("."), e = a, f = 0; f < d.length - 1; f++) e = e[d[f]];
          e[d[d.length - 1]] = c;
        };
        a.L = function(a2, c, d) {
          a2[c] = d;
        };
        a.version = "3.5.1";
        a.b(
          "version",
          a.version
        );
        a.options = { deferUpdates: false, useOnlyNativeEvents: false, foreachHidesDestroyed: false };
        a.a = (function() {
          function b(a2, b2) {
            for (var c2 in a2) f.call(a2, c2) && b2(c2, a2[c2]);
          }
          function c(a2, b2) {
            if (b2) for (var c2 in b2) f.call(b2, c2) && (a2[c2] = b2[c2]);
            return a2;
          }
          function d(a2, b2) {
            a2.__proto__ = b2;
            return a2;
          }
          function e(b2, c2, d2, e2) {
            var l2 = b2[c2].match(q) || [];
            a.a.D(d2.match(q), function(b3) {
              a.a.Na(l2, b3, e2);
            });
            b2[c2] = l2.join(" ");
          }
          var f = Object.prototype.hasOwnProperty, g = { __proto__: [] } instanceof Array, h = "function" === typeof Symbol, m = {}, k = {};
          m[R && /Firefox\/2/i.test(R.userAgent) ? "KeyboardEvent" : "UIEvents"] = ["keyup", "keydown", "keypress"];
          m.MouseEvents = "click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");
          b(m, function(a2, b2) {
            if (b2.length) for (var c2 = 0, d2 = b2.length; c2 < d2; c2++) k[b2[c2]] = a2;
          });
          var l = { propertychange: true }, p = w && (function() {
            for (var a2 = 3, b2 = w.createElement("div"), c2 = b2.getElementsByTagName("i"); b2.innerHTML = "<!--[if gt IE " + ++a2 + "]><i></i><![endif]-->", c2[0]; ) ;
            return 4 < a2 ? a2 : n;
          })(), q = /\S+/g, t;
          return {
            Jc: ["authenticity_token", /^__RequestVerificationToken(_.*)?$/],
            D: function(a2, b2, c2) {
              for (var d2 = 0, e2 = a2.length; d2 < e2; d2++) b2.call(c2, a2[d2], d2, a2);
            },
            A: "function" == typeof Array.prototype.indexOf ? function(a2, b2) {
              return Array.prototype.indexOf.call(a2, b2);
            } : function(a2, b2) {
              for (var c2 = 0, d2 = a2.length; c2 < d2; c2++) if (a2[c2] === b2) return c2;
              return -1;
            },
            Lb: function(a2, b2, c2) {
              for (var d2 = 0, e2 = a2.length; d2 < e2; d2++) if (b2.call(c2, a2[d2], d2, a2)) return a2[d2];
              return n;
            },
            Pa: function(b2, c2) {
              var d2 = a.a.A(b2, c2);
              0 < d2 ? b2.splice(d2, 1) : 0 === d2 && b2.shift();
            },
            wc: function(b2) {
              var c2 = [];
              b2 && a.a.D(b2, function(b3) {
                0 > a.a.A(c2, b3) && c2.push(b3);
              });
              return c2;
            },
            Mb: function(a2, b2, c2) {
              var d2 = [];
              if (a2) for (var e2 = 0, l2 = a2.length; e2 < l2; e2++) d2.push(b2.call(c2, a2[e2], e2));
              return d2;
            },
            jb: function(a2, b2, c2) {
              var d2 = [];
              if (a2) for (var e2 = 0, l2 = a2.length; e2 < l2; e2++) b2.call(c2, a2[e2], e2) && d2.push(a2[e2]);
              return d2;
            },
            Nb: function(a2, b2) {
              if (b2 instanceof Array) a2.push.apply(a2, b2);
              else for (var c2 = 0, d2 = b2.length; c2 < d2; c2++) a2.push(b2[c2]);
              return a2;
            },
            Na: function(b2, c2, d2) {
              var e2 = a.a.A(a.a.bc(b2), c2);
              0 > e2 ? d2 && b2.push(c2) : d2 || b2.splice(e2, 1);
            },
            Ba: g,
            extend: c,
            setPrototypeOf: d,
            Ab: g ? d : c,
            P: b,
            Ga: function(a2, b2, c2) {
              if (!a2) return a2;
              var d2 = {}, e2;
              for (e2 in a2) f.call(a2, e2) && (d2[e2] = b2.call(c2, a2[e2], e2, a2));
              return d2;
            },
            Tb: function(b2) {
              for (; b2.firstChild; ) a.removeNode(b2.firstChild);
            },
            Yb: function(b2) {
              b2 = a.a.la(b2);
              for (var c2 = (b2[0] && b2[0].ownerDocument || w).createElement("div"), d2 = 0, e2 = b2.length; d2 < e2; d2++) c2.appendChild(a.oa(b2[d2]));
              return c2;
            },
            Ca: function(b2, c2) {
              for (var d2 = 0, e2 = b2.length, l2 = []; d2 < e2; d2++) {
                var k2 = b2[d2].cloneNode(true);
                l2.push(c2 ? a.oa(k2) : k2);
              }
              return l2;
            },
            va: function(b2, c2) {
              a.a.Tb(b2);
              if (c2) for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) b2.appendChild(c2[d2]);
            },
            Xc: function(b2, c2) {
              var d2 = b2.nodeType ? [b2] : b2;
              if (0 < d2.length) {
                for (var e2 = d2[0], l2 = e2.parentNode, k2 = 0, f2 = c2.length; k2 < f2; k2++) l2.insertBefore(c2[k2], e2);
                k2 = 0;
                for (f2 = d2.length; k2 < f2; k2++) a.removeNode(d2[k2]);
              }
            },
            Ua: function(a2, b2) {
              if (a2.length) {
                for (b2 = 8 === b2.nodeType && b2.parentNode || b2; a2.length && a2[0].parentNode !== b2; ) a2.splice(0, 1);
                for (; 1 < a2.length && a2[a2.length - 1].parentNode !== b2; ) a2.length--;
                if (1 < a2.length) {
                  var c2 = a2[0], d2 = a2[a2.length - 1];
                  for (a2.length = 0; c2 !== d2; ) a2.push(c2), c2 = c2.nextSibling;
                  a2.push(d2);
                }
              }
              return a2;
            },
            Zc: function(a2, b2) {
              7 > p ? a2.setAttribute("selected", b2) : a2.selected = b2;
            },
            Db: function(a2) {
              return null === a2 || a2 === n ? "" : a2.trim ? a2.trim() : a2.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g, "");
            },
            Ud: function(a2, b2) {
              a2 = a2 || "";
              return b2.length > a2.length ? false : a2.substring(0, b2.length) === b2;
            },
            vd: function(a2, b2) {
              if (a2 === b2) return true;
              if (11 === a2.nodeType) return false;
              if (b2.contains) return b2.contains(1 !== a2.nodeType ? a2.parentNode : a2);
              if (b2.compareDocumentPosition) return 16 == (b2.compareDocumentPosition(a2) & 16);
              for (; a2 && a2 != b2; ) a2 = a2.parentNode;
              return !!a2;
            },
            Sb: function(b2) {
              return a.a.vd(b2, b2.ownerDocument.documentElement);
            },
            kd: function(b2) {
              return !!a.a.Lb(b2, a.a.Sb);
            },
            R: function(a2) {
              return a2 && a2.tagName && a2.tagName.toLowerCase();
            },
            Ac: function(b2) {
              return a.onError ? function() {
                try {
                  return b2.apply(this, arguments);
                } catch (c2) {
                  throw a.onError && a.onError(c2), c2;
                }
              } : b2;
            },
            setTimeout: function(b2, c2) {
              return setTimeout(a.a.Ac(b2), c2);
            },
            Gc: function(b2) {
              setTimeout(function() {
                a.onError && a.onError(b2);
                throw b2;
              }, 0);
            },
            B: function(b2, c2, d2) {
              var e2 = a.a.Ac(d2);
              d2 = l[c2];
              if (a.options.useOnlyNativeEvents || d2 || !v) if (d2 || "function" != typeof b2.addEventListener) if ("undefined" != typeof b2.attachEvent) {
                var k2 = function(a2) {
                  e2.call(b2, a2);
                }, f2 = "on" + c2;
                b2.attachEvent(
                  f2,
                  k2
                );
                a.a.K.za(b2, function() {
                  b2.detachEvent(f2, k2);
                });
              } else throw Error("Browser doesn't support addEventListener or attachEvent");
              else b2.addEventListener(c2, e2, false);
              else t || (t = "function" == typeof v(b2).on ? "on" : "bind"), v(b2)[t](c2, e2);
            },
            Fb: function(b2, c2) {
              if (!b2 || !b2.nodeType) throw Error("element must be a DOM node when calling triggerEvent");
              var d2;
              "input" === a.a.R(b2) && b2.type && "click" == c2.toLowerCase() ? (d2 = b2.type, d2 = "checkbox" == d2 || "radio" == d2) : d2 = false;
              if (a.options.useOnlyNativeEvents || !v || d2) if ("function" == typeof w.createEvent) if ("function" == typeof b2.dispatchEvent) d2 = w.createEvent(k[c2] || "HTMLEvents"), d2.initEvent(c2, true, true, A, 0, 0, 0, 0, 0, false, false, false, false, 0, b2), b2.dispatchEvent(d2);
              else throw Error("The supplied element doesn't support dispatchEvent");
              else if (d2 && b2.click) b2.click();
              else if ("undefined" != typeof b2.fireEvent) b2.fireEvent("on" + c2);
              else throw Error("Browser doesn't support triggering events");
              else v(b2).trigger(c2);
            },
            f: function(b2) {
              return a.O(b2) ? b2() : b2;
            },
            bc: function(b2) {
              return a.O(b2) ? b2.v() : b2;
            },
            Eb: function(b2, c2, d2) {
              var l2;
              c2 && ("object" === typeof b2.classList ? (l2 = b2.classList[d2 ? "add" : "remove"], a.a.D(c2.match(q), function(a2) {
                l2.call(b2.classList, a2);
              })) : "string" === typeof b2.className.baseVal ? e(b2.className, "baseVal", c2, d2) : e(b2, "className", c2, d2));
            },
            Bb: function(b2, c2) {
              var d2 = a.a.f(c2);
              if (null === d2 || d2 === n) d2 = "";
              var e2 = a.h.firstChild(b2);
              !e2 || 3 != e2.nodeType || a.h.nextSibling(e2) ? a.h.va(b2, [b2.ownerDocument.createTextNode(d2)]) : e2.data = d2;
              a.a.Ad(b2);
            },
            Yc: function(a2, b2) {
              a2.name = b2;
              if (7 >= p) try {
                var c2 = a2.name.replace(/[&<>'"]/g, function(a3) {
                  return "&#" + a3.charCodeAt(0) + ";";
                });
                a2.mergeAttributes(w.createElement("<input name='" + c2 + "'/>"), false);
              } catch (d2) {
              }
            },
            Ad: function(a2) {
              9 <= p && (a2 = 1 == a2.nodeType ? a2 : a2.parentNode, a2.style && (a2.style.zoom = a2.style.zoom));
            },
            wd: function(a2) {
              if (p) {
                var b2 = a2.style.width;
                a2.style.width = 0;
                a2.style.width = b2;
              }
            },
            Pd: function(b2, c2) {
              b2 = a.a.f(b2);
              c2 = a.a.f(c2);
              for (var d2 = [], e2 = b2; e2 <= c2; e2++) d2.push(e2);
              return d2;
            },
            la: function(a2) {
              for (var b2 = [], c2 = 0, d2 = a2.length; c2 < d2; c2++) b2.push(a2[c2]);
              return b2;
            },
            Da: function(a2) {
              return h ? Symbol(a2) : a2;
            },
            Zd: 6 === p,
            $d: 7 === p,
            W: p,
            Lc: function(b2, c2) {
              for (var d2 = a.a.la(b2.getElementsByTagName("input")).concat(a.a.la(b2.getElementsByTagName("textarea"))), e2 = "string" == typeof c2 ? function(a2) {
                return a2.name === c2;
              } : function(a2) {
                return c2.test(a2.name);
              }, l2 = [], k2 = d2.length - 1; 0 <= k2; k2--) e2(d2[k2]) && l2.push(d2[k2]);
              return l2;
            },
            Nd: function(b2) {
              return "string" == typeof b2 && (b2 = a.a.Db(b2)) ? H && H.parse ? H.parse(b2) : new Function("return " + b2)() : null;
            },
            hc: function(b2, c2, d2) {
              if (!H || !H.stringify) throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
              return H.stringify(a.a.f(b2), c2, d2);
            },
            Od: function(c2, d2, e2) {
              e2 = e2 || {};
              var l2 = e2.params || {}, k2 = e2.includeFields || this.Jc, f2 = c2;
              if ("object" == typeof c2 && "form" === a.a.R(c2)) for (var f2 = c2.action, h2 = k2.length - 1; 0 <= h2; h2--) for (var g2 = a.a.Lc(c2, k2[h2]), m2 = g2.length - 1; 0 <= m2; m2--) l2[g2[m2].name] = g2[m2].value;
              d2 = a.a.f(d2);
              var p2 = w.createElement("form");
              p2.style.display = "none";
              p2.action = f2;
              p2.method = "post";
              for (var q2 in d2) c2 = w.createElement("input"), c2.type = "hidden", c2.name = q2, c2.value = a.a.hc(a.a.f(d2[q2])), p2.appendChild(c2);
              b(l2, function(a2, b2) {
                var c3 = w.createElement("input");
                c3.type = "hidden";
                c3.name = a2;
                c3.value = b2;
                p2.appendChild(c3);
              });
              w.body.appendChild(p2);
              e2.submitter ? e2.submitter(p2) : p2.submit();
              setTimeout(function() {
                p2.parentNode.removeChild(p2);
              }, 0);
            }
          };
        })();
        a.b("utils", a.a);
        a.b("utils.arrayForEach", a.a.D);
        a.b("utils.arrayFirst", a.a.Lb);
        a.b("utils.arrayFilter", a.a.jb);
        a.b("utils.arrayGetDistinctValues", a.a.wc);
        a.b("utils.arrayIndexOf", a.a.A);
        a.b("utils.arrayMap", a.a.Mb);
        a.b("utils.arrayPushAll", a.a.Nb);
        a.b("utils.arrayRemoveItem", a.a.Pa);
        a.b("utils.cloneNodes", a.a.Ca);
        a.b(
          "utils.createSymbolOrString",
          a.a.Da
        );
        a.b("utils.extend", a.a.extend);
        a.b("utils.fieldsIncludedWithJsonPost", a.a.Jc);
        a.b("utils.getFormFields", a.a.Lc);
        a.b("utils.objectMap", a.a.Ga);
        a.b("utils.peekObservable", a.a.bc);
        a.b("utils.postJson", a.a.Od);
        a.b("utils.parseJson", a.a.Nd);
        a.b("utils.registerEventHandler", a.a.B);
        a.b("utils.stringifyJson", a.a.hc);
        a.b("utils.range", a.a.Pd);
        a.b("utils.toggleDomNodeCssClass", a.a.Eb);
        a.b("utils.triggerEvent", a.a.Fb);
        a.b("utils.unwrapObservable", a.a.f);
        a.b("utils.objectForEach", a.a.P);
        a.b(
          "utils.addOrRemoveItem",
          a.a.Na
        );
        a.b("utils.setTextContent", a.a.Bb);
        a.b("unwrap", a.a.f);
        Function.prototype.bind || (Function.prototype.bind = function(a2) {
          var c = this;
          if (1 === arguments.length) return function() {
            return c.apply(a2, arguments);
          };
          var d = Array.prototype.slice.call(arguments, 1);
          return function() {
            var e = d.slice(0);
            e.push.apply(e, arguments);
            return c.apply(a2, e);
          };
        });
        a.a.g = new function() {
          var b = 0, c = "__ko__" + (/* @__PURE__ */ new Date()).getTime(), d = {}, e, f;
          a.a.W ? (e = function(a2, e2) {
            var f2 = a2[c];
            if (!f2 || "null" === f2 || !d[f2]) {
              if (!e2) return n;
              f2 = a2[c] = "ko" + b++;
              d[f2] = {};
            }
            return d[f2];
          }, f = function(a2) {
            var b2 = a2[c];
            return b2 ? (delete d[b2], a2[c] = null, true) : false;
          }) : (e = function(a2, b2) {
            var d2 = a2[c];
            !d2 && b2 && (d2 = a2[c] = {});
            return d2;
          }, f = function(a2) {
            return a2[c] ? (delete a2[c], true) : false;
          });
          return { get: function(a2, b2) {
            var c2 = e(a2, false);
            return c2 && c2[b2];
          }, set: function(a2, b2, c2) {
            (a2 = e(a2, c2 !== n)) && (a2[b2] = c2);
          }, Ub: function(a2, b2, c2) {
            a2 = e(a2, true);
            return a2[b2] || (a2[b2] = c2);
          }, clear: f, Z: function() {
            return b++ + c;
          } };
        }();
        a.b("utils.domData", a.a.g);
        a.b("utils.domData.clear", a.a.g.clear);
        a.a.K = new function() {
          function b(b2, c2) {
            var d2 = a.a.g.get(b2, e);
            d2 === n && c2 && (d2 = [], a.a.g.set(b2, e, d2));
            return d2;
          }
          function c(c2) {
            var e2 = b(c2, false);
            if (e2) for (var e2 = e2.slice(0), k = 0; k < e2.length; k++) e2[k](c2);
            a.a.g.clear(c2);
            a.a.K.cleanExternalData(c2);
            g[c2.nodeType] && d(c2.childNodes, true);
          }
          function d(b2, d2) {
            for (var e2 = [], l, f2 = 0; f2 < b2.length; f2++) if (!d2 || 8 === b2[f2].nodeType) {
              if (c(e2[e2.length] = l = b2[f2]), b2[f2] !== l) for (; f2-- && -1 == a.a.A(e2, b2[f2]); ) ;
            }
          }
          var e = a.a.g.Z(), f = { 1: true, 8: true, 9: true }, g = { 1: true, 9: true };
          return { za: function(a2, c2) {
            if ("function" != typeof c2) throw Error("Callback must be a function");
            b(a2, true).push(c2);
          }, yb: function(c2, d2) {
            var f2 = b(c2, false);
            f2 && (a.a.Pa(f2, d2), 0 == f2.length && a.a.g.set(c2, e, n));
          }, oa: function(b2) {
            a.u.G(function() {
              f[b2.nodeType] && (c(b2), g[b2.nodeType] && d(b2.getElementsByTagName("*")));
            });
            return b2;
          }, removeNode: function(b2) {
            a.oa(b2);
            b2.parentNode && b2.parentNode.removeChild(b2);
          }, cleanExternalData: function(a2) {
            v && "function" == typeof v.cleanData && v.cleanData([a2]);
          } };
        }();
        a.oa = a.a.K.oa;
        a.removeNode = a.a.K.removeNode;
        a.b("cleanNode", a.oa);
        a.b("removeNode", a.removeNode);
        a.b("utils.domNodeDisposal", a.a.K);
        a.b(
          "utils.domNodeDisposal.addDisposeCallback",
          a.a.K.za
        );
        a.b("utils.domNodeDisposal.removeDisposeCallback", a.a.K.yb);
        (function() {
          var b = [0, "", ""], c = [1, "<table>", "</table>"], d = [3, "<table><tbody><tr>", "</tr></tbody></table>"], e = [1, "<select multiple='multiple'>", "</select>"], f = { thead: c, tbody: c, tfoot: c, tr: [2, "<table><tbody>", "</tbody></table>"], td: d, th: d, option: e, optgroup: e }, g = 8 >= a.a.W;
          a.a.ua = function(c2, d2) {
            var e2;
            if (v) if (v.parseHTML) e2 = v.parseHTML(c2, d2) || [];
            else {
              if ((e2 = v.clean([c2], d2)) && e2[0]) {
                for (var l = e2[0]; l.parentNode && 11 !== l.parentNode.nodeType; ) l = l.parentNode;
                l.parentNode && l.parentNode.removeChild(l);
              }
            }
            else {
              (e2 = d2) || (e2 = w);
              var l = e2.parentWindow || e2.defaultView || A, p = a.a.Db(c2).toLowerCase(), q = e2.createElement("div"), t;
              t = (p = p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/)) && f[p[1]] || b;
              p = t[0];
              t = "ignored<div>" + t[1] + c2 + t[2] + "</div>";
              "function" == typeof l.innerShiv ? q.appendChild(l.innerShiv(t)) : (g && e2.body.appendChild(q), q.innerHTML = t, g && q.parentNode.removeChild(q));
              for (; p--; ) q = q.lastChild;
              e2 = a.a.la(q.lastChild.childNodes);
            }
            return e2;
          };
          a.a.Md = function(b2, c2) {
            var d2 = a.a.ua(
              b2,
              c2
            );
            return d2.length && d2[0].parentElement || a.a.Yb(d2);
          };
          a.a.fc = function(b2, c2) {
            a.a.Tb(b2);
            c2 = a.a.f(c2);
            if (null !== c2 && c2 !== n) if ("string" != typeof c2 && (c2 = c2.toString()), v) v(b2).html(c2);
            else for (var d2 = a.a.ua(c2, b2.ownerDocument), e2 = 0; e2 < d2.length; e2++) b2.appendChild(d2[e2]);
          };
        })();
        a.b("utils.parseHtmlFragment", a.a.ua);
        a.b("utils.setHtml", a.a.fc);
        a.aa = /* @__PURE__ */ (function() {
          function b(c2, e) {
            if (c2) {
              if (8 == c2.nodeType) {
                var f = a.aa.Uc(c2.nodeValue);
                null != f && e.push({ ud: c2, Kd: f });
              } else if (1 == c2.nodeType) for (var f = 0, g = c2.childNodes, h = g.length; f < h; f++) b(
                g[f],
                e
              );
            }
          }
          var c = {};
          return { Xb: function(a2) {
            if ("function" != typeof a2) throw Error("You can only pass a function to ko.memoization.memoize()");
            var b2 = (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1) + (4294967296 * (1 + Math.random()) | 0).toString(16).substring(1);
            c[b2] = a2;
            return "<!--[ko_memo:" + b2 + "]-->";
          }, bd: function(a2, b2) {
            var f = c[a2];
            if (f === n) throw Error("Couldn't find any memo with ID " + a2 + ". Perhaps it's already been unmemoized.");
            try {
              return f.apply(null, b2 || []), true;
            } finally {
              delete c[a2];
            }
          }, cd: function(c2, e) {
            var f = [];
            b(c2, f);
            for (var g = 0, h = f.length; g < h; g++) {
              var m = f[g].ud, k = [m];
              e && a.a.Nb(k, e);
              a.aa.bd(f[g].Kd, k);
              m.nodeValue = "";
              m.parentNode && m.parentNode.removeChild(m);
            }
          }, Uc: function(a2) {
            return (a2 = a2.match(/^\[ko_memo\:(.*?)\]$/)) ? a2[1] : null;
          } };
        })();
        a.b("memoization", a.aa);
        a.b("memoization.memoize", a.aa.Xb);
        a.b("memoization.unmemoize", a.aa.bd);
        a.b("memoization.parseMemoText", a.aa.Uc);
        a.b("memoization.unmemoizeDomNodeAndDescendants", a.aa.cd);
        a.na = (function() {
          function b() {
            if (f) {
              for (var b2 = f, c2 = 0, d2; h < f; ) if (d2 = e[h++]) {
                if (h > b2) {
                  if (5e3 <= ++c2) {
                    h = f;
                    a.a.Gc(Error("'Too much recursion' after processing " + c2 + " task groups."));
                    break;
                  }
                  b2 = f;
                }
                try {
                  d2();
                } catch (p) {
                  a.a.Gc(p);
                }
              }
            }
          }
          function c() {
            b();
            h = f = e.length = 0;
          }
          var d, e = [], f = 0, g = 1, h = 0;
          A.MutationObserver ? d = (function(a2) {
            var b2 = w.createElement("div");
            new MutationObserver(a2).observe(b2, { attributes: true });
            return function() {
              b2.classList.toggle("foo");
            };
          })(c) : d = w && "onreadystatechange" in w.createElement("script") ? function(a2) {
            var b2 = w.createElement("script");
            b2.onreadystatechange = function() {
              b2.onreadystatechange = null;
              w.documentElement.removeChild(b2);
              b2 = null;
              a2();
            };
            w.documentElement.appendChild(b2);
          } : function(a2) {
            setTimeout(a2, 0);
          };
          return { scheduler: d, zb: function(b2) {
            f || a.na.scheduler(c);
            e[f++] = b2;
            return g++;
          }, cancel: function(a2) {
            a2 = a2 - (g - f);
            a2 >= h && a2 < f && (e[a2] = null);
          }, resetForTesting: function() {
            var a2 = f - h;
            h = f = e.length = 0;
            return a2;
          }, Sd: b };
        })();
        a.b("tasks", a.na);
        a.b("tasks.schedule", a.na.zb);
        a.b("tasks.runEarly", a.na.Sd);
        a.Ta = { throttle: function(b, c) {
          b.throttleEvaluation = c;
          var d = null;
          return a.$({ read: b, write: function(e) {
            clearTimeout(d);
            d = a.a.setTimeout(
              function() {
                b(e);
              },
              c
            );
          } });
        }, rateLimit: function(a2, c) {
          var d, e, f;
          "number" == typeof c ? d = c : (d = c.timeout, e = c.method);
          a2.Hb = false;
          f = "function" == typeof e ? e : "notifyWhenChangesStop" == e ? Y : X;
          a2.ub(function(a3) {
            return f(a3, d, c);
          });
        }, deferred: function(b, c) {
          if (true !== c) throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");
          b.Hb || (b.Hb = true, b.ub(function(c2) {
            var e, f = false;
            return function() {
              if (!f) {
                a.na.cancel(e);
                e = a.na.zb(c2);
                try {
                  f = true, b.notifySubscribers(n, "dirty");
                } finally {
                  f = false;
                }
              }
            };
          }));
        }, notify: function(a2, c) {
          a2.equalityComparer = "always" == c ? null : K;
        } };
        var W = { undefined: 1, "boolean": 1, number: 1, string: 1 };
        a.b("extenders", a.Ta);
        a.ic = function(b, c, d) {
          this.da = b;
          this.lc = c;
          this.mc = d;
          this.Ib = false;
          this.fb = this.Jb = null;
          a.L(this, "dispose", this.s);
          a.L(this, "disposeWhenNodeIsRemoved", this.l);
        };
        a.ic.prototype.s = function() {
          this.Ib || (this.fb && a.a.K.yb(this.Jb, this.fb), this.Ib = true, this.mc(), this.da = this.lc = this.mc = this.Jb = this.fb = null);
        };
        a.ic.prototype.l = function(b) {
          this.Jb = b;
          a.a.K.za(b, this.fb = this.s.bind(this));
        };
        a.T = function() {
          a.a.Ab(this, D);
          D.qb(this);
        };
        var D = {
          qb: function(a2) {
            a2.U = { change: [] };
            a2.sc = 1;
          },
          subscribe: function(b, c, d) {
            var e = this;
            d = d || "change";
            var f = new a.ic(e, c ? b.bind(c) : b, function() {
              a.a.Pa(e.U[d], f);
              e.hb && e.hb(d);
            });
            e.Qa && e.Qa(d);
            e.U[d] || (e.U[d] = []);
            e.U[d].push(f);
            return f;
          },
          notifySubscribers: function(b, c) {
            c = c || "change";
            "change" === c && this.Gb();
            if (this.Wa(c)) {
              var d = "change" === c && this.ed || this.U[c].slice(0);
              try {
                a.u.xc();
                for (var e = 0, f; f = d[e]; ++e) f.Ib || f.lc(b);
              } finally {
                a.u.end();
              }
            }
          },
          ob: function() {
            return this.sc;
          },
          Dd: function(a2) {
            return this.ob() !== a2;
          },
          Gb: function() {
            ++this.sc;
          },
          ub: function(b) {
            var c = this, d = a.O(c), e, f, g, h, m;
            c.gb || (c.gb = c.notifySubscribers, c.notifySubscribers = Z);
            var k = b(function() {
              c.Ja = false;
              d && h === c && (h = c.nc ? c.nc() : c());
              var a2 = f || m && c.sb(g, h);
              m = f = e = false;
              a2 && c.gb(g = h);
            });
            c.qc = function(a2, b2) {
              b2 && c.Ja || (m = !b2);
              c.ed = c.U.change.slice(0);
              c.Ja = e = true;
              h = a2;
              k();
            };
            c.pc = function(a2) {
              e || (g = a2, c.gb(a2, "beforeChange"));
            };
            c.rc = function() {
              m = true;
            };
            c.gd = function() {
              c.sb(g, c.v(true)) && (f = true);
            };
          },
          Wa: function(a2) {
            return this.U[a2] && this.U[a2].length;
          },
          Bd: function(b) {
            if (b) return this.U[b] && this.U[b].length || 0;
            var c = 0;
            a.a.P(this.U, function(a2, b2) {
              "dirty" !== a2 && (c += b2.length);
            });
            return c;
          },
          sb: function(a2, c) {
            return !this.equalityComparer || !this.equalityComparer(a2, c);
          },
          toString: function() {
            return "[object Object]";
          },
          extend: function(b) {
            var c = this;
            b && a.a.P(b, function(b2, e) {
              var f = a.Ta[b2];
              "function" == typeof f && (c = f(c, e) || c);
            });
            return c;
          }
        };
        a.L(D, "init", D.qb);
        a.L(D, "subscribe", D.subscribe);
        a.L(D, "extend", D.extend);
        a.L(D, "getSubscriptionsCount", D.Bd);
        a.a.Ba && a.a.setPrototypeOf(
          D,
          Function.prototype
        );
        a.T.fn = D;
        a.Qc = function(a2) {
          return null != a2 && "function" == typeof a2.subscribe && "function" == typeof a2.notifySubscribers;
        };
        a.b("subscribable", a.T);
        a.b("isSubscribable", a.Qc);
        a.S = a.u = /* @__PURE__ */ (function() {
          function b(a2) {
            d.push(e);
            e = a2;
          }
          function c() {
            e = d.pop();
          }
          var d = [], e, f = 0;
          return {
            xc: b,
            end: c,
            cc: function(b2) {
              if (e) {
                if (!a.Qc(b2)) throw Error("Only subscribable things can act as dependencies");
                e.od.call(e.pd, b2, b2.fd || (b2.fd = ++f));
              }
            },
            G: function(a2, d2, e2) {
              try {
                return b(), a2.apply(d2, e2 || []);
              } finally {
                c();
              }
            },
            qa: function() {
              if (e) return e.o.qa();
            },
            Va: function() {
              if (e) return e.o.Va();
            },
            Ya: function() {
              if (e) return e.Ya;
            },
            o: function() {
              if (e) return e.o;
            }
          };
        })();
        a.b("computedContext", a.S);
        a.b("computedContext.getDependenciesCount", a.S.qa);
        a.b("computedContext.getDependencies", a.S.Va);
        a.b("computedContext.isInitial", a.S.Ya);
        a.b("computedContext.registerDependency", a.S.cc);
        a.b("ignoreDependencies", a.Yd = a.u.G);
        var I = a.a.Da("_latestValue");
        a.ta = function(b) {
          function c() {
            if (0 < arguments.length) return c.sb(c[I], arguments[0]) && (c.ya(), c[I] = arguments[0], c.xa()), this;
            a.u.cc(c);
            return c[I];
          }
          c[I] = b;
          a.a.Ba || a.a.extend(c, a.T.fn);
          a.T.fn.qb(c);
          a.a.Ab(c, F);
          a.options.deferUpdates && a.Ta.deferred(c, true);
          return c;
        };
        var F = { equalityComparer: K, v: function() {
          return this[I];
        }, xa: function() {
          this.notifySubscribers(this[I], "spectate");
          this.notifySubscribers(this[I]);
        }, ya: function() {
          this.notifySubscribers(this[I], "beforeChange");
        } };
        a.a.Ba && a.a.setPrototypeOf(F, a.T.fn);
        var G = a.ta.Ma = "__ko_proto__";
        F[G] = a.ta;
        a.O = function(b) {
          if ((b = "function" == typeof b && b[G]) && b !== F[G] && b !== a.o.fn[G]) throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
          return !!b;
        };
        a.Za = function(b) {
          return "function" == typeof b && (b[G] === F[G] || b[G] === a.o.fn[G] && b.Nc);
        };
        a.b("observable", a.ta);
        a.b("isObservable", a.O);
        a.b("isWriteableObservable", a.Za);
        a.b("isWritableObservable", a.Za);
        a.b("observable.fn", F);
        a.L(F, "peek", F.v);
        a.L(F, "valueHasMutated", F.xa);
        a.L(F, "valueWillMutate", F.ya);
        a.Ha = function(b) {
          b = b || [];
          if ("object" != typeof b || !("length" in b)) throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");
          b = a.ta(b);
          a.a.Ab(
            b,
            a.Ha.fn
          );
          return b.extend({ trackArrayChanges: true });
        };
        a.Ha.fn = { remove: function(b) {
          for (var c = this.v(), d = [], e = "function" != typeof b || a.O(b) ? function(a2) {
            return a2 === b;
          } : b, f = 0; f < c.length; f++) {
            var g = c[f];
            if (e(g)) {
              0 === d.length && this.ya();
              if (c[f] !== g) throw Error("Array modified during remove; cannot remove item");
              d.push(g);
              c.splice(f, 1);
              f--;
            }
          }
          d.length && this.xa();
          return d;
        }, removeAll: function(b) {
          if (b === n) {
            var c = this.v(), d = c.slice(0);
            this.ya();
            c.splice(0, c.length);
            this.xa();
            return d;
          }
          return b ? this.remove(function(c2) {
            return 0 <= a.a.A(b, c2);
          }) : [];
        }, destroy: function(b) {
          var c = this.v(), d = "function" != typeof b || a.O(b) ? function(a2) {
            return a2 === b;
          } : b;
          this.ya();
          for (var e = c.length - 1; 0 <= e; e--) {
            var f = c[e];
            d(f) && (f._destroy = true);
          }
          this.xa();
        }, destroyAll: function(b) {
          return b === n ? this.destroy(function() {
            return true;
          }) : b ? this.destroy(function(c) {
            return 0 <= a.a.A(b, c);
          }) : [];
        }, indexOf: function(b) {
          var c = this();
          return a.a.A(c, b);
        }, replace: function(a2, c) {
          var d = this.indexOf(a2);
          0 <= d && (this.ya(), this.v()[d] = c, this.xa());
        }, sorted: function(a2) {
          var c = this().slice(0);
          return a2 ? c.sort(a2) : c.sort();
        }, reversed: function() {
          return this().slice(0).reverse();
        } };
        a.a.Ba && a.a.setPrototypeOf(a.Ha.fn, a.ta.fn);
        a.a.D("pop push reverse shift sort splice unshift".split(" "), function(b) {
          a.Ha.fn[b] = function() {
            var a2 = this.v();
            this.ya();
            this.zc(a2, b, arguments);
            var d = a2[b].apply(a2, arguments);
            this.xa();
            return d === a2 ? this : d;
          };
        });
        a.a.D(["slice"], function(b) {
          a.Ha.fn[b] = function() {
            var a2 = this();
            return a2[b].apply(a2, arguments);
          };
        });
        a.Pc = function(b) {
          return a.O(b) && "function" == typeof b.remove && "function" == typeof b.push;
        };
        a.b("observableArray", a.Ha);
        a.b("isObservableArray", a.Pc);
        a.Ta.trackArrayChanges = function(b, c) {
          function d() {
            function c2() {
              if (m) {
                var d2 = [].concat(b.v() || []), e2;
                if (b.Wa("arrayChange")) {
                  if (!f || 1 < m) f = a.a.Pb(k, d2, b.Ob);
                  e2 = f;
                }
                k = d2;
                f = null;
                m = 0;
                e2 && e2.length && b.notifySubscribers(e2, "arrayChange");
              }
            }
            e ? c2() : (e = true, h = b.subscribe(function() {
              ++m;
            }, null, "spectate"), k = [].concat(b.v() || []), f = null, g = b.subscribe(c2));
          }
          b.Ob = {};
          c && "object" == typeof c && a.a.extend(b.Ob, c);
          b.Ob.sparse = true;
          if (!b.zc) {
            var e = false, f = null, g, h, m = 0, k, l = b.Qa, p = b.hb;
            b.Qa = function(a2) {
              l && l.call(b, a2);
              "arrayChange" === a2 && d();
            };
            b.hb = function(a2) {
              p && p.call(b, a2);
              "arrayChange" !== a2 || b.Wa("arrayChange") || (g && g.s(), h && h.s(), h = g = null, e = false, k = n);
            };
            b.zc = function(b2, c2, d2) {
              function l2(a2, b3, c3) {
                return k2[k2.length] = { status: a2, value: b3, index: c3 };
              }
              if (e && !m) {
                var k2 = [], p2 = b2.length, g2 = d2.length, h2 = 0;
                switch (c2) {
                  case "push":
                    h2 = p2;
                  case "unshift":
                    for (c2 = 0; c2 < g2; c2++) l2("added", d2[c2], h2 + c2);
                    break;
                  case "pop":
                    h2 = p2 - 1;
                  case "shift":
                    p2 && l2("deleted", b2[h2], h2);
                    break;
                  case "splice":
                    c2 = Math.min(Math.max(0, 0 > d2[0] ? p2 + d2[0] : d2[0]), p2);
                    for (var p2 = 1 === g2 ? p2 : Math.min(c2 + (d2[1] || 0), p2), g2 = c2 + g2 - 2, h2 = Math.max(p2, g2), U = [], L = [], n2 = 2; c2 < h2; ++c2, ++n2) c2 < p2 && L.push(l2("deleted", b2[c2], c2)), c2 < g2 && U.push(l2("added", d2[n2], c2));
                    a.a.Kc(L, U);
                    break;
                  default:
                    return;
                }
                f = k2;
              }
            };
          }
        };
        var r = a.a.Da("_state");
        a.o = a.$ = function(b, c, d) {
          function e() {
            if (0 < arguments.length) {
              if ("function" === typeof f) f.apply(g.nb, arguments);
              else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");
              return this;
            }
            g.ra || a.u.cc(e);
            (g.ka || g.J && e.Xa()) && e.ha();
            return g.X;
          }
          "object" === typeof b ? d = b : (d = d || {}, b && (d.read = b));
          if ("function" != typeof d.read) throw Error("Pass a function that returns the value of the ko.computed");
          var f = d.write, g = { X: n, sa: true, ka: true, rb: false, jc: false, ra: false, wb: false, J: false, Wc: d.read, nb: c || d.owner, l: d.disposeWhenNodeIsRemoved || d.l || null, Sa: d.disposeWhen || d.Sa, Rb: null, I: {}, V: 0, Ic: null };
          e[r] = g;
          e.Nc = "function" === typeof f;
          a.a.Ba || a.a.extend(e, a.T.fn);
          a.T.fn.qb(e);
          a.a.Ab(e, C);
          d.pure ? (g.wb = true, g.J = true, a.a.extend(e, da)) : d.deferEvaluation && a.a.extend(e, ea);
          a.options.deferUpdates && a.Ta.deferred(e, true);
          g.l && (g.jc = true, g.l.nodeType || (g.l = null));
          g.J || d.deferEvaluation || e.ha();
          g.l && e.ja() && a.a.K.za(g.l, g.Rb = function() {
            e.s();
          });
          return e;
        };
        var C = {
          equalityComparer: K,
          qa: function() {
            return this[r].V;
          },
          Va: function() {
            var b = [];
            a.a.P(this[r].I, function(a2, d) {
              b[d.Ka] = d.da;
            });
            return b;
          },
          Vb: function(b) {
            if (!this[r].V) return false;
            var c = this.Va();
            return -1 !== a.a.A(c, b) ? true : !!a.a.Lb(c, function(a2) {
              return a2.Vb && a2.Vb(b);
            });
          },
          uc: function(a2, c, d) {
            if (this[r].wb && c === this) throw Error("A 'pure' computed must not be called recursively");
            this[r].I[a2] = d;
            d.Ka = this[r].V++;
            d.La = c.ob();
          },
          Xa: function() {
            var a2, c, d = this[r].I;
            for (a2 in d) if (Object.prototype.hasOwnProperty.call(d, a2) && (c = d[a2], this.Ia && c.da.Ja || c.da.Dd(c.La))) return true;
          },
          Jd: function() {
            this.Ia && !this[r].rb && this.Ia(false);
          },
          ja: function() {
            var a2 = this[r];
            return a2.ka || 0 < a2.V;
          },
          Rd: function() {
            this.Ja ? this[r].ka && (this[r].sa = true) : this.Hc();
          },
          $c: function(a2) {
            if (a2.Hb) {
              var c = a2.subscribe(this.Jd, this, "dirty"), d = a2.subscribe(
                this.Rd,
                this
              );
              return { da: a2, s: function() {
                c.s();
                d.s();
              } };
            }
            return a2.subscribe(this.Hc, this);
          },
          Hc: function() {
            var b = this, c = b.throttleEvaluation;
            c && 0 <= c ? (clearTimeout(this[r].Ic), this[r].Ic = a.a.setTimeout(function() {
              b.ha(true);
            }, c)) : b.Ia ? b.Ia(true) : b.ha(true);
          },
          ha: function(b) {
            var c = this[r], d = c.Sa, e = false;
            if (!c.rb && !c.ra) {
              if (c.l && !a.a.Sb(c.l) || d && d()) {
                if (!c.jc) {
                  this.s();
                  return;
                }
              } else c.jc = false;
              c.rb = true;
              try {
                e = this.zd(b);
              } finally {
                c.rb = false;
              }
              return e;
            }
          },
          zd: function(b) {
            var c = this[r], d = false, e = c.wb ? n : !c.V, d = { qd: this, mb: c.I, Qb: c.V };
            a.u.xc({
              pd: d,
              od: ba,
              o: this,
              Ya: e
            });
            c.I = {};
            c.V = 0;
            var f = this.yd(c, d);
            c.V ? d = this.sb(c.X, f) : (this.s(), d = true);
            d && (c.J ? this.Gb() : this.notifySubscribers(c.X, "beforeChange"), c.X = f, this.notifySubscribers(c.X, "spectate"), !c.J && b && this.notifySubscribers(c.X), this.rc && this.rc());
            e && this.notifySubscribers(c.X, "awake");
            return d;
          },
          yd: function(b, c) {
            try {
              var d = b.Wc;
              return b.nb ? d.call(b.nb) : d();
            } finally {
              a.u.end(), c.Qb && !b.J && a.a.P(c.mb, aa), b.sa = b.ka = false;
            }
          },
          v: function(a2) {
            var c = this[r];
            (c.ka && (a2 || !c.V) || c.J && this.Xa()) && this.ha();
            return c.X;
          },
          ub: function(b) {
            a.T.fn.ub.call(this, b);
            this.nc = function() {
              this[r].J || (this[r].sa ? this.ha() : this[r].ka = false);
              return this[r].X;
            };
            this.Ia = function(a2) {
              this.pc(this[r].X);
              this[r].ka = true;
              a2 && (this[r].sa = true);
              this.qc(this, !a2);
            };
          },
          s: function() {
            var b = this[r];
            !b.J && b.I && a.a.P(b.I, function(a2, b2) {
              b2.s && b2.s();
            });
            b.l && b.Rb && a.a.K.yb(b.l, b.Rb);
            b.I = n;
            b.V = 0;
            b.ra = true;
            b.sa = false;
            b.ka = false;
            b.J = false;
            b.l = n;
            b.Sa = n;
            b.Wc = n;
            this.Nc || (b.nb = n);
          }
        }, da = { Qa: function(b) {
          var c = this, d = c[r];
          if (!d.ra && d.J && "change" == b) {
            d.J = false;
            if (d.sa || c.Xa()) d.I = null, d.V = 0, c.ha() && c.Gb();
            else {
              var e = [];
              a.a.P(d.I, function(a2, b2) {
                e[b2.Ka] = a2;
              });
              a.a.D(e, function(a2, b2) {
                var e2 = d.I[a2], m = c.$c(e2.da);
                m.Ka = b2;
                m.La = e2.La;
                d.I[a2] = m;
              });
              c.Xa() && c.ha() && c.Gb();
            }
            d.ra || c.notifySubscribers(d.X, "awake");
          }
        }, hb: function(b) {
          var c = this[r];
          c.ra || "change" != b || this.Wa("change") || (a.a.P(c.I, function(a2, b2) {
            b2.s && (c.I[a2] = { da: b2.da, Ka: b2.Ka, La: b2.La }, b2.s());
          }), c.J = true, this.notifySubscribers(n, "asleep"));
        }, ob: function() {
          var b = this[r];
          b.J && (b.sa || this.Xa()) && this.ha();
          return a.T.fn.ob.call(this);
        } }, ea = { Qa: function(a2) {
          "change" != a2 && "beforeChange" != a2 || this.v();
        } };
        a.a.Ba && a.a.setPrototypeOf(C, a.T.fn);
        var N = a.ta.Ma;
        C[N] = a.o;
        a.Oc = function(a2) {
          return "function" == typeof a2 && a2[N] === C[N];
        };
        a.Fd = function(b) {
          return a.Oc(b) && b[r] && b[r].wb;
        };
        a.b("computed", a.o);
        a.b("dependentObservable", a.o);
        a.b("isComputed", a.Oc);
        a.b("isPureComputed", a.Fd);
        a.b("computed.fn", C);
        a.L(C, "peek", C.v);
        a.L(C, "dispose", C.s);
        a.L(C, "isActive", C.ja);
        a.L(C, "getDependenciesCount", C.qa);
        a.L(C, "getDependencies", C.Va);
        a.xb = function(b, c) {
          if ("function" === typeof b) return a.o(
            b,
            c,
            { pure: true }
          );
          b = a.a.extend({}, b);
          b.pure = true;
          return a.o(b, c);
        };
        a.b("pureComputed", a.xb);
        (function() {
          function b(a2, f, g) {
            g = g || new d();
            a2 = f(a2);
            if ("object" != typeof a2 || null === a2 || a2 === n || a2 instanceof RegExp || a2 instanceof Date || a2 instanceof String || a2 instanceof Number || a2 instanceof Boolean) return a2;
            var h = a2 instanceof Array ? [] : {};
            g.save(a2, h);
            c(a2, function(c2) {
              var d2 = f(a2[c2]);
              switch (typeof d2) {
                case "boolean":
                case "number":
                case "string":
                case "function":
                  h[c2] = d2;
                  break;
                case "object":
                case "undefined":
                  var l = g.get(d2);
                  h[c2] = l !== n ? l : b(d2, f, g);
              }
            });
            return h;
          }
          function c(a2, b2) {
            if (a2 instanceof Array) {
              for (var c2 = 0; c2 < a2.length; c2++) b2(c2);
              "function" == typeof a2.toJSON && b2("toJSON");
            } else for (c2 in a2) b2(c2);
          }
          function d() {
            this.keys = [];
            this.values = [];
          }
          a.ad = function(c2) {
            if (0 == arguments.length) throw Error("When calling ko.toJS, pass the object you want to convert.");
            return b(c2, function(b2) {
              for (var c3 = 0; a.O(b2) && 10 > c3; c3++) b2 = b2();
              return b2;
            });
          };
          a.toJSON = function(b2, c2, d2) {
            b2 = a.ad(b2);
            return a.a.hc(b2, c2, d2);
          };
          d.prototype = { constructor: d, save: function(b2, c2) {
            var d2 = a.a.A(
              this.keys,
              b2
            );
            0 <= d2 ? this.values[d2] = c2 : (this.keys.push(b2), this.values.push(c2));
          }, get: function(b2) {
            b2 = a.a.A(this.keys, b2);
            return 0 <= b2 ? this.values[b2] : n;
          } };
        })();
        a.b("toJS", a.ad);
        a.b("toJSON", a.toJSON);
        a.Wd = function(b, c, d) {
          function e(c2) {
            var e2 = a.xb(b, d).extend({ ma: "always" }), h = e2.subscribe(function(a2) {
              a2 && (h.s(), c2(a2));
            });
            e2.notifySubscribers(e2.v());
            return h;
          }
          return "function" !== typeof Promise || c ? e(c.bind(d)) : new Promise(e);
        };
        a.b("when", a.Wd);
        (function() {
          a.w = { M: function(b) {
            switch (a.a.R(b)) {
              case "option":
                return true === b.__ko__hasDomDataOptionValue__ ? a.a.g.get(b, a.c.options.$b) : 7 >= a.a.W ? b.getAttributeNode("value") && b.getAttributeNode("value").specified ? b.value : b.text : b.value;
              case "select":
                return 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) : n;
              default:
                return b.value;
            }
          }, cb: function(b, c, d) {
            switch (a.a.R(b)) {
              case "option":
                "string" === typeof c ? (a.a.g.set(b, a.c.options.$b, n), "__ko__hasDomDataOptionValue__" in b && delete b.__ko__hasDomDataOptionValue__, b.value = c) : (a.a.g.set(b, a.c.options.$b, c), b.__ko__hasDomDataOptionValue__ = true, b.value = "number" === typeof c ? c : "");
                break;
              case "select":
                if ("" === c || null === c) c = n;
                for (var e = -1, f = 0, g = b.options.length, h; f < g; ++f) if (h = a.w.M(b.options[f]), h == c || "" === h && c === n) {
                  e = f;
                  break;
                }
                if (d || 0 <= e || c === n && 1 < b.size) b.selectedIndex = e, 6 === a.a.W && a.a.setTimeout(function() {
                  b.selectedIndex = e;
                }, 0);
                break;
              default:
                if (null === c || c === n) c = "";
                b.value = c;
            }
          } };
        })();
        a.b("selectExtensions", a.w);
        a.b("selectExtensions.readValue", a.w.M);
        a.b("selectExtensions.writeValue", a.w.cb);
        a.m = (function() {
          function b(b2) {
            b2 = a.a.Db(b2);
            123 === b2.charCodeAt(0) && (b2 = b2.slice(
              1,
              -1
            ));
            b2 += "\n,";
            var c2 = [], d2 = b2.match(e), p, q = [], h2 = 0;
            if (1 < d2.length) {
              for (var x = 0, B; B = d2[x]; ++x) {
                var u = B.charCodeAt(0);
                if (44 === u) {
                  if (0 >= h2) {
                    c2.push(p && q.length ? { key: p, value: q.join("") } : { unknown: p || q.join("") });
                    p = h2 = 0;
                    q = [];
                    continue;
                  }
                } else if (58 === u) {
                  if (!h2 && !p && 1 === q.length) {
                    p = q.pop();
                    continue;
                  }
                } else if (47 === u && 1 < B.length && (47 === B.charCodeAt(1) || 42 === B.charCodeAt(1))) continue;
                else 47 === u && x && 1 < B.length ? (u = d2[x - 1].match(f)) && !g[u[0]] && (b2 = b2.substr(b2.indexOf(B) + 1), d2 = b2.match(e), x = -1, B = "/") : 40 === u || 123 === u || 91 === u ? ++h2 : 41 === u || 125 === u || 93 === u ? --h2 : p || q.length || 34 !== u && 39 !== u || (B = B.slice(1, -1));
                q.push(B);
              }
              if (0 < h2) throw Error("Unbalanced parentheses, braces, or brackets");
            }
            return c2;
          }
          var c = ["true", "false", "null", "undefined"], d = /^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i, e = RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]", "g"), f = /[\])"'A-Za-z0-9_$]+$/, g = { "in": 1, "return": 1, "typeof": 1 }, h = {};
          return { Ra: [], wa: h, ac: b, vb: function(e2, f2) {
            function l(b2, e3) {
              var f3;
              if (!x) {
                var k = a.getBindingHandler(b2);
                if (k && k.preprocess && !(e3 = k.preprocess(e3, b2, l))) return;
                if (k = h[b2]) f3 = e3, 0 <= a.a.A(c, f3) ? f3 = false : (k = f3.match(d), f3 = null === k ? false : k[1] ? "Object(" + k[1] + ")" + k[2] : f3), k = f3;
                k && q.push("'" + ("string" == typeof h[b2] ? h[b2] : b2) + "':function(_z){" + f3 + "=_z}");
              }
              g2 && (e3 = "function(){return " + e3 + " }");
              p.push("'" + b2 + "':" + e3);
            }
            f2 = f2 || {};
            var p = [], q = [], g2 = f2.valueAccessors, x = f2.bindingParams, B = "string" === typeof e2 ? b(e2) : e2;
            a.a.D(B, function(a2) {
              l(
                a2.key || a2.unknown,
                a2.value
              );
            });
            q.length && l("_ko_property_writers", "{" + q.join(",") + " }");
            return p.join(",");
          }, Id: function(a2, b2) {
            for (var c2 = 0; c2 < a2.length; c2++) if (a2[c2].key == b2) return true;
            return false;
          }, eb: function(b2, c2, d2, e2, f2) {
            if (b2 && a.O(b2)) !a.Za(b2) || f2 && b2.v() === e2 || b2(e2);
            else if ((b2 = c2.get("_ko_property_writers")) && b2[d2]) b2[d2](e2);
          } };
        })();
        a.b("expressionRewriting", a.m);
        a.b("expressionRewriting.bindingRewriteValidators", a.m.Ra);
        a.b("expressionRewriting.parseObjectLiteral", a.m.ac);
        a.b("expressionRewriting.preProcessBindings", a.m.vb);
        a.b(
          "expressionRewriting._twoWayBindings",
          a.m.wa
        );
        a.b("jsonExpressionRewriting", a.m);
        a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson", a.m.vb);
        (function() {
          function b(a2) {
            return 8 == a2.nodeType && g.test(f ? a2.text : a2.nodeValue);
          }
          function c(a2) {
            return 8 == a2.nodeType && h.test(f ? a2.text : a2.nodeValue);
          }
          function d(d2, e2) {
            for (var f2 = d2, h2 = 1, g2 = []; f2 = f2.nextSibling; ) {
              if (c(f2) && (a.a.g.set(f2, k, true), h2--, 0 === h2)) return g2;
              g2.push(f2);
              b(f2) && h2++;
            }
            if (!e2) throw Error("Cannot find closing comment tag to match: " + d2.nodeValue);
            return null;
          }
          function e(a2, b2) {
            var c2 = d(a2, b2);
            return c2 ? 0 < c2.length ? c2[c2.length - 1].nextSibling : a2.nextSibling : null;
          }
          var f = w && "<!--test-->" === w.createComment("test").text, g = f ? /^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/ : /^\s*ko(?:\s+([\s\S]+))?\s*$/, h = f ? /^\x3c!--\s*\/ko\s*--\x3e$/ : /^\s*\/ko\s*$/, m = { ul: true, ol: true }, k = "__ko_matchedEndComment__";
          a.h = { ea: {}, childNodes: function(a2) {
            return b(a2) ? d(a2) : a2.childNodes;
          }, Ea: function(c2) {
            if (b(c2)) {
              c2 = a.h.childNodes(c2);
              for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) a.removeNode(c2[d2]);
            } else a.a.Tb(c2);
          }, va: function(c2, d2) {
            if (b(c2)) {
              a.h.Ea(c2);
              for (var e2 = c2.nextSibling, f2 = 0, k2 = d2.length; f2 < k2; f2++) e2.parentNode.insertBefore(d2[f2], e2);
            } else a.a.va(c2, d2);
          }, Vc: function(a2, c2) {
            var d2;
            b(a2) ? (d2 = a2.nextSibling, a2 = a2.parentNode) : d2 = a2.firstChild;
            d2 ? c2 !== d2 && a2.insertBefore(c2, d2) : a2.appendChild(c2);
          }, Wb: function(c2, d2, e2) {
            e2 ? (e2 = e2.nextSibling, b(c2) && (c2 = c2.parentNode), e2 ? d2 !== e2 && c2.insertBefore(d2, e2) : c2.appendChild(d2)) : a.h.Vc(c2, d2);
          }, firstChild: function(a2) {
            if (b(a2)) return !a2.nextSibling || c(a2.nextSibling) ? null : a2.nextSibling;
            if (a2.firstChild && c(a2.firstChild)) throw Error("Found invalid end comment, as the first child of " + a2);
            return a2.firstChild;
          }, nextSibling: function(d2) {
            b(d2) && (d2 = e(d2));
            if (d2.nextSibling && c(d2.nextSibling)) {
              var f2 = d2.nextSibling;
              if (c(f2) && !a.a.g.get(f2, k)) throw Error("Found end comment without a matching opening comment, as child of " + d2);
              return null;
            }
            return d2.nextSibling;
          }, Cd: b, Vd: function(a2) {
            return (a2 = (f ? a2.text : a2.nodeValue).match(g)) ? a2[1] : null;
          }, Sc: function(d2) {
            if (m[a.a.R(d2)]) {
              var f2 = d2.firstChild;
              if (f2) {
                do
                  if (1 === f2.nodeType) {
                    var k2;
                    k2 = f2.firstChild;
                    var h2 = null;
                    if (k2) {
                      do
                        if (h2) h2.push(k2);
                        else if (b(k2)) {
                          var g2 = e(k2, true);
                          g2 ? k2 = g2 : h2 = [k2];
                        } else c(k2) && (h2 = [k2]);
                      while (k2 = k2.nextSibling);
                    }
                    if (k2 = h2) for (h2 = f2.nextSibling, g2 = 0; g2 < k2.length; g2++) h2 ? d2.insertBefore(k2[g2], h2) : d2.appendChild(k2[g2]);
                  }
                while (f2 = f2.nextSibling);
              }
            }
          } };
        })();
        a.b("virtualElements", a.h);
        a.b("virtualElements.allowedBindings", a.h.ea);
        a.b("virtualElements.emptyNode", a.h.Ea);
        a.b("virtualElements.insertAfter", a.h.Wb);
        a.b("virtualElements.prepend", a.h.Vc);
        a.b("virtualElements.setDomNodeChildren", a.h.va);
        (function() {
          a.ga = function() {
            this.nd = {};
          };
          a.a.extend(a.ga.prototype, {
            nodeHasBindings: function(b) {
              switch (b.nodeType) {
                case 1:
                  return null != b.getAttribute("data-bind") || a.j.getComponentNameForNode(b);
                case 8:
                  return a.h.Cd(b);
                default:
                  return false;
              }
            },
            getBindings: function(b, c) {
              var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b) : null;
              return a.j.tc(d, b, c, false);
            },
            getBindingAccessors: function(b, c) {
              var d = this.getBindingsString(b, c), d = d ? this.parseBindingsString(d, c, b, { valueAccessors: true }) : null;
              return a.j.tc(d, b, c, true);
            },
            getBindingsString: function(b) {
              switch (b.nodeType) {
                case 1:
                  return b.getAttribute("data-bind");
                case 8:
                  return a.h.Vd(b);
                default:
                  return null;
              }
            },
            parseBindingsString: function(b, c, d, e) {
              try {
                var f = this.nd, g = b + (e && e.valueAccessors || ""), h;
                if (!(h = f[g])) {
                  var m, k = "with($context){with($data||{}){return{" + a.m.vb(b, e) + "}}}";
                  m = new Function("$context", "$element", k);
                  h = f[g] = m;
                }
                return h(c, d);
              } catch (l) {
                throw l.message = "Unable to parse bindings.\nBindings value: " + b + "\nMessage: " + l.message, l;
              }
            }
          });
          a.ga.instance = new a.ga();
        })();
        a.b("bindingProvider", a.ga);
        (function() {
          function b(b2) {
            var c2 = (b2 = a.a.g.get(b2, z)) && b2.N;
            c2 && (b2.N = null, c2.Tc());
          }
          function c(c2, d2, e2) {
            this.node = c2;
            this.yc = d2;
            this.kb = [];
            this.H = false;
            d2.N || a.a.K.za(c2, b);
            e2 && e2.N && (e2.N.kb.push(c2), this.Kb = e2);
          }
          function d(a2) {
            return function() {
              return a2;
            };
          }
          function e(a2) {
            return a2();
          }
          function f(b2) {
            return a.a.Ga(a.u.G(b2), function(a2, c2) {
              return function() {
                return b2()[c2];
              };
            });
          }
          function g(b2, c2, e2) {
            return "function" === typeof b2 ? f(b2.bind(null, c2, e2)) : a.a.Ga(b2, d);
          }
          function h(a2, b2) {
            return f(this.getBindings.bind(this, a2, b2));
          }
          function m(b2, c2) {
            var d2 = a.h.firstChild(c2);
            if (d2) {
              var e2, f2 = a.ga.instance, l2 = f2.preprocessNode;
              if (l2) {
                for (; e2 = d2; ) d2 = a.h.nextSibling(e2), l2.call(f2, e2);
                d2 = a.h.firstChild(c2);
              }
              for (; e2 = d2; ) d2 = a.h.nextSibling(e2), k(b2, e2);
            }
            a.i.ma(c2, a.i.H);
          }
          function k(b2, c2) {
            var d2 = b2, e2 = 1 === c2.nodeType;
            e2 && a.h.Sc(c2);
            if (e2 || a.ga.instance.nodeHasBindings(c2)) d2 = p(c2, null, b2).bindingContextForDescendants;
            d2 && !u[a.a.R(c2)] && m(d2, c2);
          }
          function l(b2) {
            var c2 = [], d2 = {}, e2 = [];
            a.a.P(b2, function ca(f2) {
              if (!d2[f2]) {
                var k2 = a.getBindingHandler(f2);
                k2 && (k2.after && (e2.push(f2), a.a.D(k2.after, function(c3) {
                  if (b2[c3]) {
                    if (-1 !== a.a.A(e2, c3)) throw Error("Cannot combine the following bindings, because they have a cyclic dependency: " + e2.join(", "));
                    ca(c3);
                  }
                }), e2.length--), c2.push({ key: f2, Mc: k2 }));
                d2[f2] = true;
              }
            });
            return c2;
          }
          function p(b2, c2, d2) {
            var f2 = a.a.g.Ub(b2, z, {}), k2 = f2.hd;
            if (!c2) {
              if (k2) throw Error("You cannot apply bindings multiple times to the same element.");
              f2.hd = true;
            }
            k2 || (f2.context = d2);
            f2.Zb || (f2.Zb = {});
            var g2;
            if (c2 && "function" !== typeof c2) g2 = c2;
            else {
              var p2 = a.ga.instance, q2 = p2.getBindingAccessors || h, m2 = a.$(function() {
                if (g2 = c2 ? c2(d2, b2) : q2.call(p2, b2, d2)) {
                  if (d2[t]) d2[t]();
                  if (d2[B]) d2[B]();
                }
                return g2;
              }, null, { l: b2 });
              g2 && m2.ja() || (m2 = null);
            }
            var x2 = d2, u2;
            if (g2) {
              var J2 = function() {
                return a.a.Ga(m2 ? m2() : g2, e);
              }, r2 = m2 ? function(a2) {
                return function() {
                  return e(m2()[a2]);
                };
              } : function(a2) {
                return g2[a2];
              };
              J2.get = function(a2) {
                return g2[a2] && e(r2(a2));
              };
              J2.has = function(a2) {
                return a2 in g2;
              };
              a.i.H in g2 && a.i.subscribe(b2, a.i.H, function() {
                var c3 = (0, g2[a.i.H])();
                if (c3) {
                  var d3 = a.h.childNodes(b2);
                  d3.length && c3(d3, a.Ec(d3[0]));
                }
              });
              a.i.pa in g2 && (x2 = a.i.Cb(b2, d2), a.i.subscribe(b2, a.i.pa, function() {
                var c3 = (0, g2[a.i.pa])();
                c3 && a.h.firstChild(b2) && c3(b2);
              }));
              f2 = l(g2);
              a.a.D(f2, function(c3) {
                var d3 = c3.Mc.init, e2 = c3.Mc.update, f3 = c3.key;
                if (8 === b2.nodeType && !a.h.ea[f3]) throw Error("The binding '" + f3 + "' cannot be used with virtual elements");
                try {
                  "function" == typeof d3 && a.u.G(function() {
                    var a2 = d3(b2, r2(f3), J2, x2.$data, x2);
                    if (a2 && a2.controlsDescendantBindings) {
                      if (u2 !== n) throw Error("Multiple bindings (" + u2 + " and " + f3 + ") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");
                      u2 = f3;
                    }
                  }), "function" == typeof e2 && a.$(function() {
                    e2(b2, r2(f3), J2, x2.$data, x2);
                  }, null, { l: b2 });
                } catch (k3) {
                  throw k3.message = 'Unable to process binding "' + f3 + ": " + g2[f3] + '"\nMessage: ' + k3.message, k3;
                }
              });
            }
            f2 = u2 === n;
            return { shouldBindDescendants: f2, bindingContextForDescendants: f2 && x2 };
          }
          function q(b2, c2) {
            return b2 && b2 instanceof a.fa ? b2 : new a.fa(b2, n, n, c2);
          }
          var t = a.a.Da("_subscribable"), x = a.a.Da("_ancestorBindingInfo"), B = a.a.Da("_dataDependency");
          a.c = {};
          var u = { script: true, textarea: true, template: true };
          a.getBindingHandler = function(b2) {
            return a.c[b2];
          };
          var J = {};
          a.fa = function(b2, c2, d2, e2, f2) {
            function k2() {
              var b3 = p2 ? h2() : h2, f3 = a.a.f(b3);
              c2 ? (a.a.extend(l2, c2), x in c2 && (l2[x] = c2[x])) : (l2.$parents = [], l2.$root = f3, l2.ko = a);
              l2[t] = q2;
              g2 ? f3 = l2.$data : (l2.$rawData = b3, l2.$data = f3);
              d2 && (l2[d2] = f3);
              e2 && e2(l2, c2, f3);
              if (c2 && c2[t] && !a.S.o().Vb(c2[t])) c2[t]();
              m2 && (l2[B] = m2);
              return l2.$data;
            }
            var l2 = this, g2 = b2 === J, h2 = g2 ? n : b2, p2 = "function" == typeof h2 && !a.O(h2), q2, m2 = f2 && f2.dataDependency;
            f2 && f2.exportDependencies ? k2() : (q2 = a.xb(k2), q2.v(), q2.ja() ? q2.equalityComparer = null : l2[t] = n);
          };
          a.fa.prototype.createChildContext = function(b2, c2, d2, e2) {
            !e2 && c2 && "object" == typeof c2 && (e2 = c2, c2 = e2.as, d2 = e2.extend);
            if (c2 && e2 && e2.noChildContext) {
              var f2 = "function" == typeof b2 && !a.O(b2);
              return new a.fa(J, this, null, function(a2) {
                d2 && d2(a2);
                a2[c2] = f2 ? b2() : b2;
              }, e2);
            }
            return new a.fa(
              b2,
              this,
              c2,
              function(a2, b3) {
                a2.$parentContext = b3;
                a2.$parent = b3.$data;
                a2.$parents = (b3.$parents || []).slice(0);
                a2.$parents.unshift(a2.$parent);
                d2 && d2(a2);
              },
              e2
            );
          };
          a.fa.prototype.extend = function(b2, c2) {
            return new a.fa(J, this, null, function(c3) {
              a.a.extend(c3, "function" == typeof b2 ? b2(c3) : b2);
            }, c2);
          };
          var z = a.a.g.Z();
          c.prototype.Tc = function() {
            this.Kb && this.Kb.N && this.Kb.N.sd(this.node);
          };
          c.prototype.sd = function(b2) {
            a.a.Pa(this.kb, b2);
            !this.kb.length && this.H && this.Cc();
          };
          c.prototype.Cc = function() {
            this.H = true;
            this.yc.N && !this.kb.length && (this.yc.N = null, a.a.K.yb(this.node, b), a.i.ma(this.node, a.i.pa), this.Tc());
          };
          a.i = { H: "childrenComplete", pa: "descendantsComplete", subscribe: function(b2, c2, d2, e2, f2) {
            var k2 = a.a.g.Ub(b2, z, {});
            k2.Fa || (k2.Fa = new a.T());
            f2 && f2.notifyImmediately && k2.Zb[c2] && a.u.G(d2, e2, [b2]);
            return k2.Fa.subscribe(d2, e2, c2);
          }, ma: function(b2, c2) {
            var d2 = a.a.g.get(b2, z);
            if (d2 && (d2.Zb[c2] = true, d2.Fa && d2.Fa.notifySubscribers(b2, c2), c2 == a.i.H)) {
              if (d2.N) d2.N.Cc();
              else if (d2.N === n && d2.Fa && d2.Fa.Wa(a.i.pa)) throw Error("descendantsComplete event not supported for bindings on this node");
            }
          }, Cb: function(b2, d2) {
            var e2 = a.a.g.Ub(b2, z, {});
            e2.N || (e2.N = new c(b2, e2, d2[x]));
            return d2[x] == e2 ? d2 : d2.extend(function(a2) {
              a2[x] = e2;
            });
          } };
          a.Td = function(b2) {
            return (b2 = a.a.g.get(b2, z)) && b2.context;
          };
          a.ib = function(b2, c2, d2) {
            1 === b2.nodeType && a.h.Sc(b2);
            return p(b2, c2, q(d2));
          };
          a.ld = function(b2, c2, d2) {
            d2 = q(d2);
            return a.ib(b2, g(c2, d2, b2), d2);
          };
          a.Oa = function(a2, b2) {
            1 !== b2.nodeType && 8 !== b2.nodeType || m(q(a2), b2);
          };
          a.vc = function(a2, b2, c2) {
            !v && A.jQuery && (v = A.jQuery);
            if (2 > arguments.length) {
              if (b2 = w.body, !b2) throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
            } else if (!b2 || 1 !== b2.nodeType && 8 !== b2.nodeType) throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");
            k(q(a2, c2), b2);
          };
          a.Dc = function(b2) {
            return !b2 || 1 !== b2.nodeType && 8 !== b2.nodeType ? n : a.Td(b2);
          };
          a.Ec = function(b2) {
            return (b2 = a.Dc(b2)) ? b2.$data : n;
          };
          a.b("bindingHandlers", a.c);
          a.b("bindingEvent", a.i);
          a.b("bindingEvent.subscribe", a.i.subscribe);
          a.b("bindingEvent.startPossiblyAsyncContentBinding", a.i.Cb);
          a.b("applyBindings", a.vc);
          a.b("applyBindingsToDescendants", a.Oa);
          a.b("applyBindingAccessorsToNode", a.ib);
          a.b("applyBindingsToNode", a.ld);
          a.b("contextFor", a.Dc);
          a.b("dataFor", a.Ec);
        })();
        (function(b) {
          function c(c2, e2) {
            var k = Object.prototype.hasOwnProperty.call(f, c2) ? f[c2] : b, l;
            k ? k.subscribe(e2) : (k = f[c2] = new a.T(), k.subscribe(e2), d(c2, function(b2, d2) {
              var e3 = !(!d2 || !d2.synchronous);
              g[c2] = { definition: b2, Gd: e3 };
              delete f[c2];
              l || e3 ? k.notifySubscribers(b2) : a.na.zb(function() {
                k.notifySubscribers(b2);
              });
            }), l = true);
          }
          function d(a2, b2) {
            e("getConfig", [a2], function(c2) {
              c2 ? e("loadComponent", [a2, c2], function(a3) {
                b2(
                  a3,
                  c2
                );
              }) : b2(null, null);
            });
          }
          function e(c2, d2, f2, l) {
            l || (l = a.j.loaders.slice(0));
            var g2 = l.shift();
            if (g2) {
              var q = g2[c2];
              if (q) {
                var t = false;
                if (q.apply(g2, d2.concat(function(a2) {
                  t ? f2(null) : null !== a2 ? f2(a2) : e(c2, d2, f2, l);
                })) !== b && (t = true, !g2.suppressLoaderExceptions)) throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");
              } else e(c2, d2, f2, l);
            } else f2(null);
          }
          var f = {}, g = {};
          a.j = { get: function(d2, e2) {
            var f2 = Object.prototype.hasOwnProperty.call(g, d2) ? g[d2] : b;
            f2 ? f2.Gd ? a.u.G(function() {
              e2(f2.definition);
            }) : a.na.zb(function() {
              e2(f2.definition);
            }) : c(d2, e2);
          }, Bc: function(a2) {
            delete g[a2];
          }, oc: e };
          a.j.loaders = [];
          a.b("components", a.j);
          a.b("components.get", a.j.get);
          a.b("components.clearCachedDefinition", a.j.Bc);
        })();
        (function() {
          function b(b2, c2, d2, e2) {
            function g2() {
              0 === --B && e2(h2);
            }
            var h2 = {}, B = 2, u = d2.template;
            d2 = d2.viewModel;
            u ? f(c2, u, function(c3) {
              a.j.oc("loadTemplate", [b2, c3], function(a2) {
                h2.template = a2;
                g2();
              });
            }) : g2();
            d2 ? f(c2, d2, function(c3) {
              a.j.oc("loadViewModel", [b2, c3], function(a2) {
                h2[m] = a2;
                g2();
              });
            }) : g2();
          }
          function c(a2, b2, d2) {
            if ("function" === typeof b2) d2(function(a3) {
              return new b2(a3);
            });
            else if ("function" === typeof b2[m]) d2(b2[m]);
            else if ("instance" in b2) {
              var e2 = b2.instance;
              d2(function() {
                return e2;
              });
            } else "viewModel" in b2 ? c(a2, b2.viewModel, d2) : a2("Unknown viewModel value: " + b2);
          }
          function d(b2) {
            switch (a.a.R(b2)) {
              case "script":
                return a.a.ua(b2.text);
              case "textarea":
                return a.a.ua(b2.value);
              case "template":
                if (e(b2.content)) return a.a.Ca(b2.content.childNodes);
            }
            return a.a.Ca(b2.childNodes);
          }
          function e(a2) {
            return A.DocumentFragment ? a2 instanceof DocumentFragment : a2 && 11 === a2.nodeType;
          }
          function f(a2, b2, c2) {
            "string" === typeof b2.require ? T || A.require ? (T || A.require)([b2.require], function(a3) {
              a3 && "object" === typeof a3 && a3.Xd && a3["default"] && (a3 = a3["default"]);
              c2(a3);
            }) : a2("Uses require, but no AMD loader is present") : c2(b2);
          }
          function g(a2) {
            return function(b2) {
              throw Error("Component '" + a2 + "': " + b2);
            };
          }
          var h = {};
          a.j.register = function(b2, c2) {
            if (!c2) throw Error("Invalid configuration for " + b2);
            if (a.j.tb(b2)) throw Error("Component " + b2 + " is already registered");
            h[b2] = c2;
          };
          a.j.tb = function(a2) {
            return Object.prototype.hasOwnProperty.call(h, a2);
          };
          a.j.unregister = function(b2) {
            delete h[b2];
            a.j.Bc(b2);
          };
          a.j.Fc = { getConfig: function(b2, c2) {
            c2(a.j.tb(b2) ? h[b2] : null);
          }, loadComponent: function(a2, c2, d2) {
            var e2 = g(a2);
            f(e2, c2, function(c3) {
              b(a2, e2, c3, d2);
            });
          }, loadTemplate: function(b2, c2, f2) {
            b2 = g(b2);
            if ("string" === typeof c2) f2(a.a.ua(c2));
            else if (c2 instanceof Array) f2(c2);
            else if (e(c2)) f2(a.a.la(c2.childNodes));
            else if (c2.element) if (c2 = c2.element, A.HTMLElement ? c2 instanceof HTMLElement : c2 && c2.tagName && 1 === c2.nodeType) f2(d(c2));
            else if ("string" === typeof c2) {
              var h2 = w.getElementById(c2);
              h2 ? f2(d(h2)) : b2("Cannot find element with ID " + c2);
            } else b2("Unknown element type: " + c2);
            else b2("Unknown template value: " + c2);
          }, loadViewModel: function(a2, b2, d2) {
            c(g(a2), b2, d2);
          } };
          var m = "createViewModel";
          a.b("components.register", a.j.register);
          a.b("components.isRegistered", a.j.tb);
          a.b("components.unregister", a.j.unregister);
          a.b("components.defaultLoader", a.j.Fc);
          a.j.loaders.push(a.j.Fc);
          a.j.dd = h;
        })();
        (function() {
          function b(b2, e) {
            var f = b2.getAttribute("params");
            if (f) {
              var f = c.parseBindingsString(f, e, b2, { valueAccessors: true, bindingParams: true }), f = a.a.Ga(f, function(c2) {
                return a.o(c2, null, { l: b2 });
              }), g = a.a.Ga(
                f,
                function(c2) {
                  var e2 = c2.v();
                  return c2.ja() ? a.o({ read: function() {
                    return a.a.f(c2());
                  }, write: a.Za(e2) && function(a2) {
                    c2()(a2);
                  }, l: b2 }) : e2;
                }
              );
              Object.prototype.hasOwnProperty.call(g, "$raw") || (g.$raw = f);
              return g;
            }
            return { $raw: {} };
          }
          a.j.getComponentNameForNode = function(b2) {
            var c2 = a.a.R(b2);
            if (a.j.tb(c2) && (-1 != c2.indexOf("-") || "[object HTMLUnknownElement]" == "" + b2 || 8 >= a.a.W && b2.tagName === c2)) return c2;
          };
          a.j.tc = function(c2, e, f, g) {
            if (1 === e.nodeType) {
              var h = a.j.getComponentNameForNode(e);
              if (h) {
                c2 = c2 || {};
                if (c2.component) throw Error('Cannot use the "component" binding on a custom element matching a component');
                var m = { name: h, params: b(e, f) };
                c2.component = g ? function() {
                  return m;
                } : m;
              }
            }
            return c2;
          };
          var c = new a.ga();
          9 > a.a.W && (a.j.register = /* @__PURE__ */ (function(a2) {
            return function(b2) {
              return a2.apply(this, arguments);
            };
          })(a.j.register), w.createDocumentFragment = /* @__PURE__ */ (function(b2) {
            return function() {
              var c2 = b2(), f = a.j.dd, g;
              for (g in f) ;
              return c2;
            };
          })(w.createDocumentFragment));
        })();
        (function() {
          function b(b2, c2, d2) {
            c2 = c2.template;
            if (!c2) throw Error("Component '" + b2 + "' has no template");
            b2 = a.a.Ca(c2);
            a.h.va(d2, b2);
          }
          function c(a2, b2, c2) {
            var d2 = a2.createViewModel;
            return d2 ? d2.call(
              a2,
              b2,
              c2
            ) : b2;
          }
          var d = 0;
          a.c.component = { init: function(e, f, g, h, m) {
            function k() {
              var a2 = l && l.dispose;
              "function" === typeof a2 && a2.call(l);
              q && q.s();
              p = l = q = null;
            }
            var l, p, q, t = a.a.la(a.h.childNodes(e));
            a.h.Ea(e);
            a.a.K.za(e, k);
            a.o(function() {
              var g2 = a.a.f(f()), h2, u;
              "string" === typeof g2 ? h2 = g2 : (h2 = a.a.f(g2.name), u = a.a.f(g2.params));
              if (!h2) throw Error("No component name specified");
              var n2 = a.i.Cb(e, m), z = p = ++d;
              a.j.get(h2, function(d2) {
                if (p === z) {
                  k();
                  if (!d2) throw Error("Unknown component '" + h2 + "'");
                  b(h2, d2, e);
                  var f2 = c(d2, u, { element: e, templateNodes: t });
                  d2 = n2.createChildContext(f2, { extend: function(a2) {
                    a2.$component = f2;
                    a2.$componentTemplateNodes = t;
                  } });
                  f2 && f2.koDescendantsComplete && (q = a.i.subscribe(e, a.i.pa, f2.koDescendantsComplete, f2));
                  l = f2;
                  a.Oa(d2, e);
                }
              });
            }, null, { l: e });
            return { controlsDescendantBindings: true };
          } };
          a.h.ea.component = true;
        })();
        var V = { "class": "className", "for": "htmlFor" };
        a.c.attr = { update: function(b, c) {
          var d = a.a.f(c()) || {};
          a.a.P(d, function(c2, d2) {
            d2 = a.a.f(d2);
            var g = c2.indexOf(":"), g = "lookupNamespaceURI" in b && 0 < g && b.lookupNamespaceURI(c2.substr(0, g)), h = false === d2 || null === d2 || d2 === n;
            h ? g ? b.removeAttributeNS(g, c2) : b.removeAttribute(c2) : d2 = d2.toString();
            8 >= a.a.W && c2 in V ? (c2 = V[c2], h ? b.removeAttribute(c2) : b[c2] = d2) : h || (g ? b.setAttributeNS(g, c2, d2) : b.setAttribute(c2, d2));
            "name" === c2 && a.a.Yc(b, h ? "" : d2);
          });
        } };
        (function() {
          a.c.checked = { after: ["value", "attr"], init: function(b, c, d) {
            function e() {
              var e2 = b.checked, f2 = g();
              if (!a.S.Ya() && (e2 || !m && !a.S.qa())) {
                var k2 = a.u.G(c);
                if (l) {
                  var q2 = p ? k2.v() : k2, z = t;
                  t = f2;
                  z !== f2 ? e2 && (a.a.Na(q2, f2, true), a.a.Na(q2, z, false)) : a.a.Na(q2, f2, e2);
                  p && a.Za(k2) && k2(q2);
                } else h && (f2 === n ? f2 = e2 : e2 || (f2 = n)), a.m.eb(
                  k2,
                  d,
                  "checked",
                  f2,
                  true
                );
              }
            }
            function f() {
              var d2 = a.a.f(c()), e2 = g();
              l ? (b.checked = 0 <= a.a.A(d2, e2), t = e2) : b.checked = h && e2 === n ? !!d2 : g() === d2;
            }
            var g = a.xb(function() {
              if (d.has("checkedValue")) return a.a.f(d.get("checkedValue"));
              if (q) return d.has("value") ? a.a.f(d.get("value")) : b.value;
            }), h = "checkbox" == b.type, m = "radio" == b.type;
            if (h || m) {
              var k = c(), l = h && a.a.f(k) instanceof Array, p = !(l && k.push && k.splice), q = m || l, t = l ? g() : n;
              m && !b.name && a.c.uniqueName.init(b, function() {
                return true;
              });
              a.o(e, null, { l: b });
              a.a.B(b, "click", e);
              a.o(f, null, { l: b });
              k = n;
            }
          } };
          a.m.wa.checked = true;
          a.c.checkedValue = { update: function(b, c) {
            b.value = a.a.f(c());
          } };
        })();
        a.c["class"] = { update: function(b, c) {
          var d = a.a.Db(a.a.f(c()));
          a.a.Eb(b, b.__ko__cssValue, false);
          b.__ko__cssValue = d;
          a.a.Eb(b, d, true);
        } };
        a.c.css = { update: function(b, c) {
          var d = a.a.f(c());
          null !== d && "object" == typeof d ? a.a.P(d, function(c2, d2) {
            d2 = a.a.f(d2);
            a.a.Eb(b, c2, d2);
          }) : a.c["class"].update(b, c);
        } };
        a.c.enable = { update: function(b, c) {
          var d = a.a.f(c());
          d && b.disabled ? b.removeAttribute("disabled") : d || b.disabled || (b.disabled = true);
        } };
        a.c.disable = { update: function(b, c) {
          a.c.enable.update(b, function() {
            return !a.a.f(c());
          });
        } };
        a.c.event = { init: function(b, c, d, e, f) {
          var g = c() || {};
          a.a.P(g, function(g2) {
            "string" == typeof g2 && a.a.B(b, g2, function(b2) {
              var k, l = c()[g2];
              if (l) {
                try {
                  var p = a.a.la(arguments);
                  e = f.$data;
                  p.unshift(e);
                  k = l.apply(e, p);
                } finally {
                  true !== k && (b2.preventDefault ? b2.preventDefault() : b2.returnValue = false);
                }
                false === d.get(g2 + "Bubble") && (b2.cancelBubble = true, b2.stopPropagation && b2.stopPropagation());
              }
            });
          });
        } };
        a.c.foreach = { Rc: function(b) {
          return function() {
            var c = b(), d = a.a.bc(c);
            if (!d || "number" == typeof d.length) return { foreach: c, templateEngine: a.ba.Ma };
            a.a.f(c);
            return { foreach: d.data, as: d.as, noChildContext: d.noChildContext, includeDestroyed: d.includeDestroyed, afterAdd: d.afterAdd, beforeRemove: d.beforeRemove, afterRender: d.afterRender, beforeMove: d.beforeMove, afterMove: d.afterMove, templateEngine: a.ba.Ma };
          };
        }, init: function(b, c) {
          return a.c.template.init(b, a.c.foreach.Rc(c));
        }, update: function(b, c, d, e, f) {
          return a.c.template.update(b, a.c.foreach.Rc(c), d, e, f);
        } };
        a.m.Ra.foreach = false;
        a.h.ea.foreach = true;
        a.c.hasfocus = { init: function(b, c, d) {
          function e(e2) {
            b.__ko_hasfocusUpdating = true;
            var f2 = b.ownerDocument;
            if ("activeElement" in f2) {
              var g2;
              try {
                g2 = f2.activeElement;
              } catch (l) {
                g2 = f2.body;
              }
              e2 = g2 === b;
            }
            f2 = c();
            a.m.eb(f2, d, "hasfocus", e2, true);
            b.__ko_hasfocusLastValue = e2;
            b.__ko_hasfocusUpdating = false;
          }
          var f = e.bind(null, true), g = e.bind(null, false);
          a.a.B(b, "focus", f);
          a.a.B(b, "focusin", f);
          a.a.B(b, "blur", g);
          a.a.B(b, "focusout", g);
          b.__ko_hasfocusLastValue = false;
        }, update: function(b, c) {
          var d = !!a.a.f(c());
          b.__ko_hasfocusUpdating || b.__ko_hasfocusLastValue === d || (d ? b.focus() : b.blur(), !d && b.__ko_hasfocusLastValue && b.ownerDocument.body.focus(), a.u.G(a.a.Fb, null, [b, d ? "focusin" : "focusout"]));
        } };
        a.m.wa.hasfocus = true;
        a.c.hasFocus = a.c.hasfocus;
        a.m.wa.hasFocus = "hasfocus";
        a.c.html = { init: function() {
          return { controlsDescendantBindings: true };
        }, update: function(b, c) {
          a.a.fc(b, c());
        } };
        (function() {
          function b(b2, d, e) {
            a.c[b2] = { init: function(b3, c, h, m, k) {
              var l, p, q = {}, t, x, n2;
              if (d) {
                m = h.get("as");
                var u = h.get("noChildContext");
                n2 = !(m && u);
                q = { as: m, noChildContext: u, exportDependencies: n2 };
              }
              x = (t = "render" == h.get("completeOn")) || h.has(a.i.pa);
              a.o(function() {
                var h2 = a.a.f(c()), m2 = !e !== !h2, u2 = !p, r2;
                if (n2 || m2 !== l) {
                  x && (k = a.i.Cb(b3, k));
                  if (m2) {
                    if (!d || n2) q.dataDependency = a.S.o();
                    r2 = d ? k.createChildContext("function" == typeof h2 ? h2 : c, q) : a.S.qa() ? k.extend(null, q) : k;
                  }
                  u2 && a.S.qa() && (p = a.a.Ca(a.h.childNodes(b3), true));
                  m2 ? (u2 || a.h.va(b3, a.a.Ca(p)), a.Oa(r2, b3)) : (a.h.Ea(b3), t || a.i.ma(b3, a.i.H));
                  l = m2;
                }
              }, null, { l: b3 });
              return { controlsDescendantBindings: true };
            } };
            a.m.Ra[b2] = false;
            a.h.ea[b2] = true;
          }
          b("if");
          b("ifnot", false, true);
          b("with", true);
        })();
        a.c.let = { init: function(b, c, d, e, f) {
          c = f.extend(c);
          a.Oa(c, b);
          return { controlsDescendantBindings: true };
        } };
        a.h.ea.let = true;
        var Q = {};
        a.c.options = { init: function(b) {
          if ("select" !== a.a.R(b)) throw Error("options binding applies only to SELECT elements");
          for (; 0 < b.length; ) b.remove(0);
          return { controlsDescendantBindings: true };
        }, update: function(b, c, d) {
          function e() {
            return a.a.jb(b.options, function(a2) {
              return a2.selected;
            });
          }
          function f(a2, b2, c2) {
            var d2 = typeof b2;
            return "function" == d2 ? b2(a2) : "string" == d2 ? a2[b2] : c2;
          }
          function g(c2, d2) {
            if (x && l) a.i.ma(b, a.i.H);
            else if (t.length) {
              var e2 = 0 <= a.a.A(t, a.w.M(d2[0]));
              a.a.Zc(d2[0], e2);
              x && !e2 && a.u.G(a.a.Fb, null, [b, "change"]);
            }
          }
          var h = b.multiple, m = 0 != b.length && h ? b.scrollTop : null, k = a.a.f(c()), l = d.get("valueAllowUnset") && d.has("value"), p = d.get("optionsIncludeDestroyed");
          c = {};
          var q, t = [];
          l || (h ? t = a.a.Mb(e(), a.w.M) : 0 <= b.selectedIndex && t.push(a.w.M(b.options[b.selectedIndex])));
          k && ("undefined" == typeof k.length && (k = [k]), q = a.a.jb(k, function(b2) {
            return p || b2 === n || null === b2 || !a.a.f(b2._destroy);
          }), d.has("optionsCaption") && (k = a.a.f(d.get("optionsCaption")), null !== k && k !== n && q.unshift(Q)));
          var x = false;
          c.beforeRemove = function(a2) {
            b.removeChild(a2);
          };
          k = g;
          d.has("optionsAfterRender") && "function" == typeof d.get("optionsAfterRender") && (k = function(b2, c2) {
            g(0, c2);
            a.u.G(d.get("optionsAfterRender"), null, [c2[0], b2 !== Q ? b2 : n]);
          });
          a.a.ec(b, q, function(c2, e2, g2) {
            g2.length && (t = !l && g2[0].selected ? [a.w.M(g2[0])] : [], x = true);
            e2 = b.ownerDocument.createElement("option");
            c2 === Q ? (a.a.Bb(e2, d.get("optionsCaption")), a.w.cb(e2, n)) : (g2 = f(c2, d.get("optionsValue"), c2), a.w.cb(e2, a.a.f(g2)), c2 = f(c2, d.get("optionsText"), g2), a.a.Bb(e2, c2));
            return [e2];
          }, c, k);
          if (!l) {
            var B;
            h ? B = t.length && e().length < t.length : B = t.length && 0 <= b.selectedIndex ? a.w.M(b.options[b.selectedIndex]) !== t[0] : t.length || 0 <= b.selectedIndex;
            B && a.u.G(a.a.Fb, null, [b, "change"]);
          }
          (l || a.S.Ya()) && a.i.ma(b, a.i.H);
          a.a.wd(b);
          m && 20 < Math.abs(m - b.scrollTop) && (b.scrollTop = m);
        } };
        a.c.options.$b = a.a.g.Z();
        a.c.selectedOptions = { init: function(b, c, d) {
          function e() {
            var e2 = c(), f2 = [];
            a.a.D(b.getElementsByTagName("option"), function(b2) {
              b2.selected && f2.push(a.w.M(b2));
            });
            a.m.eb(
              e2,
              d,
              "selectedOptions",
              f2
            );
          }
          function f() {
            var d2 = a.a.f(c()), e2 = b.scrollTop;
            d2 && "number" == typeof d2.length && a.a.D(b.getElementsByTagName("option"), function(b2) {
              var c2 = 0 <= a.a.A(d2, a.w.M(b2));
              b2.selected != c2 && a.a.Zc(b2, c2);
            });
            b.scrollTop = e2;
          }
          if ("select" != a.a.R(b)) throw Error("selectedOptions binding applies only to SELECT elements");
          var g;
          a.i.subscribe(b, a.i.H, function() {
            g ? e() : (a.a.B(b, "change", e), g = a.o(f, null, { l: b }));
          }, null, { notifyImmediately: true });
        }, update: function() {
        } };
        a.m.wa.selectedOptions = true;
        a.c.style = { update: function(b, c) {
          var d = a.a.f(c() || {});
          a.a.P(d, function(c2, d2) {
            d2 = a.a.f(d2);
            if (null === d2 || d2 === n || false === d2) d2 = "";
            if (v) v(b).css(c2, d2);
            else if (/^--/.test(c2)) b.style.setProperty(c2, d2);
            else {
              c2 = c2.replace(/-(\w)/g, function(a2, b2) {
                return b2.toUpperCase();
              });
              var g = b.style[c2];
              b.style[c2] = d2;
              d2 === g || b.style[c2] != g || isNaN(d2) || (b.style[c2] = d2 + "px");
            }
          });
        } };
        a.c.submit = { init: function(b, c, d, e, f) {
          if ("function" != typeof c()) throw Error("The value for a submit binding must be a function");
          a.a.B(b, "submit", function(a2) {
            var d2, e2 = c();
            try {
              d2 = e2.call(f.$data, b);
            } finally {
              true !== d2 && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false);
            }
          });
        } };
        a.c.text = { init: function() {
          return { controlsDescendantBindings: true };
        }, update: function(b, c) {
          a.a.Bb(b, c());
        } };
        a.h.ea.text = true;
        (function() {
          if (A && A.navigator) {
            var b = function(a2) {
              if (a2) return parseFloat(a2[1]);
            }, c = A.navigator.userAgent, d, e, f, g, h;
            (d = A.opera && A.opera.version && parseInt(A.opera.version())) || (h = b(c.match(/Edge\/([^ ]+)$/))) || b(c.match(/Chrome\/([^ ]+)/)) || (e = b(c.match(/Version\/([^ ]+) Safari/))) || (f = b(c.match(/Firefox\/([^ ]+)/))) || (g = a.a.W || b(c.match(/MSIE ([^ ]+)/))) || (g = b(c.match(/rv:([^ )]+)/)));
          }
          if (8 <= g && 10 > g) var m = a.a.g.Z(), k = a.a.g.Z(), l = function(b2) {
            var c2 = this.activeElement;
            (c2 = c2 && a.a.g.get(c2, k)) && c2(b2);
          }, p = function(b2, c2) {
            var d2 = b2.ownerDocument;
            a.a.g.get(d2, m) || (a.a.g.set(d2, m, true), a.a.B(d2, "selectionchange", l));
            a.a.g.set(b2, k, c2);
          };
          a.c.textInput = { init: function(b2, c2, k2) {
            function l2(c3, d2) {
              a.a.B(b2, c3, d2);
            }
            function m2() {
              var d2 = a.a.f(c2());
              if (null === d2 || d2 === n) d2 = "";
              L !== n && d2 === L ? a.a.setTimeout(m2, 4) : b2.value !== d2 && (y = true, b2.value = d2, y = false, v2 = b2.value);
            }
            function r2() {
              w2 || (L = b2.value, w2 = a.a.setTimeout(
                z,
                4
              ));
            }
            function z() {
              clearTimeout(w2);
              L = w2 = n;
              var d2 = b2.value;
              v2 !== d2 && (v2 = d2, a.m.eb(c2(), k2, "textInput", d2));
            }
            var v2 = b2.value, w2, L, A2 = 9 == a.a.W ? r2 : z, y = false;
            g && l2("keypress", z);
            11 > g && l2("propertychange", function(a2) {
              y || "value" !== a2.propertyName || A2(a2);
            });
            8 == g && (l2("keyup", z), l2("keydown", z));
            p && (p(b2, A2), l2("dragend", r2));
            (!g || 9 <= g) && l2("input", A2);
            5 > e && "textarea" === a.a.R(b2) ? (l2("keydown", r2), l2("paste", r2), l2("cut", r2)) : 11 > d ? l2("keydown", r2) : 4 > f ? (l2("DOMAutoComplete", z), l2("dragdrop", z), l2("drop", z)) : h && "number" === b2.type && l2("keydown", r2);
            l2(
              "change",
              z
            );
            l2("blur", z);
            a.o(m2, null, { l: b2 });
          } };
          a.m.wa.textInput = true;
          a.c.textinput = { preprocess: function(a2, b2, c2) {
            c2("textInput", a2);
          } };
        })();
        a.c.uniqueName = { init: function(b, c) {
          if (c()) {
            var d = "ko_unique_" + ++a.c.uniqueName.rd;
            a.a.Yc(b, d);
          }
        } };
        a.c.uniqueName.rd = 0;
        a.c.using = { init: function(b, c, d, e, f) {
          var g;
          d.has("as") && (g = { as: d.get("as"), noChildContext: d.get("noChildContext") });
          c = f.createChildContext(c, g);
          a.Oa(c, b);
          return { controlsDescendantBindings: true };
        } };
        a.h.ea.using = true;
        a.c.value = { init: function(b, c, d) {
          var e = a.a.R(b), f = "input" == e;
          if (!f || "checkbox" != b.type && "radio" != b.type) {
            var g = [], h = d.get("valueUpdate"), m = false, k = null;
            h && ("string" == typeof h ? g = [h] : g = a.a.wc(h), a.a.Pa(g, "change"));
            var l = function() {
              k = null;
              m = false;
              var e2 = c(), f2 = a.w.M(b);
              a.m.eb(e2, d, "value", f2);
            };
            !a.a.W || !f || "text" != b.type || "off" == b.autocomplete || b.form && "off" == b.form.autocomplete || -1 != a.a.A(g, "propertychange") || (a.a.B(b, "propertychange", function() {
              m = true;
            }), a.a.B(b, "focus", function() {
              m = false;
            }), a.a.B(b, "blur", function() {
              m && l();
            }));
            a.a.D(g, function(c2) {
              var d2 = l;
              a.a.Ud(c2, "after") && (d2 = function() {
                k = a.w.M(b);
                a.a.setTimeout(l, 0);
              }, c2 = c2.substring(5));
              a.a.B(b, c2, d2);
            });
            var p;
            p = f && "file" == b.type ? function() {
              var d2 = a.a.f(c());
              null === d2 || d2 === n || "" === d2 ? b.value = "" : a.u.G(l);
            } : function() {
              var f2 = a.a.f(c()), g2 = a.w.M(b);
              if (null !== k && f2 === k) a.a.setTimeout(p, 0);
              else if (f2 !== g2 || g2 === n) "select" === e ? (g2 = d.get("valueAllowUnset"), a.w.cb(b, f2, g2), g2 || f2 === a.w.M(b) || a.u.G(l)) : a.w.cb(b, f2);
            };
            if ("select" === e) {
              var q;
              a.i.subscribe(
                b,
                a.i.H,
                function() {
                  q ? d.get("valueAllowUnset") ? p() : l() : (a.a.B(b, "change", l), q = a.o(p, null, { l: b }));
                },
                null,
                { notifyImmediately: true }
              );
            } else a.a.B(b, "change", l), a.o(p, null, { l: b });
          } else a.ib(b, { checkedValue: c });
        }, update: function() {
        } };
        a.m.wa.value = true;
        a.c.visible = { update: function(b, c) {
          var d = a.a.f(c()), e = "none" != b.style.display;
          d && !e ? b.style.display = "" : !d && e && (b.style.display = "none");
        } };
        a.c.hidden = { update: function(b, c) {
          a.c.visible.update(b, function() {
            return !a.a.f(c());
          });
        } };
        (function(b) {
          a.c[b] = { init: function(c, d, e, f, g) {
            return a.c.event.init.call(this, c, function() {
              var a2 = {};
              a2[b] = d();
              return a2;
            }, e, f, g);
          } };
        })("click");
        a.ca = function() {
        };
        a.ca.prototype.renderTemplateSource = function() {
          throw Error("Override renderTemplateSource");
        };
        a.ca.prototype.createJavaScriptEvaluatorBlock = function() {
          throw Error("Override createJavaScriptEvaluatorBlock");
        };
        a.ca.prototype.makeTemplateSource = function(b, c) {
          if ("string" == typeof b) {
            c = c || w;
            var d = c.getElementById(b);
            if (!d) throw Error("Cannot find template with ID " + b);
            return new a.C.F(d);
          }
          if (1 == b.nodeType || 8 == b.nodeType) return new a.C.ia(b);
          throw Error("Unknown template type: " + b);
        };
        a.ca.prototype.renderTemplate = function(a2, c, d, e) {
          a2 = this.makeTemplateSource(a2, e);
          return this.renderTemplateSource(a2, c, d, e);
        };
        a.ca.prototype.isTemplateRewritten = function(a2, c) {
          return false === this.allowTemplateRewriting ? true : this.makeTemplateSource(a2, c).data("isRewritten");
        };
        a.ca.prototype.rewriteTemplate = function(a2, c, d) {
          a2 = this.makeTemplateSource(a2, d);
          c = c(a2.text());
          a2.text(c);
          a2.data("isRewritten", true);
        };
        a.b("templateEngine", a.ca);
        a.kc = /* @__PURE__ */ (function() {
          function b(b2, c2, d2, h) {
            b2 = a.m.ac(b2);
            for (var m = a.m.Ra, k = 0; k < b2.length; k++) {
              var l = b2[k].key;
              if (Object.prototype.hasOwnProperty.call(
                m,
                l
              )) {
                var p = m[l];
                if ("function" === typeof p) {
                  if (l = p(b2[k].value)) throw Error(l);
                } else if (!p) throw Error("This template engine does not support the '" + l + "' binding within its templates");
              }
            }
            d2 = "ko.__tr_ambtns(function($context,$element){return(function(){return{ " + a.m.vb(b2, { valueAccessors: true }) + " } })()},'" + d2.toLowerCase() + "')";
            return h.createJavaScriptEvaluatorBlock(d2) + c2;
          }
          var c = /(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi, d = /\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;
          return { xd: function(b2, c2, d2) {
            c2.isTemplateRewritten(b2, d2) || c2.rewriteTemplate(b2, function(b3) {
              return a.kc.Ld(b3, c2);
            }, d2);
          }, Ld: function(a2, f) {
            return a2.replace(c, function(a3, c2, d2, e, l) {
              return b(l, c2, d2, f);
            }).replace(d, function(a3, c2) {
              return b(c2, "<!-- ko -->", "#comment", f);
            });
          }, md: function(b2, c2) {
            return a.aa.Xb(function(d2, h) {
              var m = d2.nextSibling;
              m && m.nodeName.toLowerCase() === c2 && a.ib(m, b2, h);
            });
          } };
        })();
        a.b("__tr_ambtns", a.kc.md);
        (function() {
          a.C = {};
          a.C.F = function(b2) {
            if (this.F = b2) {
              var c2 = a.a.R(b2);
              this.ab = "script" === c2 ? 1 : "textarea" === c2 ? 2 : "template" == c2 && b2.content && 11 === b2.content.nodeType ? 3 : 4;
            }
          };
          a.C.F.prototype.text = function() {
            var b2 = 1 === this.ab ? "text" : 2 === this.ab ? "value" : "innerHTML";
            if (0 == arguments.length) return this.F[b2];
            var c2 = arguments[0];
            "innerHTML" === b2 ? a.a.fc(this.F, c2) : this.F[b2] = c2;
          };
          var b = a.a.g.Z() + "_";
          a.C.F.prototype.data = function(c2) {
            if (1 === arguments.length) return a.a.g.get(this.F, b + c2);
            a.a.g.set(this.F, b + c2, arguments[1]);
          };
          var c = a.a.g.Z();
          a.C.F.prototype.nodes = function() {
            var b2 = this.F;
            if (0 == arguments.length) {
              var e = a.a.g.get(b2, c) || {}, f = e.lb || (3 === this.ab ? b2.content : 4 === this.ab ? b2 : n);
              if (!f || e.jd) {
                var g = this.text();
                g && g !== e.bb && (f = a.a.Md(g, b2.ownerDocument), a.a.g.set(b2, c, { lb: f, bb: g, jd: true }));
              }
              return f;
            }
            e = arguments[0];
            this.ab !== n && this.text("");
            a.a.g.set(b2, c, { lb: e });
          };
          a.C.ia = function(a2) {
            this.F = a2;
          };
          a.C.ia.prototype = new a.C.F();
          a.C.ia.prototype.constructor = a.C.ia;
          a.C.ia.prototype.text = function() {
            if (0 == arguments.length) {
              var b2 = a.a.g.get(this.F, c) || {};
              b2.bb === n && b2.lb && (b2.bb = b2.lb.innerHTML);
              return b2.bb;
            }
            a.a.g.set(
              this.F,
              c,
              { bb: arguments[0] }
            );
          };
          a.b("templateSources", a.C);
          a.b("templateSources.domElement", a.C.F);
          a.b("templateSources.anonymousTemplate", a.C.ia);
        })();
        (function() {
          function b(b2, c2, d2) {
            var e2;
            for (c2 = a.h.nextSibling(c2); b2 && (e2 = b2) !== c2; ) b2 = a.h.nextSibling(e2), d2(e2, b2);
          }
          function c(c2, d2) {
            if (c2.length) {
              var e2 = c2[0], f2 = c2[c2.length - 1], g2 = e2.parentNode, h2 = a.ga.instance, m2 = h2.preprocessNode;
              if (m2) {
                b(e2, f2, function(a2, b2) {
                  var c3 = a2.previousSibling, d3 = m2.call(h2, a2);
                  d3 && (a2 === e2 && (e2 = d3[0] || b2), a2 === f2 && (f2 = d3[d3.length - 1] || c3));
                });
                c2.length = 0;
                if (!e2) return;
                e2 === f2 ? c2.push(e2) : (c2.push(e2, f2), a.a.Ua(c2, g2));
              }
              b(e2, f2, function(b2) {
                1 !== b2.nodeType && 8 !== b2.nodeType || a.vc(d2, b2);
              });
              b(e2, f2, function(b2) {
                1 !== b2.nodeType && 8 !== b2.nodeType || a.aa.cd(b2, [d2]);
              });
              a.a.Ua(c2, g2);
            }
          }
          function d(a2) {
            return a2.nodeType ? a2 : 0 < a2.length ? a2[0] : null;
          }
          function e(b2, e2, f2, h2, m2) {
            m2 = m2 || {};
            var n2 = (b2 && d(b2) || f2 || {}).ownerDocument, B = m2.templateEngine || g;
            a.kc.xd(f2, B, n2);
            f2 = B.renderTemplate(f2, h2, m2, n2);
            if ("number" != typeof f2.length || 0 < f2.length && "number" != typeof f2[0].nodeType) throw Error("Template engine must return an array of DOM nodes");
            n2 = false;
            switch (e2) {
              case "replaceChildren":
                a.h.va(
                  b2,
                  f2
                );
                n2 = true;
                break;
              case "replaceNode":
                a.a.Xc(b2, f2);
                n2 = true;
                break;
              case "ignoreTargetNode":
                break;
              default:
                throw Error("Unknown renderMode: " + e2);
            }
            n2 && (c(f2, h2), m2.afterRender && a.u.G(m2.afterRender, null, [f2, h2[m2.as || "$data"]]), "replaceChildren" == e2 && a.i.ma(b2, a.i.H));
            return f2;
          }
          function f(b2, c2, d2) {
            return a.O(b2) ? b2() : "function" === typeof b2 ? b2(c2, d2) : b2;
          }
          var g;
          a.gc = function(b2) {
            if (b2 != n && !(b2 instanceof a.ca)) throw Error("templateEngine must inherit from ko.templateEngine");
            g = b2;
          };
          a.dc = function(b2, c2, h2, m2, t) {
            h2 = h2 || {};
            if ((h2.templateEngine || g) == n) throw Error("Set a template engine before calling renderTemplate");
            t = t || "replaceChildren";
            if (m2) {
              var x = d(m2);
              return a.$(function() {
                var g2 = c2 && c2 instanceof a.fa ? c2 : new a.fa(c2, null, null, null, { exportDependencies: true }), n2 = f(b2, g2.$data, g2), g2 = e(m2, t, n2, g2, h2);
                "replaceNode" == t && (m2 = g2, x = d(m2));
              }, null, { Sa: function() {
                return !x || !a.a.Sb(x);
              }, l: x && "replaceNode" == t ? x.parentNode : x });
            }
            return a.aa.Xb(function(d2) {
              a.dc(b2, c2, h2, d2, "replaceNode");
            });
          };
          a.Qd = function(b2, d2, g2, h2, m2) {
            function x(b3, c2) {
              a.u.G(a.a.ec, null, [h2, b3, u, g2, r2, c2]);
              a.i.ma(h2, a.i.H);
            }
            function r2(a2, b3) {
              c(b3, v2);
              g2.afterRender && g2.afterRender(b3, a2);
              v2 = null;
            }
            function u(a2, c2) {
              v2 = m2.createChildContext(a2, { as: z, noChildContext: g2.noChildContext, extend: function(a3) {
                a3.$index = c2;
                z && (a3[z + "Index"] = c2);
              } });
              var d3 = f(b2, a2, v2);
              return e(h2, "ignoreTargetNode", d3, v2, g2);
            }
            var v2, z = g2.as, w2 = false === g2.includeDestroyed || a.options.foreachHidesDestroyed && !g2.includeDestroyed;
            if (w2 || g2.beforeRemove || !a.Pc(d2)) return a.$(function() {
              var b3 = a.a.f(d2) || [];
              "undefined" == typeof b3.length && (b3 = [b3]);
              w2 && (b3 = a.a.jb(b3, function(b4) {
                return b4 === n || null === b4 || !a.a.f(b4._destroy);
              }));
              x(b3);
            }, null, { l: h2 });
            x(d2.v());
            var A2 = d2.subscribe(function(a2) {
              x(d2(), a2);
            }, null, "arrayChange");
            A2.l(h2);
            return A2;
          };
          var h = a.a.g.Z(), m = a.a.g.Z();
          a.c.template = { init: function(b2, c2) {
            var d2 = a.a.f(c2());
            if ("string" == typeof d2 || "name" in d2) a.h.Ea(b2);
            else if ("nodes" in d2) {
              d2 = d2.nodes || [];
              if (a.O(d2)) throw Error('The "nodes" option must be a plain, non-observable array.');
              var e2 = d2[0] && d2[0].parentNode;
              e2 && a.a.g.get(e2, m) || (e2 = a.a.Yb(d2), a.a.g.set(e2, m, true));
              new a.C.ia(b2).nodes(e2);
            } else if (d2 = a.h.childNodes(b2), 0 < d2.length) e2 = a.a.Yb(d2), new a.C.ia(b2).nodes(e2);
            else throw Error("Anonymous template defined, but no template content was provided");
            return { controlsDescendantBindings: true };
          }, update: function(b2, c2, d2, e2, f2) {
            var g2 = c2();
            c2 = a.a.f(g2);
            d2 = true;
            e2 = null;
            "string" == typeof c2 ? c2 = {} : (g2 = "name" in c2 ? c2.name : b2, "if" in c2 && (d2 = a.a.f(c2["if"])), d2 && "ifnot" in c2 && (d2 = !a.a.f(c2.ifnot)), d2 && !g2 && (d2 = false));
            "foreach" in c2 ? e2 = a.Qd(g2, d2 && c2.foreach || [], c2, b2, f2) : d2 ? (d2 = f2, "data" in c2 && (d2 = f2.createChildContext(c2.data, { as: c2.as, noChildContext: c2.noChildContext, exportDependencies: true })), e2 = a.dc(g2, d2, c2, b2)) : a.h.Ea(b2);
            f2 = e2;
            (c2 = a.a.g.get(b2, h)) && "function" == typeof c2.s && c2.s();
            a.a.g.set(b2, h, !f2 || f2.ja && !f2.ja() ? n : f2);
          } };
          a.m.Ra.template = function(b2) {
            b2 = a.m.ac(b2);
            return 1 == b2.length && b2[0].unknown || a.m.Id(b2, "name") ? null : "This template engine does not support anonymous templates nested within its templates";
          };
          a.h.ea.template = true;
        })();
        a.b("setTemplateEngine", a.gc);
        a.b("renderTemplate", a.dc);
        a.a.Kc = function(a2, c, d) {
          if (a2.length && c.length) {
            var e, f, g, h, m;
            for (e = f = 0; (!d || e < d) && (h = a2[f]); ++f) {
              for (g = 0; m = c[g]; ++g) if (h.value === m.value) {
                h.moved = m.index;
                m.moved = h.index;
                c.splice(g, 1);
                e = g = 0;
                break;
              }
              e += g;
            }
          }
        };
        a.a.Pb = /* @__PURE__ */ (function() {
          function b(b2, d, e, f, g) {
            var h = Math.min, m = Math.max, k = [], l, p = b2.length, q, n2 = d.length, r2 = n2 - p || 1, v2 = p + n2 + 1, u, w2, z;
            for (l = 0; l <= p; l++) for (w2 = u, k.push(u = []), z = h(n2, l + r2), q = m(0, l - 1); q <= z; q++) u[q] = q ? l ? b2[l - 1] === d[q - 1] ? w2[q - 1] : h(w2[q] || v2, u[q - 1] || v2) + 1 : q + 1 : l + 1;
            h = [];
            m = [];
            r2 = [];
            l = p;
            for (q = n2; l || q; ) n2 = k[l][q] - 1, q && n2 === k[l][q - 1] ? m.push(h[h.length] = { status: e, value: d[--q], index: q }) : l && n2 === k[l - 1][q] ? r2.push(h[h.length] = { status: f, value: b2[--l], index: l }) : (--q, --l, g.sparse || h.push({ status: "retained", value: d[q] }));
            a.a.Kc(r2, m, !g.dontLimitMoves && 10 * p);
            return h.reverse();
          }
          return function(a2, d, e) {
            e = "boolean" === typeof e ? { dontLimitMoves: e } : e || {};
            a2 = a2 || [];
            d = d || [];
            return a2.length < d.length ? b(a2, d, "added", "deleted", e) : b(d, a2, "deleted", "added", e);
          };
        })();
        a.b("utils.compareArrays", a.a.Pb);
        (function() {
          function b(b2, c2, d2, h, m) {
            var k = [], l = a.$(function() {
              var l2 = c2(d2, m, a.a.Ua(k, b2)) || [];
              0 < k.length && (a.a.Xc(k, l2), h && a.u.G(h, null, [d2, l2, m]));
              k.length = 0;
              a.a.Nb(k, l2);
            }, null, { l: b2, Sa: function() {
              return !a.a.kd(k);
            } });
            return { Y: k, $: l.ja() ? l : n };
          }
          var c = a.a.g.Z(), d = a.a.g.Z();
          a.a.ec = function(e, f, g, h, m, k) {
            function l(b2) {
              y = { Aa: b2, pb: a.ta(w2++) };
              v2.push(y);
              r2 || F2.push(y);
            }
            function p(b2) {
              y = t[b2];
              w2 !== y.pb.v() && D2.push(y);
              y.pb(w2++);
              a.a.Ua(y.Y, e);
              v2.push(y);
            }
            function q(b2, c2) {
              if (b2) for (var d2 = 0, e2 = c2.length; d2 < e2; d2++) a.a.D(c2[d2].Y, function(a2) {
                b2(a2, d2, c2[d2].Aa);
              });
            }
            f = f || [];
            "undefined" == typeof f.length && (f = [f]);
            h = h || {};
            var t = a.a.g.get(e, c), r2 = !t, v2 = [], u = 0, w2 = 0, z = [], A2 = [], C2 = [], D2 = [], F2 = [], y, I2 = 0;
            if (r2) a.a.D(f, l);
            else {
              if (!k || t && t._countWaitingForRemove) {
                var E = a.a.Mb(t, function(a2) {
                  return a2.Aa;
                });
                k = a.a.Pb(E, f, { dontLimitMoves: h.dontLimitMoves, sparse: true });
              }
              for (var E = 0, G2, H2, K2; G2 = k[E]; E++) switch (H2 = G2.moved, K2 = G2.index, G2.status) {
                case "deleted":
                  for (; u < K2; ) p(u++);
                  H2 === n && (y = t[u], y.$ && (y.$.s(), y.$ = n), a.a.Ua(y.Y, e).length && (h.beforeRemove && (v2.push(y), I2++, y.Aa === d ? y = null : C2.push(y)), y && z.push.apply(z, y.Y)));
                  u++;
                  break;
                case "added":
                  for (; w2 < K2; ) p(u++);
                  H2 !== n ? (A2.push(v2.length), p(H2)) : l(G2.value);
              }
              for (; w2 < f.length; ) p(u++);
              v2._countWaitingForRemove = I2;
            }
            a.a.g.set(e, c, v2);
            q(h.beforeMove, D2);
            a.a.D(
              z,
              h.beforeRemove ? a.oa : a.removeNode
            );
            var M, O, P;
            try {
              P = e.ownerDocument.activeElement;
            } catch (N2) {
            }
            if (A2.length) for (; (E = A2.shift()) != n; ) {
              y = v2[E];
              for (M = n; E; ) if ((O = v2[--E].Y) && O.length) {
                M = O[O.length - 1];
                break;
              }
              for (f = 0; u = y.Y[f]; M = u, f++) a.h.Wb(e, u, M);
            }
            for (E = 0; y = v2[E]; E++) {
              y.Y || a.a.extend(y, b(e, g, y.Aa, m, y.pb));
              for (f = 0; u = y.Y[f]; M = u, f++) a.h.Wb(e, u, M);
              !y.Ed && m && (m(y.Aa, y.Y, y.pb), y.Ed = true, M = y.Y[y.Y.length - 1]);
            }
            P && e.ownerDocument.activeElement != P && P.focus();
            q(h.beforeRemove, C2);
            for (E = 0; E < C2.length; ++E) C2[E].Aa = d;
            q(h.afterMove, D2);
            q(h.afterAdd, F2);
          };
        })();
        a.b("utils.setDomNodeChildrenFromArrayMapping", a.a.ec);
        a.ba = function() {
          this.allowTemplateRewriting = false;
        };
        a.ba.prototype = new a.ca();
        a.ba.prototype.constructor = a.ba;
        a.ba.prototype.renderTemplateSource = function(b, c, d, e) {
          if (c = (9 > a.a.W ? 0 : b.nodes) ? b.nodes() : null) return a.a.la(c.cloneNode(true).childNodes);
          b = b.text();
          return a.a.ua(b, e);
        };
        a.ba.Ma = new a.ba();
        a.gc(a.ba.Ma);
        a.b("nativeTemplateEngine", a.ba);
        (function() {
          a.$a = function() {
            var a2 = this.Hd = (function() {
              if (!v || !v.tmpl) return 0;
              try {
                if (0 <= v.tmpl.tag.tmpl.open.toString().indexOf("__")) return 2;
              } catch (a3) {
              }
              return 1;
            })();
            this.renderTemplateSource = function(b2, e, f, g) {
              g = g || w;
              f = f || {};
              if (2 > a2) throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");
              var h = b2.data("precompiled");
              h || (h = b2.text() || "", h = v.template(null, "{{ko_with $item.koBindingContext}}" + h + "{{/ko_with}}"), b2.data("precompiled", h));
              b2 = [e.$data];
              e = v.extend({ koBindingContext: e }, f.templateOptions);
              e = v.tmpl(h, b2, e);
              e.appendTo(g.createElement("div"));
              v.fragments = {};
              return e;
            };
            this.createJavaScriptEvaluatorBlock = function(a3) {
              return "{{ko_code ((function() { return " + a3 + " })()) }}";
            };
            this.addTemplate = function(a3, b2) {
              w.write("<script type='text/html' id='" + a3 + "'>" + b2 + "<\/script>");
            };
            0 < a2 && (v.tmpl.tag.ko_code = { open: "__.push($1 || '');" }, v.tmpl.tag.ko_with = { open: "with($1) {", close: "} " });
          };
          a.$a.prototype = new a.ca();
          a.$a.prototype.constructor = a.$a;
          var b = new a.$a();
          0 < b.Hd && a.gc(b);
          a.b("jqueryTmplTemplateEngine", a.$a);
        })();
      });
    })();
  })();
})();
var knockout = ko;
if (typeof window !== "undefined") {
  ko = window.ko;
  if (typeof oldValue !== "undefined") {
    window.ko = oldValue;
  } else {
    delete window.ko;
  }
} else {
  ko = global.ko;
  if (typeof oldValue !== "undefined") {
    global.ko = oldValue;
  } else {
    delete global.ko;
  }
}
var knockout_3_5_1_default = knockout;

// packages/widgets/Source/ThirdParty/knockout-es5.js
/**
 * @license
 * Knockout ES5 plugin - https://github.com/SteveSanderson/knockout-es5
 * Copyright (c) Steve Sanderson
 * MIT license
 */
var OBSERVABLES_PROPERTY = "__knockoutObservables";
var SUBSCRIBABLE_PROPERTY = "__knockoutSubscribable";
function track(obj, propertyNames) {
  if (!obj) {
    throw new Error("When calling ko.track, you must pass an object as the first parameter.");
  }
  var ko2 = this, allObservablesForObject = getAllObservablesForObject(obj, true);
  propertyNames = propertyNames || Object.getOwnPropertyNames(obj);
  propertyNames.forEach(function(propertyName) {
    if (propertyName === OBSERVABLES_PROPERTY || propertyName === SUBSCRIBABLE_PROPERTY) {
      return;
    }
    if (propertyName in allObservablesForObject) {
      return;
    }
    var origValue = obj[propertyName], isArray = origValue instanceof Array, observable = ko2.isObservable(origValue) ? origValue : isArray ? ko2.observableArray(origValue) : ko2.observable(origValue);
    Object.defineProperty(obj, propertyName, {
      configurable: true,
      enumerable: true,
      get: observable,
      set: ko2.isWriteableObservable(observable) ? observable : void 0
    });
    allObservablesForObject[propertyName] = observable;
    if (isArray) {
      notifyWhenPresentOrFutureArrayValuesMutate(ko2, observable);
    }
  });
  return obj;
}
function getAllObservablesForObject(obj, createIfNotDefined) {
  var result = obj[OBSERVABLES_PROPERTY];
  if (!result && createIfNotDefined) {
    result = {};
    Object.defineProperty(obj, OBSERVABLES_PROPERTY, {
      value: result
    });
  }
  return result;
}
function defineComputedProperty(obj, propertyName, evaluatorOrOptions) {
  var ko2 = this, computedOptions = { owner: obj, deferEvaluation: true };
  if (typeof evaluatorOrOptions === "function") {
    computedOptions.read = evaluatorOrOptions;
  } else {
    if ("value" in evaluatorOrOptions) {
      throw new Error('For ko.defineProperty, you must not specify a "value" for the property. You must provide a "get" function.');
    }
    if (typeof evaluatorOrOptions.get !== "function") {
      throw new Error('For ko.defineProperty, the third parameter must be either an evaluator function, or an options object containing a function called "get".');
    }
    computedOptions.read = evaluatorOrOptions.get;
    computedOptions.write = evaluatorOrOptions.set;
  }
  obj[propertyName] = ko2.computed(computedOptions);
  track.call(ko2, obj, [propertyName]);
  return obj;
}
function notifyWhenPresentOrFutureArrayValuesMutate(ko2, observable) {
  var watchingArraySubscription = null;
  ko2.computed(function() {
    if (watchingArraySubscription) {
      watchingArraySubscription.dispose();
      watchingArraySubscription = null;
    }
    var newArrayInstance = observable();
    if (newArrayInstance instanceof Array) {
      watchingArraySubscription = startWatchingArrayInstance(ko2, observable, newArrayInstance);
    }
  });
}
function startWatchingArrayInstance(ko2, observable, arrayInstance) {
  var subscribable = getSubscribableForArray(ko2, arrayInstance);
  return subscribable.subscribe(observable);
}
function getSubscribableForArray(ko2, arrayInstance) {
  var subscribable = arrayInstance[SUBSCRIBABLE_PROPERTY];
  if (!subscribable) {
    subscribable = new ko2.subscribable();
    Object.defineProperty(arrayInstance, SUBSCRIBABLE_PROPERTY, {
      value: subscribable
    });
    var notificationPauseSignal = {};
    wrapStandardArrayMutators(arrayInstance, subscribable, notificationPauseSignal);
    addKnockoutArrayMutators(ko2, arrayInstance, subscribable, notificationPauseSignal);
  }
  return subscribable;
}
function wrapStandardArrayMutators(arrayInstance, subscribable, notificationPauseSignal) {
  ["pop", "push", "reverse", "shift", "sort", "splice", "unshift"].forEach(function(fnName) {
    var origMutator = arrayInstance[fnName];
    arrayInstance[fnName] = function() {
      var result = origMutator.apply(this, arguments);
      if (notificationPauseSignal.pause !== true) {
        subscribable.notifySubscribers(this);
      }
      return result;
    };
  });
}
function addKnockoutArrayMutators(ko2, arrayInstance, subscribable, notificationPauseSignal) {
  ["remove", "removeAll", "destroy", "destroyAll", "replace"].forEach(function(fnName) {
    Object.defineProperty(arrayInstance, fnName, {
      enumerable: false,
      value: function() {
        var result;
        notificationPauseSignal.pause = true;
        try {
          result = ko2.observableArray.fn[fnName].apply(ko2.observableArray(arrayInstance), arguments);
        } finally {
          notificationPauseSignal.pause = false;
        }
        subscribable.notifySubscribers(arrayInstance);
        return result;
      }
    });
  });
}
function getObservable(obj, propertyName) {
  if (!obj) {
    return null;
  }
  var allObservablesForObject = getAllObservablesForObject(obj, false);
  return allObservablesForObject && allObservablesForObject[propertyName] || null;
}
function valueHasMutated(obj, propertyName) {
  var observable = getObservable(obj, propertyName);
  if (observable) {
    observable.valueHasMutated();
  }
}
function attachToKo(ko2) {
  ko2.track = track;
  ko2.getObservable = getObservable;
  ko2.valueHasMutated = valueHasMutated;
  ko2.defineProperty = defineComputedProperty;
}
var knockout_es5_default = {
  attachToKo
};

// packages/widgets/Source/SvgPathBindingHandler.js
var svgNS = "http://www.w3.org/2000/svg";
var svgClassName = "cesium-svgPath-svg";
var SvgPathBindingHandler = {
  /**
   * @function
   */
  register: function(knockout2) {
    knockout2.bindingHandlers.cesiumSvgPath = {
      init: function(element, valueAccessor) {
        const svg = document.createElementNS(svgNS, "svg:svg");
        svg.setAttribute("class", svgClassName);
        const pathElement = document.createElementNS(svgNS, "path");
        svg.appendChild(pathElement);
        knockout2.virtualElements.setDomNodeChildren(element, [svg]);
        knockout2.computed({
          read: function() {
            const value = knockout2.unwrap(valueAccessor());
            pathElement.setAttribute("d", knockout2.unwrap(value.path));
            const pathWidth = knockout2.unwrap(value.width);
            const pathHeight = knockout2.unwrap(value.height);
            svg.setAttribute("width", pathWidth);
            svg.setAttribute("height", pathHeight);
            svg.setAttribute("viewBox", `0 0 ${pathWidth} ${pathHeight}`);
            if (value.css) {
              svg.setAttribute(
                "class",
                `${svgClassName} ${knockout2.unwrap(value.css)}`
              );
            }
          },
          disposeWhenNodeIsRemoved: element
        });
        return {
          controlsDescendantBindings: true
        };
      }
    };
    knockout2.virtualElements.allowedBindings.cesiumSvgPath = true;
  }
};
var SvgPathBindingHandler_default = SvgPathBindingHandler;

// packages/widgets/Source/ThirdParty/knockout.js
knockout_es5_default.attachToKo(knockout_3_5_1_default);
SvgPathBindingHandler_default.register(knockout_3_5_1_default);
var knockout_default = knockout_3_5_1_default;

// packages/widgets/Source/ClockViewModel.js
function ClockViewModel(clock) {
  if (!defined(clock)) {
    clock = new Clock();
  }
  this._clock = clock;
  this._eventHelper = new EventHelper();
  this._eventHelper.add(clock.onTick, this.synchronize, this);
  this.systemTime = knockout_default.observable(JulianDate.now());
  this.systemTime.equalityComparer = JulianDate.equals;
  this.startTime = knockout_default.observable(clock.startTime);
  this.startTime.equalityComparer = JulianDate.equals;
  this.startTime.subscribe(function(value) {
    clock.startTime = value;
    this.synchronize();
  }, this);
  this.stopTime = knockout_default.observable(clock.stopTime);
  this.stopTime.equalityComparer = JulianDate.equals;
  this.stopTime.subscribe(function(value) {
    clock.stopTime = value;
    this.synchronize();
  }, this);
  this.currentTime = knockout_default.observable(clock.currentTime);
  this.currentTime.equalityComparer = JulianDate.equals;
  this.currentTime.subscribe(function(value) {
    clock.currentTime = value;
    this.synchronize();
  }, this);
  this.multiplier = knockout_default.observable(clock.multiplier);
  this.multiplier.subscribe(function(value) {
    clock.multiplier = value;
    this.synchronize();
  }, this);
  this.clockStep = knockout_default.observable(clock.clockStep);
  this.clockStep.subscribe(function(value) {
    clock.clockStep = value;
    this.synchronize();
  }, this);
  this.clockRange = knockout_default.observable(clock.clockRange);
  this.clockRange.subscribe(function(value) {
    clock.clockRange = value;
    this.synchronize();
  }, this);
  this.canAnimate = knockout_default.observable(clock.canAnimate);
  this.canAnimate.subscribe(function(value) {
    clock.canAnimate = value;
    this.synchronize();
  }, this);
  this.shouldAnimate = knockout_default.observable(clock.shouldAnimate);
  this.shouldAnimate.subscribe(function(value) {
    clock.shouldAnimate = value;
    this.synchronize();
  }, this);
  knockout_default.track(this, [
    "systemTime",
    "startTime",
    "stopTime",
    "currentTime",
    "multiplier",
    "clockStep",
    "clockRange",
    "canAnimate",
    "shouldAnimate"
  ]);
}
Object.defineProperties(ClockViewModel.prototype, {
  /**
   * Gets the underlying Clock.
   * @memberof ClockViewModel.prototype
   * @type {Clock}
   */
  clock: {
    get: function() {
      return this._clock;
    }
  }
});
ClockViewModel.prototype.synchronize = function() {
  const clock = this._clock;
  this.systemTime = JulianDate.now();
  this.startTime = clock.startTime;
  this.stopTime = clock.stopTime;
  this.currentTime = clock.currentTime;
  this.multiplier = clock.multiplier;
  this.clockStep = clock.clockStep;
  this.clockRange = clock.clockRange;
  this.canAnimate = clock.canAnimate;
  this.shouldAnimate = clock.shouldAnimate;
};
ClockViewModel.prototype.isDestroyed = function() {
  return false;
};
ClockViewModel.prototype.destroy = function() {
  this._eventHelper.removeAll();
  destroyObject(this);
};
var ClockViewModel_default = ClockViewModel;

// packages/widgets/Source/Command.js
import { DeveloperError } from "@cesium/engine";
function Command() {
  this.canExecute = void 0;
  this.beforeExecute = void 0;
  this.afterExecute = void 0;
  DeveloperError.throwInstantiationError();
}
var Command_default = Command;

// packages/widgets/Source/InspectorShared.js
import { Check, defined as defined2 } from "@cesium/engine";
var InspectorShared = {};
InspectorShared.createCheckbox = function(labelText, checkedBinding, enableBinding) {
  Check.typeOf.string("labelText", labelText);
  Check.typeOf.string("checkedBinding", checkedBinding);
  const checkboxContainer = document.createElement("div");
  const checkboxLabel = document.createElement("label");
  const checkboxInput = document.createElement("input");
  checkboxInput.type = "checkbox";
  let binding = `checked: ${checkedBinding}`;
  if (defined2(enableBinding)) {
    binding += `, enable: ${enableBinding}`;
  }
  checkboxInput.setAttribute("data-bind", binding);
  checkboxLabel.appendChild(checkboxInput);
  checkboxLabel.appendChild(document.createTextNode(labelText));
  checkboxContainer.appendChild(checkboxLabel);
  return checkboxContainer;
};
InspectorShared.createSection = function(panel, headerText, sectionVisibleBinding, toggleSectionVisibilityBinding) {
  Check.defined("panel", panel);
  Check.typeOf.string("headerText", headerText);
  Check.typeOf.string("sectionVisibleBinding", sectionVisibleBinding);
  Check.typeOf.string(
    "toggleSectionVisibilityBinding",
    toggleSectionVisibilityBinding
  );
  const section = document.createElement("div");
  section.className = "cesium-cesiumInspector-section";
  section.setAttribute(
    "data-bind",
    `css: { "cesium-cesiumInspector-section-collapsed": !${sectionVisibleBinding} }`
  );
  panel.appendChild(section);
  const sectionHeader = document.createElement("h3");
  sectionHeader.className = "cesium-cesiumInspector-sectionHeader";
  sectionHeader.appendChild(document.createTextNode(headerText));
  sectionHeader.setAttribute(
    "data-bind",
    `click: ${toggleSectionVisibilityBinding}`
  );
  section.appendChild(sectionHeader);
  const sectionContent = document.createElement("div");
  sectionContent.className = "cesium-cesiumInspector-sectionContent";
  section.appendChild(sectionContent);
  return sectionContent;
};
InspectorShared.createRangeInput = function(rangeText, sliderValueBinding, min, max, step, inputValueBinding) {
  Check.typeOf.string("rangeText", rangeText);
  Check.typeOf.string("sliderValueBinding", sliderValueBinding);
  Check.typeOf.number("min", min);
  Check.typeOf.number("max", max);
  inputValueBinding = inputValueBinding ?? sliderValueBinding;
  const input = document.createElement("input");
  input.setAttribute("data-bind", `value: ${inputValueBinding}`);
  input.type = "number";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.min = min;
  slider.max = max;
  slider.step = step ?? "any";
  slider.setAttribute(
    "data-bind",
    `valueUpdate: "input", value: ${sliderValueBinding}`
  );
  const wrapper = document.createElement("div");
  wrapper.appendChild(slider);
  const container = document.createElement("div");
  container.className = "cesium-cesiumInspector-slider";
  container.appendChild(document.createTextNode(rangeText));
  container.appendChild(input);
  container.appendChild(wrapper);
  return container;
};
InspectorShared.createRangeInputWithDynamicMinMax = function(rangeText, sliderValueBinding, step, inputValueBinding) {
  Check.typeOf.string("rangeText", rangeText);
  Check.typeOf.string("sliderValueBinding", sliderValueBinding);
  inputValueBinding = inputValueBinding ?? sliderValueBinding;
  const input = document.createElement("input");
  input.setAttribute("data-bind", `value: ${inputValueBinding}`);
  input.type = "number";
  const slider = document.createElement("input");
  slider.type = "range";
  slider.step = step ?? "any";
  slider.setAttribute(
    "data-bind",
    `valueUpdate: "input", value: ${sliderValueBinding}, attr: { min: ${sliderValueBinding}Min, max: ${sliderValueBinding}Max }`
  );
  const wrapper = document.createElement("div");
  wrapper.appendChild(slider);
  const container = document.createElement("div");
  container.className = "cesium-cesiumInspector-slider";
  container.appendChild(document.createTextNode(rangeText));
  container.appendChild(input);
  container.appendChild(wrapper);
  return container;
};
InspectorShared.createButton = function(buttonText, clickedBinding, activeBinding) {
  Check.typeOf.string("buttonText", buttonText);
  Check.typeOf.string("clickedBinding", clickedBinding);
  const button = document.createElement("button");
  button.type = "button";
  button.textContent = buttonText;
  button.className = "cesium-cesiumInspector-pickButton";
  let binding = `click: ${clickedBinding}`;
  if (defined2(activeBinding)) {
    binding += `, css: {"cesium-cesiumInspector-pickButtonHighlight" : ${activeBinding}}`;
  }
  button.setAttribute("data-bind", binding);
  return button;
};
var InspectorShared_default = InspectorShared;

// packages/widgets/Source/ToggleButtonViewModel.js
import { Frozen, defined as defined3, DeveloperError as DeveloperError2 } from "@cesium/engine";
function ToggleButtonViewModel(command, options) {
  if (!defined3(command)) {
    throw new DeveloperError2("command is required.");
  }
  this._command = command;
  options = options ?? Frozen.EMPTY_OBJECT;
  this.toggled = options.toggled ?? false;
  this.tooltip = options.tooltip ?? "";
  knockout_default.track(this, ["toggled", "tooltip"]);
}
Object.defineProperties(ToggleButtonViewModel.prototype, {
  /**
   * Gets the command which will be executed when the button is toggled.
   * @memberof ToggleButtonViewModel.prototype
   * @type {Command}
   */
  command: {
    get: function() {
      return this._command;
    }
  }
});
var ToggleButtonViewModel_default = ToggleButtonViewModel;

// packages/widgets/Source/createCommand.js
import { defined as defined4, DeveloperError as DeveloperError3, Event } from "@cesium/engine";
function createCommand(func, canExecute) {
  if (!defined4(func)) {
    throw new DeveloperError3("func is required.");
  }
  canExecute = canExecute ?? true;
  const beforeExecute = new Event();
  const afterExecute = new Event();
  function command() {
    if (!command.canExecute) {
      throw new DeveloperError3("Cannot execute command, canExecute is false.");
    }
    const commandInfo = {
      args: arguments,
      cancel: false
    };
    let result;
    beforeExecute.raiseEvent(commandInfo);
    if (!commandInfo.cancel) {
      result = func.apply(null, arguments);
      afterExecute.raiseEvent(result);
    }
    return result;
  }
  command.canExecute = canExecute;
  knockout_default.track(command, ["canExecute"]);
  Object.defineProperties(command, {
    beforeExecute: {
      value: beforeExecute
    },
    afterExecute: {
      value: afterExecute
    }
  });
  return command;
}
var createCommand_default = createCommand;

// packages/widgets/Source/subscribeAndEvaluate.js
function subscribeAndEvaluate(owner, observablePropertyName, callback, target, event) {
  callback.call(target, owner[observablePropertyName]);
  return knockout_default.getObservable(owner, observablePropertyName).subscribe(callback, target, event);
}
var subscribeAndEvaluate_default = subscribeAndEvaluate;

// packages/widgets/Source/Animation/Animation.js
import {
  Color,
  defined as defined5,
  destroyObject as destroyObject2,
  DeveloperError as DeveloperError4,
  getElement
} from "@cesium/engine";
var svgNS2 = "http://www.w3.org/2000/svg";
var xlinkNS = "http://www.w3.org/1999/xlink";
var widgetForDrag;
var gradientEnabledColor0 = Color.fromCssColorString(
  "rgba(247,250,255,0.384)"
);
var gradientEnabledColor1 = Color.fromCssColorString(
  "rgba(143,191,255,0.216)"
);
var gradientEnabledColor2 = Color.fromCssColorString(
  "rgba(153,197,255,0.098)"
);
var gradientEnabledColor3 = Color.fromCssColorString(
  "rgba(255,255,255,0.086)"
);
var gradientDisabledColor0 = Color.fromCssColorString(
  "rgba(255,255,255,0.267)"
);
var gradientDisabledColor1 = Color.fromCssColorString("rgba(255,255,255,0)");
var gradientKnobColor = Color.fromCssColorString("rgba(66,67,68,0.3)");
var gradientPointerColor = Color.fromCssColorString("rgba(0,0,0,0.5)");
function getElementColor(element) {
  return Color.fromCssColorString(
    window.getComputedStyle(element).getPropertyValue("color")
  );
}
var svgIconsById = {
  animation_pathReset: {
    tagName: "path",
    transform: "translate(16,16) scale(0.85) translate(-16,-16)",
    d: "M24.316,5.318,9.833,13.682,9.833,5.5,5.5,5.5,5.5,25.5,9.833,25.5,9.833,17.318,24.316,25.682z"
  },
  animation_pathPause: {
    tagName: "path",
    transform: "translate(16,16) scale(0.85) translate(-16,-16)",
    d: "M13,5.5,7.5,5.5,7.5,25.5,13,25.5zM24.5,5.5,19,5.5,19,25.5,24.5,25.5z"
  },
  animation_pathPlay: {
    tagName: "path",
    transform: "translate(16,16) scale(0.85) translate(-16,-16)",
    d: "M6.684,25.682L24.316,15.5L6.684,5.318V25.682z"
  },
  animation_pathPlayReverse: {
    tagName: "path",
    transform: "translate(16,16) scale(-0.85,0.85) translate(-16,-16)",
    d: "M6.684,25.682L24.316,15.5L6.684,5.318V25.682z"
  },
  animation_pathLoop: {
    tagName: "path",
    transform: "translate(16,16) scale(0.85) translate(-16,-16)",
    d: "M24.249,15.499c-0.009,4.832-3.918,8.741-8.75,8.75c-2.515,0-4.768-1.064-6.365-2.763l2.068-1.442l-7.901-3.703l0.744,8.694l2.193-1.529c2.244,2.594,5.562,4.242,9.26,4.242c6.767,0,12.249-5.482,12.249-12.249H24.249zM15.499,6.75c2.516,0,4.769,1.065,6.367,2.764l-2.068,1.443l7.901,3.701l-0.746-8.693l-2.192,1.529c-2.245-2.594-5.562-4.245-9.262-4.245C8.734,3.25,3.25,8.734,3.249,15.499H6.75C6.758,10.668,10.668,6.758,15.499,6.75z"
  },
  animation_pathClock: {
    tagName: "path",
    transform: "translate(16,16) scale(0.85) translate(-16,-15.5)",
    d: "M15.5,2.374C8.251,2.375,2.376,8.251,2.374,15.5C2.376,22.748,8.251,28.623,15.5,28.627c7.249-0.004,13.124-5.879,13.125-13.127C28.624,8.251,22.749,2.375,15.5,2.374zM15.5,25.623C9.909,25.615,5.385,21.09,5.375,15.5C5.385,9.909,9.909,5.384,15.5,5.374c5.59,0.01,10.115,4.535,10.124,10.125C25.615,21.09,21.091,25.615,15.5,25.623zM8.625,15.5c-0.001-0.552-0.448-0.999-1.001-1c-0.553,0-1,0.448-1,1c0,0.553,0.449,1,1,1C8.176,16.5,8.624,16.053,8.625,15.5zM8.179,18.572c-0.478,0.277-0.642,0.889-0.365,1.367c0.275,0.479,0.889,0.641,1.365,0.365c0.479-0.275,0.643-0.887,0.367-1.367C9.27,18.461,8.658,18.297,8.179,18.572zM9.18,10.696c-0.479-0.276-1.09-0.112-1.366,0.366s-0.111,1.09,0.365,1.366c0.479,0.276,1.09,0.113,1.367-0.366C9.821,11.584,9.657,10.973,9.18,10.696zM22.822,12.428c0.478-0.275,0.643-0.888,0.366-1.366c-0.275-0.478-0.89-0.642-1.366-0.366c-0.479,0.278-0.642,0.89-0.366,1.367C21.732,12.54,22.344,12.705,22.822,12.428zM12.062,21.455c-0.478-0.275-1.089-0.111-1.366,0.367c-0.275,0.479-0.111,1.09,0.366,1.365c0.478,0.277,1.091,0.111,1.365-0.365C12.704,22.344,12.54,21.732,12.062,21.455zM12.062,9.545c0.479-0.276,0.642-0.888,0.366-1.366c-0.276-0.478-0.888-0.642-1.366-0.366s-0.642,0.888-0.366,1.366C10.973,9.658,11.584,9.822,12.062,9.545zM22.823,18.572c-0.48-0.275-1.092-0.111-1.367,0.365c-0.275,0.479-0.112,1.092,0.367,1.367c0.477,0.275,1.089,0.113,1.365-0.365C23.464,19.461,23.3,18.848,22.823,18.572zM19.938,7.813c-0.477-0.276-1.091-0.111-1.365,0.366c-0.275,0.48-0.111,1.091,0.366,1.367s1.089,0.112,1.366-0.366C20.581,8.702,20.418,8.089,19.938,7.813zM23.378,14.5c-0.554,0.002-1.001,0.45-1.001,1c0.001,0.552,0.448,1,1.001,1c0.551,0,1-0.447,1-1C24.378,14.949,23.929,14.5,23.378,14.5zM15.501,6.624c-0.552,0-1,0.448-1,1l-0.466,7.343l-3.004,1.96c-0.478,0.277-0.642,0.889-0.365,1.365c0.275,0.479,0.889,0.643,1.365,0.367l3.305-1.676C15.39,16.99,15.444,17,15.501,17c0.828,0,1.5-0.671,1.5-1.5l-0.5-7.876C16.501,7.072,16.053,6.624,15.501,6.624zM15.501,22.377c-0.552,0-1,0.447-1,1s0.448,1,1,1s1-0.447,1-1S16.053,22.377,15.501,22.377zM18.939,21.455c-0.479,0.277-0.643,0.889-0.366,1.367c0.275,0.477,0.888,0.643,1.366,0.365c0.478-0.275,0.642-0.889,0.366-1.365C20.028,21.344,19.417,21.18,18.939,21.455z"
  },
  animation_pathWingButton: {
    tagName: "path",
    d: "m 4.5,0.5 c -2.216,0 -4,1.784 -4,4 l 0,24 c 0,2.216 1.784,4 4,4 l 13.71875,0 C 22.478584,27.272785 27.273681,22.511272 32.5,18.25 l 0,-13.75 c 0,-2.216 -1.784,-4 -4,-4 l -24,0 z"
  },
  animation_pathPointer: {
    tagName: "path",
    d: "M-15,-65,-15,-55,15,-55,15,-65,0,-95z"
  },
  animation_pathSwooshFX: {
    tagName: "path",
    d: "m 85,0 c 0,16.617 -4.813944,35.356 -13.131081,48.4508 h 6.099803 c 8.317138,-13.0948 13.13322,-28.5955 13.13322,-45.2124 0,-46.94483 -38.402714,-85.00262 -85.7743869,-85.00262 -1.0218522,0 -2.0373001,0.0241 -3.0506131,0.0589 45.958443,1.59437 82.723058,35.77285 82.723058,81.70532 z"
  }
};
function svgFromObject(obj) {
  const ele = document.createElementNS(svgNS2, obj.tagName);
  for (const field in obj) {
    if (obj.hasOwnProperty(field) && field !== "tagName") {
      if (field === "children") {
        const len = obj.children.length;
        for (let i = 0; i < len; ++i) {
          ele.appendChild(svgFromObject(obj.children[i]));
        }
      } else if (field.indexOf("xlink:") === 0) {
        ele.setAttributeNS(xlinkNS, field.substring(6), obj[field]);
      } else if (field === "textContent") {
        ele.textContent = obj[field];
      } else {
        ele.setAttribute(field, obj[field]);
      }
    }
  }
  return ele;
}
function svgText(x, y, msg) {
  const text = document.createElementNS(svgNS2, "text");
  text.setAttribute("x", x);
  text.setAttribute("y", y);
  text.setAttribute("class", "cesium-animation-svgText");
  const tspan = document.createElementNS(svgNS2, "tspan");
  tspan.textContent = msg;
  text.appendChild(tspan);
  return text;
}
function setShuttleRingPointer(shuttleRingPointer, knobOuter, angle) {
  shuttleRingPointer.setAttribute(
    "transform",
    `translate(100,100) rotate(${angle})`
  );
  knobOuter.setAttribute("transform", `rotate(${angle})`);
}
var makeColorStringScratch = new Color();
function makeColorString(background, gradient) {
  const gradientAlpha = gradient.alpha;
  const backgroundAlpha = 1 - gradientAlpha;
  makeColorStringScratch.red = background.red * backgroundAlpha + gradient.red * gradientAlpha;
  makeColorStringScratch.green = background.green * backgroundAlpha + gradient.green * gradientAlpha;
  makeColorStringScratch.blue = background.blue * backgroundAlpha + gradient.blue * gradientAlpha;
  return makeColorStringScratch.toCssColorString();
}
function rectButton(x, y, path) {
  const iconInfo = svgIconsById[path];
  const button = {
    tagName: "g",
    class: "cesium-animation-rectButton",
    transform: `translate(${x},${y})`,
    children: [
      {
        tagName: "rect",
        class: "cesium-animation-buttonGlow",
        width: 32,
        height: 32,
        rx: 2,
        ry: 2
      },
      {
        tagName: "rect",
        class: "cesium-animation-buttonMain",
        width: 32,
        height: 32,
        rx: 4,
        ry: 4
      },
      {
        class: "cesium-animation-buttonPath",
        id: path,
        tagName: iconInfo.tagName,
        transform: iconInfo.transform,
        d: iconInfo.d
      },
      {
        tagName: "title",
        textContent: ""
      }
    ]
  };
  return svgFromObject(button);
}
function wingButton(x, y, path) {
  const buttonIconInfo = svgIconsById[path];
  const wingIconInfo = svgIconsById["animation_pathWingButton"];
  const button = {
    tagName: "g",
    class: "cesium-animation-rectButton",
    transform: `translate(${x},${y})`,
    children: [
      {
        class: "cesium-animation-buttonGlow",
        id: "animation_pathWingButton",
        tagName: wingIconInfo.tagName,
        d: wingIconInfo.d
      },
      {
        class: "cesium-animation-buttonMain",
        id: "animation_pathWingButton",
        tagName: wingIconInfo.tagName,
        d: wingIconInfo.d
      },
      {
        class: "cesium-animation-buttonPath",
        id: path,
        tagName: buttonIconInfo.tagName,
        transform: buttonIconInfo.transform,
        d: buttonIconInfo.d
      },
      {
        tagName: "title",
        textContent: ""
      }
    ]
  };
  return svgFromObject(button);
}
function setShuttleRingFromMouseOrTouch(widget, e) {
  const viewModel = widget._viewModel;
  const shuttleRingDragging = viewModel.shuttleRingDragging;
  if (shuttleRingDragging && widgetForDrag !== widget) {
    return;
  }
  if (e.type === "mousedown" || shuttleRingDragging && e.type === "mousemove" || e.type === "touchstart" && e.touches.length === 1 || shuttleRingDragging && e.type === "touchmove" && e.touches.length === 1) {
    const centerX = widget._centerX;
    const centerY = widget._centerY;
    const svg = widget._svgNode;
    const rect = svg.getBoundingClientRect();
    let clientX;
    let clientY;
    if (e.type === "touchstart" || e.type === "touchmove") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    if (!shuttleRingDragging && (clientX > rect.right || clientX < rect.left || clientY < rect.top || clientY > rect.bottom)) {
      return;
    }
    const pointerRect = widget._shuttleRingPointer.getBoundingClientRect();
    const x = clientX - centerX - rect.left;
    const y = clientY - centerY - rect.top;
    let angle = Math.atan2(y, x) * 180 / Math.PI + 90;
    if (angle > 180) {
      angle -= 360;
    }
    const shuttleRingAngle = viewModel.shuttleRingAngle;
    if (shuttleRingDragging || clientX < pointerRect.right && clientX > pointerRect.left && clientY > pointerRect.top && clientY < pointerRect.bottom) {
      widgetForDrag = widget;
      viewModel.shuttleRingDragging = true;
      viewModel.shuttleRingAngle = angle;
    } else if (angle < shuttleRingAngle) {
      viewModel.slower();
    } else if (angle > shuttleRingAngle) {
      viewModel.faster();
    }
    e.preventDefault();
  } else {
    if (widget === widgetForDrag) {
      widgetForDrag = void 0;
    }
    viewModel.shuttleRingDragging = false;
  }
}
function SvgButton(svgElement, viewModel) {
  this._viewModel = viewModel;
  this.svgElement = svgElement;
  this._enabled = void 0;
  this._toggled = void 0;
  const that = this;
  this._clickFunction = function() {
    const command = that._viewModel.command;
    if (command.canExecute) {
      command();
    }
  };
  svgElement.addEventListener("click", this._clickFunction, true);
  this._subscriptions = [
    //
    subscribeAndEvaluate_default(viewModel, "toggled", this.setToggled, this),
    //
    subscribeAndEvaluate_default(viewModel, "tooltip", this.setTooltip, this),
    //
    subscribeAndEvaluate_default(
      viewModel.command,
      "canExecute",
      this.setEnabled,
      this
    )
  ];
}
SvgButton.prototype.destroy = function() {
  this.svgElement.removeEventListener("click", this._clickFunction, true);
  const subscriptions = this._subscriptions;
  for (let i = 0, len = subscriptions.length; i < len; i++) {
    subscriptions[i].dispose();
  }
  destroyObject2(this);
};
SvgButton.prototype.isDestroyed = function() {
  return false;
};
SvgButton.prototype.setEnabled = function(enabled) {
  if (this._enabled !== enabled) {
    this._enabled = enabled;
    if (!enabled) {
      this.svgElement.setAttribute("class", "cesium-animation-buttonDisabled");
      return;
    }
    if (this._toggled) {
      this.svgElement.setAttribute(
        "class",
        "cesium-animation-rectButton cesium-animation-buttonToggled"
      );
      return;
    }
    this.svgElement.setAttribute("class", "cesium-animation-rectButton");
  }
};
SvgButton.prototype.setToggled = function(toggled) {
  if (this._toggled !== toggled) {
    this._toggled = toggled;
    if (this._enabled) {
      if (toggled) {
        this.svgElement.setAttribute(
          "class",
          "cesium-animation-rectButton cesium-animation-buttonToggled"
        );
      } else {
        this.svgElement.setAttribute("class", "cesium-animation-rectButton");
      }
    }
  }
};
SvgButton.prototype.setTooltip = function(tooltip) {
  this.svgElement.getElementsByTagName("title")[0].textContent = tooltip;
};
function Animation(container, viewModel) {
  if (!defined5(container)) {
    throw new DeveloperError4("container is required.");
  }
  if (!defined5(viewModel)) {
    throw new DeveloperError4("viewModel is required.");
  }
  container = getElement(container);
  this._viewModel = viewModel;
  this._container = container;
  this._centerX = 0;
  this._centerY = 0;
  this._defsElement = void 0;
  this._svgNode = void 0;
  this._topG = void 0;
  this._lastHeight = void 0;
  this._lastWidth = void 0;
  const ownerDocument = container.ownerDocument;
  const cssStyle = document.createElement("style");
  cssStyle.textContent = ".cesium-animation-rectButton .cesium-animation-buttonGlow { filter: url(#animation_blurred); }.cesium-animation-rectButton .cesium-animation-buttonMain { fill: url(#animation_buttonNormal); }.cesium-animation-buttonToggled .cesium-animation-buttonMain { fill: url(#animation_buttonToggled); }.cesium-animation-rectButton:hover .cesium-animation-buttonMain { fill: url(#animation_buttonHovered); }.cesium-animation-buttonDisabled .cesium-animation-buttonMain { fill: url(#animation_buttonDisabled); }.cesium-animation-shuttleRingG .cesium-animation-shuttleRingSwoosh { fill: url(#animation_shuttleRingSwooshGradient); }.cesium-animation-shuttleRingG:hover .cesium-animation-shuttleRingSwoosh { fill: url(#animation_shuttleRingSwooshHovered); }.cesium-animation-shuttleRingPointer { fill: url(#animation_shuttleRingPointerGradient); }.cesium-animation-shuttleRingPausePointer { fill: url(#animation_shuttleRingPointerPaused); }.cesium-animation-knobOuter { fill: url(#animation_knobOuter); }.cesium-animation-knobInner { fill: url(#animation_knobInner); }";
  ownerDocument.head.insertBefore(cssStyle, ownerDocument.head.childNodes[0]);
  const themeEle = document.createElement("div");
  themeEle.className = "cesium-animation-theme";
  themeEle.innerHTML = '<div class="cesium-animation-themeNormal"></div><div class="cesium-animation-themeHover"></div><div class="cesium-animation-themeSelect"></div><div class="cesium-animation-themeDisabled"></div><div class="cesium-animation-themeKnob"></div><div class="cesium-animation-themePointer"></div><div class="cesium-animation-themeSwoosh"></div><div class="cesium-animation-themeSwooshHover"></div>';
  this._theme = themeEle;
  this._themeNormal = themeEle.childNodes[0];
  this._themeHover = themeEle.childNodes[1];
  this._themeSelect = themeEle.childNodes[2];
  this._themeDisabled = themeEle.childNodes[3];
  this._themeKnob = themeEle.childNodes[4];
  this._themePointer = themeEle.childNodes[5];
  this._themeSwoosh = themeEle.childNodes[6];
  this._themeSwooshHover = themeEle.childNodes[7];
  const svg = document.createElementNS(svgNS2, "svg:svg");
  this._svgNode = svg;
  svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", xlinkNS);
  const topG = document.createElementNS(svgNS2, "g");
  this._topG = topG;
  this._realtimeSVG = new SvgButton(
    wingButton(3, 4, "animation_pathClock"),
    viewModel.playRealtimeViewModel
  );
  this._playReverseSVG = new SvgButton(
    rectButton(44, 99, "animation_pathPlayReverse"),
    viewModel.playReverseViewModel
  );
  this._playForwardSVG = new SvgButton(
    rectButton(124, 99, "animation_pathPlay"),
    viewModel.playForwardViewModel
  );
  this._pauseSVG = new SvgButton(
    rectButton(84, 99, "animation_pathPause"),
    viewModel.pauseViewModel
  );
  const buttonsG = document.createElementNS(svgNS2, "g");
  buttonsG.appendChild(this._realtimeSVG.svgElement);
  buttonsG.appendChild(this._playReverseSVG.svgElement);
  buttonsG.appendChild(this._playForwardSVG.svgElement);
  buttonsG.appendChild(this._pauseSVG.svgElement);
  const shuttleRingBackPanel = svgFromObject({
    tagName: "circle",
    class: "cesium-animation-shuttleRingBack",
    cx: 100,
    cy: 100,
    r: 99
  });
  this._shuttleRingBackPanel = shuttleRingBackPanel;
  const swooshIconInfo = svgIconsById["animation_pathSwooshFX"];
  const shuttleRingPointerIconInfo = svgIconsById["animation_pathPointer"];
  const shuttleRingSwooshG = svgFromObject({
    tagName: "g",
    class: "cesium-animation-shuttleRingSwoosh",
    children: [
      {
        tagName: swooshIconInfo.tagName,
        transform: "translate(100,97) scale(-1,1)",
        id: "animation_pathSwooshFX",
        d: swooshIconInfo.d
      },
      {
        tagName: swooshIconInfo.tagName,
        transform: "translate(100,97)",
        id: "animation_pathSwooshFX",
        d: swooshIconInfo.d
      },
      {
        tagName: "line",
        x1: 100,
        y1: 8,
        x2: 100,
        y2: 22
      }
    ]
  });
  this._shuttleRingSwooshG = shuttleRingSwooshG;
  this._shuttleRingPointer = svgFromObject({
    class: "cesium-animation-shuttleRingPointer",
    id: "animation_pathPointer",
    tagName: shuttleRingPointerIconInfo.tagName,
    d: shuttleRingPointerIconInfo.d
  });
  const knobG = svgFromObject({
    tagName: "g",
    transform: "translate(100,100)"
  });
  this._knobOuter = svgFromObject({
    tagName: "circle",
    class: "cesium-animation-knobOuter",
    cx: 0,
    cy: 0,
    r: 71
  });
  const knobInnerAndShieldSize = 61;
  const knobInner = svgFromObject({
    tagName: "circle",
    class: "cesium-animation-knobInner",
    cx: 0,
    cy: 0,
    r: knobInnerAndShieldSize
  });
  this._knobDate = svgText(0, -24, "");
  this._knobTime = svgText(0, -7, "");
  this._knobStatus = svgText(0, -41, "");
  const knobShield = svgFromObject({
    tagName: "circle",
    class: "cesium-animation-blank",
    cx: 0,
    cy: 0,
    r: knobInnerAndShieldSize
  });
  const shuttleRingBackG = document.createElementNS(svgNS2, "g");
  shuttleRingBackG.setAttribute("class", "cesium-animation-shuttleRingG");
  container.appendChild(themeEle);
  topG.appendChild(shuttleRingBackG);
  topG.appendChild(knobG);
  topG.appendChild(buttonsG);
  shuttleRingBackG.appendChild(shuttleRingBackPanel);
  shuttleRingBackG.appendChild(shuttleRingSwooshG);
  shuttleRingBackG.appendChild(this._shuttleRingPointer);
  knobG.appendChild(this._knobOuter);
  knobG.appendChild(knobInner);
  knobG.appendChild(this._knobDate);
  knobG.appendChild(this._knobTime);
  knobG.appendChild(this._knobStatus);
  knobG.appendChild(knobShield);
  svg.appendChild(topG);
  container.appendChild(svg);
  const that = this;
  function mouseCallback(e) {
    setShuttleRingFromMouseOrTouch(that, e);
  }
  this._mouseCallback = mouseCallback;
  shuttleRingBackPanel.addEventListener("mousedown", mouseCallback, true);
  shuttleRingBackPanel.addEventListener("touchstart", mouseCallback, true);
  shuttleRingSwooshG.addEventListener("mousedown", mouseCallback, true);
  shuttleRingSwooshG.addEventListener("touchstart", mouseCallback, true);
  ownerDocument.addEventListener("mousemove", mouseCallback, true);
  ownerDocument.addEventListener("touchmove", mouseCallback, true);
  ownerDocument.addEventListener("mouseup", mouseCallback, true);
  ownerDocument.addEventListener("touchend", mouseCallback, true);
  ownerDocument.addEventListener("touchcancel", mouseCallback, true);
  this._shuttleRingPointer.addEventListener("mousedown", mouseCallback, true);
  this._shuttleRingPointer.addEventListener("touchstart", mouseCallback, true);
  this._knobOuter.addEventListener("mousedown", mouseCallback, true);
  this._knobOuter.addEventListener("touchstart", mouseCallback, true);
  const timeNode = this._knobTime.childNodes[0];
  const dateNode = this._knobDate.childNodes[0];
  const statusNode = this._knobStatus.childNodes[0];
  let isPaused;
  this._subscriptions = [
    //
    subscribeAndEvaluate_default(viewModel.pauseViewModel, "toggled", function(value) {
      if (isPaused !== value) {
        isPaused = value;
        if (isPaused) {
          that._shuttleRingPointer.setAttribute(
            "class",
            "cesium-animation-shuttleRingPausePointer"
          );
        } else {
          that._shuttleRingPointer.setAttribute(
            "class",
            "cesium-animation-shuttleRingPointer"
          );
        }
      }
    }),
    subscribeAndEvaluate_default(viewModel, "shuttleRingAngle", function(value) {
      setShuttleRingPointer(that._shuttleRingPointer, that._knobOuter, value);
    }),
    subscribeAndEvaluate_default(viewModel, "dateLabel", function(value) {
      if (dateNode.textContent !== value) {
        dateNode.textContent = value;
      }
    }),
    subscribeAndEvaluate_default(viewModel, "timeLabel", function(value) {
      if (timeNode.textContent !== value) {
        timeNode.textContent = value;
      }
    }),
    subscribeAndEvaluate_default(viewModel, "multiplierLabel", function(value) {
      if (statusNode.textContent !== value) {
        statusNode.textContent = value;
      }
    })
  ];
  this.applyThemeChanges();
  this.resize();
}
Object.defineProperties(Animation.prototype, {
  /**
   * Gets the parent container.
   *
   * @memberof Animation.prototype
   * @type {Element}
   * @readonly
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   *
   * @memberof Animation.prototype
   * @type {AnimationViewModel}
   * @readonly
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
Animation.prototype.isDestroyed = function() {
  return false;
};
Animation.prototype.destroy = function() {
  if (defined5(this._observer)) {
    this._observer.disconnect();
    this._observer = void 0;
  }
  const doc = this._container.ownerDocument;
  const mouseCallback = this._mouseCallback;
  this._shuttleRingBackPanel.removeEventListener(
    "mousedown",
    mouseCallback,
    true
  );
  this._shuttleRingBackPanel.removeEventListener(
    "touchstart",
    mouseCallback,
    true
  );
  this._shuttleRingSwooshG.removeEventListener(
    "mousedown",
    mouseCallback,
    true
  );
  this._shuttleRingSwooshG.removeEventListener(
    "touchstart",
    mouseCallback,
    true
  );
  doc.removeEventListener("mousemove", mouseCallback, true);
  doc.removeEventListener("touchmove", mouseCallback, true);
  doc.removeEventListener("mouseup", mouseCallback, true);
  doc.removeEventListener("touchend", mouseCallback, true);
  doc.removeEventListener("touchcancel", mouseCallback, true);
  this._shuttleRingPointer.removeEventListener(
    "mousedown",
    mouseCallback,
    true
  );
  this._shuttleRingPointer.removeEventListener(
    "touchstart",
    mouseCallback,
    true
  );
  this._knobOuter.removeEventListener("mousedown", mouseCallback, true);
  this._knobOuter.removeEventListener("touchstart", mouseCallback, true);
  this._container.removeChild(this._svgNode);
  this._container.removeChild(this._theme);
  this._realtimeSVG.destroy();
  this._playReverseSVG.destroy();
  this._playForwardSVG.destroy();
  this._pauseSVG.destroy();
  const subscriptions = this._subscriptions;
  for (let i = 0, len = subscriptions.length; i < len; i++) {
    subscriptions[i].dispose();
  }
  return destroyObject2(this);
};
Animation.prototype.resize = function() {
  const parentWidth = this._container.clientWidth;
  const parentHeight = this._container.clientHeight;
  if (parentWidth === this._lastWidth && parentHeight === this._lastHeight) {
    return;
  }
  const svg = this._svgNode;
  const baseWidth = 200;
  const baseHeight = 132;
  let width = parentWidth;
  let height = parentHeight;
  if (parentWidth === 0 && parentHeight === 0) {
    width = baseWidth;
    height = baseHeight;
  } else if (parentWidth === 0) {
    height = parentHeight;
    width = baseWidth * (parentHeight / baseHeight);
  } else if (parentHeight === 0) {
    width = parentWidth;
    height = baseHeight * (parentWidth / baseWidth);
  }
  const scaleX = width / baseWidth;
  const scaleY = height / baseHeight;
  svg.style.cssText = `width: ${width}px; height: ${height}px; position: absolute; bottom: 0; left: 0; overflow: hidden;`;
  svg.setAttribute("width", width);
  svg.setAttribute("height", height);
  svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
  this._topG.setAttribute("transform", `scale(${scaleX},${scaleY})`);
  this._centerX = Math.max(1, 100 * scaleX);
  this._centerY = Math.max(1, 100 * scaleY);
  this._lastHeight = parentWidth;
  this._lastWidth = parentHeight;
};
Animation.prototype.applyThemeChanges = function() {
  const doc = this._container.ownerDocument;
  if (!doc.body.contains(this._container)) {
    if (defined5(this._observer)) {
      return;
    }
    const that = this;
    that._observer = new MutationObserver(function() {
      if (doc.body.contains(that._container)) {
        that._observer.disconnect();
        that._observer = void 0;
        that.applyThemeChanges();
      }
    });
    that._observer.observe(doc, { childList: true, subtree: true });
    return;
  }
  const buttonNormalBackColor = getElementColor(this._themeNormal);
  const buttonHoverBackColor = getElementColor(this._themeHover);
  const buttonToggledBackColor = getElementColor(this._themeSelect);
  const buttonDisabledBackColor = getElementColor(this._themeDisabled);
  const knobBackColor = getElementColor(this._themeKnob);
  const pointerColor = getElementColor(this._themePointer);
  const swooshColor = getElementColor(this._themeSwoosh);
  const swooshHoverColor = getElementColor(this._themeSwooshHover);
  const defsElement = svgFromObject({
    tagName: "defs",
    children: [
      {
        id: "animation_buttonNormal",
        tagName: "linearGradient",
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        children: [
          //add a 'stop-opacity' field to make translucent.
          {
            tagName: "stop",
            offset: "0%",
            "stop-color": makeColorString(
              buttonNormalBackColor,
              gradientEnabledColor0
            )
          },
          {
            tagName: "stop",
            offset: "12%",
            "stop-color": makeColorString(
              buttonNormalBackColor,
              gradientEnabledColor1
            )
          },
          {
            tagName: "stop",
            offset: "46%",
            "stop-color": makeColorString(
              buttonNormalBackColor,
              gradientEnabledColor2
            )
          },
          {
            tagName: "stop",
            offset: "81%",
            "stop-color": makeColorString(
              buttonNormalBackColor,
              gradientEnabledColor3
            )
          }
        ]
      },
      {
        id: "animation_buttonHovered",
        tagName: "linearGradient",
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-color": makeColorString(
              buttonHoverBackColor,
              gradientEnabledColor0
            )
          },
          {
            tagName: "stop",
            offset: "12%",
            "stop-color": makeColorString(
              buttonHoverBackColor,
              gradientEnabledColor1
            )
          },
          {
            tagName: "stop",
            offset: "46%",
            "stop-color": makeColorString(
              buttonHoverBackColor,
              gradientEnabledColor2
            )
          },
          {
            tagName: "stop",
            offset: "81%",
            "stop-color": makeColorString(
              buttonHoverBackColor,
              gradientEnabledColor3
            )
          }
        ]
      },
      {
        id: "animation_buttonToggled",
        tagName: "linearGradient",
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-color": makeColorString(
              buttonToggledBackColor,
              gradientEnabledColor0
            )
          },
          {
            tagName: "stop",
            offset: "12%",
            "stop-color": makeColorString(
              buttonToggledBackColor,
              gradientEnabledColor1
            )
          },
          {
            tagName: "stop",
            offset: "46%",
            "stop-color": makeColorString(
              buttonToggledBackColor,
              gradientEnabledColor2
            )
          },
          {
            tagName: "stop",
            offset: "81%",
            "stop-color": makeColorString(
              buttonToggledBackColor,
              gradientEnabledColor3
            )
          }
        ]
      },
      {
        id: "animation_buttonDisabled",
        tagName: "linearGradient",
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-color": makeColorString(
              buttonDisabledBackColor,
              gradientDisabledColor0
            )
          },
          {
            tagName: "stop",
            offset: "75%",
            "stop-color": makeColorString(
              buttonDisabledBackColor,
              gradientDisabledColor1
            )
          }
        ]
      },
      {
        id: "animation_blurred",
        tagName: "filter",
        width: "200%",
        height: "200%",
        x: "-50%",
        y: "-50%",
        children: [
          {
            tagName: "feGaussianBlur",
            stdDeviation: 4,
            in: "SourceGraphic"
          }
        ]
      },
      {
        id: "animation_shuttleRingSwooshGradient",
        tagName: "linearGradient",
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-opacity": 0.2,
            "stop-color": swooshColor.toCssColorString()
          },
          {
            tagName: "stop",
            offset: "85%",
            "stop-opacity": 0.85,
            "stop-color": swooshColor.toCssColorString()
          },
          {
            tagName: "stop",
            offset: "95%",
            "stop-opacity": 0.05,
            "stop-color": swooshColor.toCssColorString()
          }
        ]
      },
      {
        id: "animation_shuttleRingSwooshHovered",
        tagName: "linearGradient",
        x1: "50%",
        y1: "0%",
        x2: "50%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-opacity": 0.2,
            "stop-color": swooshHoverColor.toCssColorString()
          },
          {
            tagName: "stop",
            offset: "85%",
            "stop-opacity": 0.85,
            "stop-color": swooshHoverColor.toCssColorString()
          },
          {
            tagName: "stop",
            offset: "95%",
            "stop-opacity": 0.05,
            "stop-color": swooshHoverColor.toCssColorString()
          }
        ]
      },
      {
        id: "animation_shuttleRingPointerGradient",
        tagName: "linearGradient",
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-color": pointerColor.toCssColorString()
          },
          {
            tagName: "stop",
            offset: "40%",
            "stop-color": pointerColor.toCssColorString()
          },
          {
            tagName: "stop",
            offset: "60%",
            "stop-color": makeColorString(pointerColor, gradientPointerColor)
          },
          {
            tagName: "stop",
            offset: "100%",
            "stop-color": makeColorString(pointerColor, gradientPointerColor)
          }
        ]
      },
      {
        id: "animation_shuttleRingPointerPaused",
        tagName: "linearGradient",
        x1: "0%",
        y1: "50%",
        x2: "100%",
        y2: "50%",
        children: [
          {
            tagName: "stop",
            offset: "0%",
            "stop-color": "#CCC"
          },
          {
            tagName: "stop",
            offset: "40%",
            "stop-color": "#CCC"
          },
          {
            tagName: "stop",
            offset: "60%",
            "stop-color": "#555"
          },
          {
            tagName: "stop",
            offset: "100%",
            "stop-color": "#555"
          }
        ]
      },
      {
        id: "animation_knobOuter",
        tagName: "linearGradient",
        x1: "20%",
        y1: "0%",
        x2: "90%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "5%",
            "stop-color": makeColorString(knobBackColor, gradientEnabledColor0)
          },
          {
            tagName: "stop",
            offset: "60%",
            "stop-color": makeColorString(knobBackColor, gradientKnobColor)
          },
          {
            tagName: "stop",
            offset: "85%",
            "stop-color": makeColorString(knobBackColor, gradientEnabledColor1)
          }
        ]
      },
      {
        id: "animation_knobInner",
        tagName: "linearGradient",
        x1: "20%",
        y1: "0%",
        x2: "90%",
        y2: "100%",
        children: [
          {
            tagName: "stop",
            offset: "5%",
            "stop-color": makeColorString(knobBackColor, gradientKnobColor)
          },
          {
            tagName: "stop",
            offset: "60%",
            "stop-color": makeColorString(knobBackColor, gradientEnabledColor0)
          },
          {
            tagName: "stop",
            offset: "85%",
            "stop-color": makeColorString(knobBackColor, gradientEnabledColor3)
          }
        ]
      }
    ]
  });
  if (!defined5(this._defsElement)) {
    this._svgNode.appendChild(defsElement);
  } else {
    this._svgNode.replaceChild(defsElement, this._defsElement);
  }
  this._defsElement = defsElement;
};
var Animation_default = Animation;

// packages/widgets/Source/Animation/AnimationViewModel.js
import {
  addAllToArray,
  binarySearch,
  ClockRange,
  ClockStep,
  defined as defined6,
  DeveloperError as DeveloperError5,
  JulianDate as JulianDate2
} from "@cesium/engine";
var monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
var realtimeShuttleRingAngle = 15;
var maxShuttleRingAngle = 105;
function numberComparator(left, right) {
  return left - right;
}
function getTypicalMultiplierIndex(multiplier, shuttleRingTicks) {
  const index = binarySearch(shuttleRingTicks, multiplier, numberComparator);
  return index < 0 ? ~index : index;
}
function angleToMultiplier(angle, shuttleRingTicks) {
  if (Math.abs(angle) <= realtimeShuttleRingAngle) {
    return angle / realtimeShuttleRingAngle;
  }
  const minp = realtimeShuttleRingAngle;
  const maxp = maxShuttleRingAngle;
  let maxv;
  const minv = 0;
  let scale;
  if (angle > 0) {
    maxv = Math.log(shuttleRingTicks[shuttleRingTicks.length - 1]);
    scale = (maxv - minv) / (maxp - minp);
    return Math.exp(minv + scale * (angle - minp));
  }
  maxv = Math.log(-shuttleRingTicks[0]);
  scale = (maxv - minv) / (maxp - minp);
  return -Math.exp(minv + scale * (Math.abs(angle) - minp));
}
function multiplierToAngle(multiplier, shuttleRingTicks, clockViewModel) {
  if (clockViewModel.clockStep === ClockStep.SYSTEM_CLOCK) {
    return realtimeShuttleRingAngle;
  }
  if (Math.abs(multiplier) <= 1) {
    return multiplier * realtimeShuttleRingAngle;
  }
  const fastedMultipler = shuttleRingTicks[shuttleRingTicks.length - 1];
  if (multiplier > fastedMultipler) {
    multiplier = fastedMultipler;
  } else if (multiplier < -fastedMultipler) {
    multiplier = -fastedMultipler;
  }
  const minp = realtimeShuttleRingAngle;
  const maxp = maxShuttleRingAngle;
  let maxv;
  const minv = 0;
  let scale;
  if (multiplier > 0) {
    maxv = Math.log(fastedMultipler);
    scale = (maxv - minv) / (maxp - minp);
    return (Math.log(multiplier) - minv) / scale + minp;
  }
  maxv = Math.log(-shuttleRingTicks[0]);
  scale = (maxv - minv) / (maxp - minp);
  return -((Math.log(Math.abs(multiplier)) - minv) / scale + minp);
}
function AnimationViewModel(clockViewModel) {
  if (!defined6(clockViewModel)) {
    throw new DeveloperError5("clockViewModel is required.");
  }
  const that = this;
  this._clockViewModel = clockViewModel;
  this._allShuttleRingTicks = [];
  this._dateFormatter = AnimationViewModel.defaultDateFormatter;
  this._timeFormatter = AnimationViewModel.defaultTimeFormatter;
  this.shuttleRingDragging = false;
  this.snapToTicks = false;
  knockout_default.track(this, [
    "_allShuttleRingTicks",
    "_dateFormatter",
    "_timeFormatter",
    "shuttleRingDragging",
    "snapToTicks"
  ]);
  this._sortedFilteredPositiveTicks = [];
  this.setShuttleRingTicks(AnimationViewModel.defaultTicks);
  this.timeLabel = void 0;
  knockout_default.defineProperty(this, "timeLabel", function() {
    return that._timeFormatter(that._clockViewModel.currentTime, that);
  });
  this.dateLabel = void 0;
  knockout_default.defineProperty(this, "dateLabel", function() {
    return that._dateFormatter(that._clockViewModel.currentTime, that);
  });
  this.multiplierLabel = void 0;
  knockout_default.defineProperty(this, "multiplierLabel", function() {
    const clockViewModel2 = that._clockViewModel;
    if (clockViewModel2.clockStep === ClockStep.SYSTEM_CLOCK) {
      return "Today";
    }
    const multiplier = clockViewModel2.multiplier;
    if (multiplier % 1 === 0) {
      return `${multiplier.toFixed(0)}x`;
    }
    return `${multiplier.toFixed(3).replace(/0{0,3}$/, "")}x`;
  });
  this.shuttleRingAngle = void 0;
  knockout_default.defineProperty(this, "shuttleRingAngle", {
    get: function() {
      return multiplierToAngle(
        clockViewModel.multiplier,
        that._allShuttleRingTicks,
        clockViewModel
      );
    },
    set: function(angle) {
      angle = Math.max(
        Math.min(angle, maxShuttleRingAngle),
        -maxShuttleRingAngle
      );
      const ticks = that._allShuttleRingTicks;
      const clockViewModel2 = that._clockViewModel;
      clockViewModel2.clockStep = ClockStep.SYSTEM_CLOCK_MULTIPLIER;
      if (Math.abs(angle) === maxShuttleRingAngle) {
        clockViewModel2.multiplier = angle > 0 ? ticks[ticks.length - 1] : ticks[0];
        return;
      }
      let multiplier = angleToMultiplier(angle, ticks);
      if (that.snapToTicks) {
        multiplier = ticks[getTypicalMultiplierIndex(multiplier, ticks)];
      } else if (multiplier !== 0) {
        const positiveMultiplier = Math.abs(multiplier);
        if (positiveMultiplier > 100) {
          const numDigits = positiveMultiplier.toFixed(0).length - 2;
          const divisor = Math.pow(10, numDigits);
          multiplier = Math.round(multiplier / divisor) * divisor | 0;
        } else if (positiveMultiplier > realtimeShuttleRingAngle) {
          multiplier = Math.round(multiplier);
        } else if (positiveMultiplier > 1) {
          multiplier = +multiplier.toFixed(1);
        } else if (positiveMultiplier > 0) {
          multiplier = +multiplier.toFixed(2);
        }
      }
      clockViewModel2.multiplier = multiplier;
    }
  });
  this._canAnimate = void 0;
  knockout_default.defineProperty(this, "_canAnimate", function() {
    const clockViewModel2 = that._clockViewModel;
    const clockRange = clockViewModel2.clockRange;
    if (that.shuttleRingDragging || clockRange === ClockRange.UNBOUNDED) {
      return true;
    }
    const multiplier = clockViewModel2.multiplier;
    const currentTime = clockViewModel2.currentTime;
    const startTime = clockViewModel2.startTime;
    let result = false;
    if (clockRange === ClockRange.LOOP_STOP) {
      result = JulianDate2.greaterThan(currentTime, startTime) || currentTime.equals(startTime) && multiplier > 0;
    } else {
      const stopTime = clockViewModel2.stopTime;
      result = JulianDate2.greaterThan(currentTime, startTime) && JulianDate2.lessThan(currentTime, stopTime) || //
      currentTime.equals(startTime) && multiplier > 0 || //
      currentTime.equals(stopTime) && multiplier < 0;
    }
    if (!result) {
      clockViewModel2.shouldAnimate = false;
    }
    return result;
  });
  this._isSystemTimeAvailable = void 0;
  knockout_default.defineProperty(this, "_isSystemTimeAvailable", function() {
    const clockViewModel2 = that._clockViewModel;
    const clockRange = clockViewModel2.clockRange;
    if (clockRange === ClockRange.UNBOUNDED) {
      return true;
    }
    const systemTime = clockViewModel2.systemTime;
    return JulianDate2.greaterThanOrEquals(systemTime, clockViewModel2.startTime) && JulianDate2.lessThanOrEquals(systemTime, clockViewModel2.stopTime);
  });
  this._isAnimating = void 0;
  knockout_default.defineProperty(this, "_isAnimating", function() {
    return that._clockViewModel.shouldAnimate && (that._canAnimate || that.shuttleRingDragging);
  });
  const pauseCommand = createCommand_default(function() {
    const clockViewModel2 = that._clockViewModel;
    if (clockViewModel2.shouldAnimate) {
      clockViewModel2.shouldAnimate = false;
    } else if (that._canAnimate) {
      clockViewModel2.shouldAnimate = true;
    }
  });
  this._pauseViewModel = new ToggleButtonViewModel_default(pauseCommand, {
    toggled: knockout_default.computed(function() {
      return !that._isAnimating;
    }),
    tooltip: "Pause"
  });
  const playReverseCommand = createCommand_default(function() {
    const clockViewModel2 = that._clockViewModel;
    const multiplier = clockViewModel2.multiplier;
    if (multiplier > 0) {
      clockViewModel2.multiplier = -multiplier;
    }
    clockViewModel2.shouldAnimate = true;
  });
  this._playReverseViewModel = new ToggleButtonViewModel_default(playReverseCommand, {
    toggled: knockout_default.computed(function() {
      return that._isAnimating && clockViewModel.multiplier < 0;
    }),
    tooltip: "Play Reverse"
  });
  const playForwardCommand = createCommand_default(function() {
    const clockViewModel2 = that._clockViewModel;
    const multiplier = clockViewModel2.multiplier;
    if (multiplier < 0) {
      clockViewModel2.multiplier = -multiplier;
    }
    clockViewModel2.shouldAnimate = true;
  });
  this._playForwardViewModel = new ToggleButtonViewModel_default(playForwardCommand, {
    toggled: knockout_default.computed(function() {
      return that._isAnimating && clockViewModel.multiplier > 0 && clockViewModel.clockStep !== ClockStep.SYSTEM_CLOCK;
    }),
    tooltip: "Play Forward"
  });
  const playRealtimeCommand = createCommand_default(
    function() {
      that._clockViewModel.clockStep = ClockStep.SYSTEM_CLOCK;
    },
    knockout_default.getObservable(this, "_isSystemTimeAvailable")
  );
  this._playRealtimeViewModel = new ToggleButtonViewModel_default(playRealtimeCommand, {
    toggled: knockout_default.computed(function() {
      return clockViewModel.clockStep === ClockStep.SYSTEM_CLOCK;
    }),
    tooltip: knockout_default.computed(function() {
      return that._isSystemTimeAvailable ? "Today (real-time)" : "Current time not in range";
    })
  });
  this._slower = createCommand_default(function() {
    const clockViewModel2 = that._clockViewModel;
    const shuttleRingTicks = that._allShuttleRingTicks;
    const multiplier = clockViewModel2.multiplier;
    const index = getTypicalMultiplierIndex(multiplier, shuttleRingTicks) - 1;
    if (index >= 0) {
      clockViewModel2.multiplier = shuttleRingTicks[index];
    }
  });
  this._faster = createCommand_default(function() {
    const clockViewModel2 = that._clockViewModel;
    const shuttleRingTicks = that._allShuttleRingTicks;
    const multiplier = clockViewModel2.multiplier;
    const index = getTypicalMultiplierIndex(multiplier, shuttleRingTicks) + 1;
    if (index < shuttleRingTicks.length) {
      clockViewModel2.multiplier = shuttleRingTicks[index];
    }
  });
}
AnimationViewModel.defaultDateFormatter = function(date, viewModel) {
  const gregorianDate = JulianDate2.toGregorianDate(date);
  return `${monthNames[gregorianDate.month - 1]} ${gregorianDate.day} ${gregorianDate.year}`;
};
AnimationViewModel.defaultTicks = [
  //
  1e-3,
  2e-3,
  5e-3,
  0.01,
  0.02,
  0.05,
  0.1,
  0.25,
  0.5,
  1,
  2,
  5,
  10,
  //
  15,
  30,
  60,
  120,
  300,
  600,
  900,
  1800,
  3600,
  7200,
  14400,
  //
  21600,
  43200,
  86400,
  172800,
  345600,
  604800
];
AnimationViewModel.defaultTimeFormatter = function(date, viewModel) {
  const gregorianDate = JulianDate2.toGregorianDate(date);
  const millisecond = Math.round(gregorianDate.millisecond);
  if (Math.abs(viewModel._clockViewModel.multiplier) < 1) {
    return `${gregorianDate.hour.toString().padStart(2, "0")}:${gregorianDate.minute.toString().padStart(2, "0")}:${gregorianDate.second.toString().padStart(2, "0")}.${millisecond.toString().padStart(3, "0")}`;
  }
  return `${gregorianDate.hour.toString().padStart(2, "0")}:${gregorianDate.minute.toString().padStart(2, "0")}:${gregorianDate.second.toString().padStart(2, "0")} UTC`;
};
AnimationViewModel.prototype.getShuttleRingTicks = function() {
  return this._sortedFilteredPositiveTicks.slice(0);
};
AnimationViewModel.prototype.setShuttleRingTicks = function(positiveTicks) {
  if (!defined6(positiveTicks)) {
    throw new DeveloperError5("positiveTicks is required.");
  }
  let i;
  let len;
  let tick;
  const hash = {};
  const sortedFilteredPositiveTicks = this._sortedFilteredPositiveTicks;
  sortedFilteredPositiveTicks.length = 0;
  for (i = 0, len = positiveTicks.length; i < len; ++i) {
    tick = positiveTicks[i];
    if (!hash.hasOwnProperty(tick)) {
      hash[tick] = true;
      sortedFilteredPositiveTicks.push(tick);
    }
  }
  sortedFilteredPositiveTicks.sort(numberComparator);
  const allTicks = [];
  for (len = sortedFilteredPositiveTicks.length, i = len - 1; i >= 0; --i) {
    tick = sortedFilteredPositiveTicks[i];
    if (tick !== 0) {
      allTicks.push(-tick);
    }
  }
  addAllToArray(allTicks, sortedFilteredPositiveTicks);
  this._allShuttleRingTicks = allTicks;
};
Object.defineProperties(AnimationViewModel.prototype, {
  /**
   * Gets a command that decreases the speed of animation.
   * @memberof AnimationViewModel.prototype
   * @type {Command}
   */
  slower: {
    get: function() {
      return this._slower;
    }
  },
  /**
   * Gets a command that increases the speed of animation.
   * @memberof AnimationViewModel.prototype
   * @type {Command}
   */
  faster: {
    get: function() {
      return this._faster;
    }
  },
  /**
   * Gets the clock view model.
   * @memberof AnimationViewModel.prototype
   *
   * @type {ClockViewModel}
   */
  clockViewModel: {
    get: function() {
      return this._clockViewModel;
    }
  },
  /**
   * Gets the pause toggle button view model.
   * @memberof AnimationViewModel.prototype
   *
   * @type {ToggleButtonViewModel}
   */
  pauseViewModel: {
    get: function() {
      return this._pauseViewModel;
    }
  },
  /**
   * Gets the reverse toggle button view model.
   * @memberof AnimationViewModel.prototype
   *
   * @type {ToggleButtonViewModel}
   */
  playReverseViewModel: {
    get: function() {
      return this._playReverseViewModel;
    }
  },
  /**
   * Gets the play toggle button view model.
   * @memberof AnimationViewModel.prototype
   *
   * @type {ToggleButtonViewModel}
   */
  playForwardViewModel: {
    get: function() {
      return this._playForwardViewModel;
    }
  },
  /**
   * Gets the realtime toggle button view model.
   * @memberof AnimationViewModel.prototype
   *
   * @type {ToggleButtonViewModel}
   */
  playRealtimeViewModel: {
    get: function() {
      return this._playRealtimeViewModel;
    }
  },
  /**
   * Gets or sets the function which formats a date for display.
   * @memberof AnimationViewModel.prototype
   *
   * @type {AnimationViewModel.DateFormatter}
   * @default AnimationViewModel.defaultDateFormatter
   */
  dateFormatter: {
    //TODO:@exception {DeveloperError} dateFormatter must be a function.
    get: function() {
      return this._dateFormatter;
    },
    set: function(dateFormatter) {
      if (typeof dateFormatter !== "function") {
        throw new DeveloperError5("dateFormatter must be a function");
      }
      this._dateFormatter = dateFormatter;
    }
  },
  /**
   * Gets or sets the function which formats a time for display.
   * @memberof AnimationViewModel.prototype
   *
   * @type {AnimationViewModel.TimeFormatter}
   * @default AnimationViewModel.defaultTimeFormatter
   */
  timeFormatter: {
    //TODO:@exception {DeveloperError} timeFormatter must be a function.
    get: function() {
      return this._timeFormatter;
    },
    set: function(timeFormatter) {
      if (typeof timeFormatter !== "function") {
        throw new DeveloperError5("timeFormatter must be a function");
      }
      this._timeFormatter = timeFormatter;
    }
  }
});
AnimationViewModel._maxShuttleRingAngle = maxShuttleRingAngle;
AnimationViewModel._realtimeShuttleRingAngle = realtimeShuttleRingAngle;
var AnimationViewModel_default = AnimationViewModel;

// packages/widgets/Source/BaseLayerPicker/BaseLayerPicker.js
import {
  defined as defined8,
  destroyObject as destroyObject3,
  DeveloperError as DeveloperError7,
  FeatureDetection,
  getElement as getElement2
} from "@cesium/engine";

// packages/widgets/Source/BaseLayerPicker/BaseLayerPickerViewModel.js
import {
  Frozen as Frozen2,
  defined as defined7,
  DeveloperError as DeveloperError6,
  EllipsoidTerrainProvider,
  ImageryLayer,
  Terrain
} from "@cesium/engine";
function BaseLayerPickerViewModel(options) {
  options = options ?? Frozen2.EMPTY_OBJECT;
  const globe = options.globe;
  const imageryProviderViewModels = options.imageryProviderViewModels ?? Frozen2.EMPTY_ARRAY;
  const terrainProviderViewModels = options.terrainProviderViewModels ?? Frozen2.EMPTY_ARRAY;
  if (!defined7(globe)) {
    throw new DeveloperError6("globe is required");
  }
  this._globe = globe;
  this.imageryProviderViewModels = imageryProviderViewModels.slice(0);
  this.terrainProviderViewModels = terrainProviderViewModels.slice(0);
  this.dropDownVisible = false;
  knockout_default.track(this, [
    "imageryProviderViewModels",
    "terrainProviderViewModels",
    "dropDownVisible"
  ]);
  const imageryObservable = knockout_default.getObservable(
    this,
    "imageryProviderViewModels"
  );
  const imageryProviders = knockout_default.pureComputed(function() {
    const providers = imageryObservable();
    const categories = {};
    let i;
    for (i = 0; i < providers.length; i++) {
      const provider = providers[i];
      const category = provider.category;
      if (defined7(categories[category])) {
        categories[category].push(provider);
      } else {
        categories[category] = [provider];
      }
    }
    const allCategoryNames = Object.keys(categories);
    const result = [];
    for (i = 0; i < allCategoryNames.length; i++) {
      const name = allCategoryNames[i];
      result.push({
        name,
        providers: categories[name]
      });
    }
    return result;
  });
  this._imageryProviders = imageryProviders;
  const terrainObservable = knockout_default.getObservable(
    this,
    "terrainProviderViewModels"
  );
  const terrainProviders = knockout_default.pureComputed(function() {
    const providers = terrainObservable();
    const categories = {};
    let i;
    for (i = 0; i < providers.length; i++) {
      const provider = providers[i];
      const category = provider.category;
      if (defined7(categories[category])) {
        categories[category].push(provider);
      } else {
        categories[category] = [provider];
      }
    }
    const allCategoryNames = Object.keys(categories);
    const result = [];
    for (i = 0; i < allCategoryNames.length; i++) {
      const name = allCategoryNames[i];
      result.push({
        name,
        providers: categories[name]
      });
    }
    return result;
  });
  this._terrainProviders = terrainProviders;
  this.buttonTooltip = void 0;
  knockout_default.defineProperty(this, "buttonTooltip", function() {
    const selectedImagery = this.selectedImagery;
    const selectedTerrain = this.selectedTerrain;
    const imageryTip = defined7(selectedImagery) ? selectedImagery.name : void 0;
    const terrainTip = defined7(selectedTerrain) ? selectedTerrain.name : void 0;
    if (defined7(imageryTip) && defined7(terrainTip)) {
      return `${imageryTip}
${terrainTip}`;
    } else if (defined7(imageryTip)) {
      return imageryTip;
    }
    return terrainTip;
  });
  this.buttonImageUrl = void 0;
  knockout_default.defineProperty(this, "buttonImageUrl", function() {
    const selectedImagery = this.selectedImagery;
    if (defined7(selectedImagery)) {
      return selectedImagery.iconUrl;
    }
  });
  this.selectedImagery = void 0;
  const selectedImageryViewModel = knockout_default.observable();
  this._currentImageryLayers = [];
  knockout_default.defineProperty(this, "selectedImagery", {
    get: function() {
      return selectedImageryViewModel();
    },
    set: function(value) {
      if (selectedImageryViewModel() === value) {
        this.dropDownVisible = false;
        return;
      }
      let i;
      const currentImageryLayers = this._currentImageryLayers;
      const currentImageryLayersLength = currentImageryLayers.length;
      const imageryLayers = this._globe.imageryLayers;
      let hadExistingBaseLayer = false;
      for (i = 0; i < currentImageryLayersLength; i++) {
        const layersLength = imageryLayers.length;
        for (let x = 0; x < layersLength; x++) {
          const layer = imageryLayers.get(x);
          if (layer === currentImageryLayers[i]) {
            imageryLayers.remove(layer);
            hadExistingBaseLayer = true;
            break;
          }
        }
      }
      if (defined7(value)) {
        const newProviders = value.creationCommand();
        if (Array.isArray(newProviders)) {
          const newProvidersLength = newProviders.length;
          this._currentImageryLayers = [];
          for (i = newProvidersLength - 1; i >= 0; i--) {
            const layer = ImageryLayer.fromProviderAsync(newProviders[i]);
            imageryLayers.add(layer, 0);
            this._currentImageryLayers.push(layer);
          }
        } else {
          this._currentImageryLayers = [];
          const layer = ImageryLayer.fromProviderAsync(newProviders);
          layer.name = value.name;
          if (hadExistingBaseLayer) {
            imageryLayers.add(layer, 0);
          } else {
            const baseLayer = imageryLayers.get(0);
            if (defined7(baseLayer)) {
              imageryLayers.remove(baseLayer);
            }
            imageryLayers.add(layer, 0);
          }
          this._currentImageryLayers.push(layer);
        }
      }
      selectedImageryViewModel(value);
      this.dropDownVisible = false;
    }
  });
  this.selectedTerrain = void 0;
  const selectedTerrainViewModel = knockout_default.observable();
  knockout_default.defineProperty(this, "selectedTerrain", {
    get: function() {
      return selectedTerrainViewModel();
    },
    set: function(value) {
      if (selectedTerrainViewModel() === value) {
        this.dropDownVisible = false;
        return;
      }
      let newProvider;
      if (defined7(value)) {
        newProvider = value.creationCommand();
      }
      if (defined7(newProvider) && !defined7(newProvider.then)) {
        this._globe.depthTestAgainstTerrain = !(newProvider instanceof EllipsoidTerrainProvider);
        this._globe.terrainProvider = newProvider;
      } else if (defined7(newProvider)) {
        let cancelUpdate = false;
        const removeCancelListener = this._globe.terrainProviderChanged.addEventListener(() => {
          cancelUpdate = true;
          removeCancelListener();
        });
        const terrain = new Terrain(newProvider);
        const removeEventListener = terrain.readyEvent.addEventListener(
          (terrainProvider) => {
            if (cancelUpdate) {
              return;
            }
            this._globe.depthTestAgainstTerrain = !(terrainProvider instanceof EllipsoidTerrainProvider);
            this._globe.terrainProvider = terrainProvider;
            removeEventListener();
          }
        );
      }
      selectedTerrainViewModel(value);
      this.dropDownVisible = false;
    }
  });
  const that = this;
  this._toggleDropDown = createCommand_default(function() {
    that.dropDownVisible = !that.dropDownVisible;
  });
  this.selectedImagery = options.selectedImageryProviderViewModel ?? imageryProviderViewModels[0];
  this.selectedTerrain = options.selectedTerrainProviderViewModel;
}
Object.defineProperties(BaseLayerPickerViewModel.prototype, {
  /**
   * Gets the command to toggle the visibility of the drop down.
   * @memberof BaseLayerPickerViewModel.prototype
   *
   * @type {Command}
   */
  toggleDropDown: {
    get: function() {
      return this._toggleDropDown;
    }
  },
  /**
   * Gets the globe.
   * @memberof BaseLayerPickerViewModel.prototype
   *
   * @type {Globe}
   */
  globe: {
    get: function() {
      return this._globe;
    }
  }
});
var BaseLayerPickerViewModel_default = BaseLayerPickerViewModel;

// packages/widgets/Source/BaseLayerPicker/BaseLayerPicker.js
function BaseLayerPicker(container, options) {
  if (!defined8(container)) {
    throw new DeveloperError7("container is required.");
  }
  container = getElement2(container);
  const viewModel = new BaseLayerPickerViewModel_default(options);
  const element = document.createElement("button");
  element.type = "button";
  element.className = "cesium-button cesium-toolbar-button";
  element.setAttribute(
    "data-bind",
    "attr: { title: buttonTooltip },click: toggleDropDown"
  );
  container.appendChild(element);
  const imgElement = document.createElement("img");
  imgElement.setAttribute("draggable", "false");
  imgElement.className = "cesium-baseLayerPicker-selected";
  imgElement.setAttribute(
    "data-bind",
    "attr: { src: buttonImageUrl }, visible: !!buttonImageUrl"
  );
  element.appendChild(imgElement);
  const dropPanel = document.createElement("div");
  dropPanel.className = "cesium-baseLayerPicker-dropDown";
  dropPanel.setAttribute(
    "data-bind",
    'css: { "cesium-baseLayerPicker-dropDown-visible" : dropDownVisible }'
  );
  container.appendChild(dropPanel);
  const imageryTitle = document.createElement("div");
  imageryTitle.className = "cesium-baseLayerPicker-sectionTitle";
  imageryTitle.setAttribute(
    "data-bind",
    "visible: imageryProviderViewModels.length > 0"
  );
  imageryTitle.innerHTML = "Imagery";
  dropPanel.appendChild(imageryTitle);
  const imagerySection = document.createElement("div");
  imagerySection.className = "cesium-baseLayerPicker-section";
  imagerySection.setAttribute("data-bind", "foreach: _imageryProviders");
  dropPanel.appendChild(imagerySection);
  const imageryCategories = document.createElement("div");
  imageryCategories.className = "cesium-baseLayerPicker-category";
  imagerySection.appendChild(imageryCategories);
  const categoryTitle = document.createElement("div");
  categoryTitle.className = "cesium-baseLayerPicker-categoryTitle";
  categoryTitle.setAttribute("data-bind", "text: name");
  imageryCategories.appendChild(categoryTitle);
  const imageryChoices = document.createElement("div");
  imageryChoices.className = "cesium-baseLayerPicker-choices";
  imageryChoices.setAttribute("data-bind", "foreach: providers");
  imageryCategories.appendChild(imageryChoices);
  const imageryProvider = document.createElement("div");
  imageryProvider.className = "cesium-baseLayerPicker-item";
  imageryProvider.setAttribute(
    "data-bind",
    'css: { "cesium-baseLayerPicker-selectedItem" : $data === $parents[1].selectedImagery },attr: { title: tooltip },visible: creationCommand.canExecute,click: function($data) { $parents[1].selectedImagery = $data; }'
  );
  imageryChoices.appendChild(imageryProvider);
  const providerIcon = document.createElement("img");
  providerIcon.className = "cesium-baseLayerPicker-itemIcon";
  providerIcon.setAttribute("data-bind", "attr: { src: iconUrl }");
  providerIcon.setAttribute("draggable", "false");
  imageryProvider.appendChild(providerIcon);
  const providerLabel = document.createElement("div");
  providerLabel.className = "cesium-baseLayerPicker-itemLabel";
  providerLabel.setAttribute("data-bind", "text: name");
  imageryProvider.appendChild(providerLabel);
  const terrainTitle = document.createElement("div");
  terrainTitle.className = "cesium-baseLayerPicker-sectionTitle";
  terrainTitle.setAttribute(
    "data-bind",
    "visible: terrainProviderViewModels.length > 0"
  );
  terrainTitle.innerHTML = "Terrain";
  dropPanel.appendChild(terrainTitle);
  const terrainSection = document.createElement("div");
  terrainSection.className = "cesium-baseLayerPicker-section";
  terrainSection.setAttribute("data-bind", "foreach: _terrainProviders");
  dropPanel.appendChild(terrainSection);
  const terrainCategories = document.createElement("div");
  terrainCategories.className = "cesium-baseLayerPicker-category";
  terrainSection.appendChild(terrainCategories);
  const terrainCategoryTitle = document.createElement("div");
  terrainCategoryTitle.className = "cesium-baseLayerPicker-categoryTitle";
  terrainCategoryTitle.setAttribute("data-bind", "text: name");
  terrainCategories.appendChild(terrainCategoryTitle);
  const terrainChoices = document.createElement("div");
  terrainChoices.className = "cesium-baseLayerPicker-choices";
  terrainChoices.setAttribute("data-bind", "foreach: providers");
  terrainCategories.appendChild(terrainChoices);
  const terrainProvider = document.createElement("div");
  terrainProvider.className = "cesium-baseLayerPicker-item";
  terrainProvider.setAttribute(
    "data-bind",
    'css: { "cesium-baseLayerPicker-selectedItem" : $data === $parents[1].selectedTerrain },attr: { title: tooltip },visible: creationCommand.canExecute,click: function($data) { $parents[1].selectedTerrain = $data; }'
  );
  terrainChoices.appendChild(terrainProvider);
  const terrainProviderIcon = document.createElement("img");
  terrainProviderIcon.className = "cesium-baseLayerPicker-itemIcon";
  terrainProviderIcon.setAttribute("data-bind", "attr: { src: iconUrl }");
  terrainProviderIcon.setAttribute("draggable", "false");
  terrainProvider.appendChild(terrainProviderIcon);
  const terrainProviderLabel = document.createElement("div");
  terrainProviderLabel.className = "cesium-baseLayerPicker-itemLabel";
  terrainProviderLabel.setAttribute("data-bind", "text: name");
  terrainProvider.appendChild(terrainProviderLabel);
  knockout_default.applyBindings(viewModel, element);
  knockout_default.applyBindings(viewModel, dropPanel);
  this._viewModel = viewModel;
  this._container = container;
  this._element = element;
  this._dropPanel = dropPanel;
  this._closeDropDown = function(e) {
    if (!(element.contains(e.target) || dropPanel.contains(e.target))) {
      viewModel.dropDownVisible = false;
    }
  };
  if (FeatureDetection.supportsPointerEvents()) {
    document.addEventListener("pointerdown", this._closeDropDown, true);
  } else {
    document.addEventListener("mousedown", this._closeDropDown, true);
    document.addEventListener("touchstart", this._closeDropDown, true);
  }
}
Object.defineProperties(BaseLayerPicker.prototype, {
  /**
   * Gets the parent container.
   * @memberof BaseLayerPicker.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof BaseLayerPicker.prototype
   *
   * @type {BaseLayerPickerViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
BaseLayerPicker.prototype.isDestroyed = function() {
  return false;
};
BaseLayerPicker.prototype.destroy = function() {
  if (FeatureDetection.supportsPointerEvents()) {
    document.removeEventListener("pointerdown", this._closeDropDown, true);
  } else {
    document.removeEventListener("mousedown", this._closeDropDown, true);
    document.removeEventListener("touchstart", this._closeDropDown, true);
  }
  knockout_default.cleanNode(this._element);
  knockout_default.cleanNode(this._dropPanel);
  this._container.removeChild(this._element);
  this._container.removeChild(this._dropPanel);
  return destroyObject3(this);
};
var BaseLayerPicker_default = BaseLayerPicker;

// packages/widgets/Source/BaseLayerPicker/ProviderViewModel.js
import { defined as defined9, DeveloperError as DeveloperError8 } from "@cesium/engine";
function ProviderViewModel(options) {
  if (!defined9(options.name)) {
    throw new DeveloperError8("options.name is required.");
  }
  if (!defined9(options.tooltip)) {
    throw new DeveloperError8("options.tooltip is required.");
  }
  if (!defined9(options.iconUrl)) {
    throw new DeveloperError8("options.iconUrl is required.");
  }
  if (typeof options.creationFunction !== "function") {
    throw new DeveloperError8("options.creationFunction is required.");
  }
  let creationCommand = options.creationFunction;
  if (!defined9(creationCommand.canExecute)) {
    creationCommand = createCommand_default(creationCommand);
  }
  this._creationCommand = creationCommand;
  this.name = options.name;
  this.tooltip = options.tooltip;
  this.iconUrl = options.iconUrl;
  this._category = options.category ?? "";
  knockout_default.track(this, ["name", "tooltip", "iconUrl"]);
}
Object.defineProperties(ProviderViewModel.prototype, {
  /**
   * Gets the Command that creates one or more providers which will be added to
   * the globe when this item is selected.
   * @memberof ProviderViewModel.prototype
   * @memberof ProviderViewModel.prototype
   * @type {Command}
   * @readonly
   */
  creationCommand: {
    get: function() {
      return this._creationCommand;
    }
  },
  /**
   * Gets the category
   * @type {string}
   * @memberof ProviderViewModel.prototype
   * @readonly
   */
  category: {
    get: function() {
      return this._category;
    }
  }
});
var ProviderViewModel_default = ProviderViewModel;

// packages/widgets/Source/BaseLayerPicker/createDefaultImageryProviderViewModels.js
import {
  ArcGisMapServerImageryProvider,
  buildModuleUrl,
  createWorldImageryAsync,
  IonImageryProvider,
  IonWorldImageryStyle,
  OpenStreetMapImageryProvider,
  TileMapServiceImageryProvider,
  ArcGisBaseMapType
} from "@cesium/engine";
function createDefaultImageryProviderViewModels() {
  const providerViewModels = [];
  const useRetinaTiles = devicePixelRatio >= 2;
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Bing Maps Aerial",
      iconUrl: buildModuleUrl("Widgets/Images/ImageryProviders/bingAerial.png"),
      tooltip: "Bing Maps aerial imagery, provided by Cesium ion",
      category: "Cesium ion",
      creationFunction: function() {
        return createWorldImageryAsync({
          style: IonWorldImageryStyle.AERIAL
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Bing Maps Aerial with Labels",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/bingAerialLabels.png"
      ),
      tooltip: "Bing Maps aerial imagery with labels, provided by Cesium ion",
      category: "Cesium ion",
      creationFunction: function() {
        return createWorldImageryAsync({
          style: IonWorldImageryStyle.AERIAL_WITH_LABELS
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Bing Maps Roads",
      iconUrl: buildModuleUrl("Widgets/Images/ImageryProviders/bingRoads.png"),
      tooltip: "Bing Maps standard road maps, provided by Cesium ion",
      category: "Cesium ion",
      creationFunction: function() {
        return createWorldImageryAsync({
          style: IonWorldImageryStyle.ROAD
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "ArcGIS World Imagery",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/ArcGisMapServiceWorldImagery.png"
      ),
      tooltip: "ArcGIS World Imagery provides one meter or better satellite and aerial imagery in many parts of the world and lower resolution satellite imagery worldwide. The map includes 15m TerraColor imagery at small and mid-scales (~1:591M down to ~1:288k) for the world. The map features Maxar imagery at 0.3m resolution for select metropolitan areas around the world, 0.5m resolution across the United States and parts of Western Europe, and 1m resolution imagery across the rest of the world. In addition to commercial sources, the World Imagery map features high-resolution aerial photography contributed by the GIS User Community. This imagery ranges from 0.3m to 0.03m resolution (down to ~1:280 nin select communities). For more information on this map, including the terms of use, visit us online at \nhttps://www.arcgis.com/home/item.html?id=10df2279f9684e4a9f6a7f08febac2a9",
      category: "Other",
      creationFunction: function() {
        return ArcGisMapServerImageryProvider.fromBasemapType(
          ArcGisBaseMapType.SATELLITE,
          {
            enablePickFeatures: false
          }
        );
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "ArcGIS World Hillshade",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/ArcGisMapServiceWorldHillshade.png"
      ),
      tooltip: "ArcGIS World Hillshade map portrays elevation as an artistic hillshade. This map is designed to be used as a backdrop for topographical, soil, hydro, landcover or other outdoor recreational maps. The map was compiled from a variety of sources from several data providers. The basemap has global coverage down to a scale of ~1:72k. In select areas of the United States and Europe, coverage is available down to ~1:9k. For more information on this map, including the terms of use, visit us online at \nhttps://www.arcgis.com/home/item.html?id=1b243539f4514b6ba35e7d995890db1d",
      category: "Other",
      creationFunction: function() {
        return ArcGisMapServerImageryProvider.fromBasemapType(
          ArcGisBaseMapType.HILLSHADE,
          {
            enablePickFeatures: false
          }
        );
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Esri World Ocean",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/ArcGisMapServiceWorldOcean.png"
      ),
      tooltip: "ArcGIS World Ocean map is designed to be used as a base map by marine GIS professionals and as a reference map by anyone interested in ocean data.  The base map features marine bathymetry. Land features include inland waters and roads overlaid on land cover and shaded relief imagery. The map was compiled from a variety of best available sources from several data providers, including General Bathymetric Chart of the Oceans GEBCO_08 Grid, National Oceanic and Atmospheric Administration (NOAA), and National Geographic, Garmin, HERE, Geonames.org, and Esri, and various other contributors. The base map currently provides coverage for the world down to a scale of ~1:577k, and coverage down to 1:72k in US coastal areas, and various other areas. Coverage down to ~ 1:9k is available limited areas based on regional hydrographic survey data. The base map was designed and developed by Esri. For more information on this map, including our terms of use, visit us online at \nhttps://www.arcgis.com/home/item.html?id=1e126e7520f9466c9ca28b8f28b5e500",
      category: "Other",
      creationFunction: function() {
        return ArcGisMapServerImageryProvider.fromBasemapType(
          ArcGisBaseMapType.OCEANS,
          {
            enablePickFeatures: false
          }
        );
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Open\xADStreet\xADMap",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/openStreetMap.png"
      ),
      tooltip: "OpenStreetMap (OSM) is a collaborative project to create a free editable map of the world.\nhttp://www.openstreetmap.org",
      category: "Other",
      creationFunction: function() {
        return new OpenStreetMapImageryProvider({
          url: "https://tile.openstreetmap.org/"
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Stadia x Stamen Watercolor",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/stamenWatercolor.png"
      ),
      tooltip: "Based on the original basemaps created for the Knight Foundation and reminiscent of hand drawn maps, the watercolor maps from Stamen Design apply raster effect area washes and organic edges over a paper texture to add warm pop to any map.\nhttps://docs.stadiamaps.com/map-styles/stamen-watercolor/",
      category: "Other",
      creationFunction: function() {
        return new OpenStreetMapImageryProvider({
          url: "https://tiles.stadiamaps.com/tiles/stamen_watercolor/",
          fileExtension: "jpg",
          credit: `&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>
           &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>
           &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
           &copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>`
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Stadia x Stamen Toner",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/stamenToner.png"
      ),
      tooltip: "Based on the original basemaps created for the Knight Foundation and the most popular of the excellent styles from Stamen Design, these high-contrast B+W (black and white) maps are the perfect backdrop for your colorful and eye-catching overlays.\nhttps://docs.stadiamaps.com/map-styles/stamen-toner/",
      category: "Other",
      creationFunction: function() {
        return new OpenStreetMapImageryProvider({
          url: "https://tiles.stadiamaps.com/tiles/stamen_toner/",
          retinaTiles: useRetinaTiles,
          credit: `&copy; <a href="https://stamen.com/" target="_blank">Stamen Design</a>
            &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>
            &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
            &copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>`
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Stadia Alidade Smooth",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/stadiaAlidadeSmooth.png"
      ),
      tooltip: "Stadia's custom Alidade Smooth style is designed for maps that use a lot of markers or overlays. It features a muted color scheme and fewer points of interest to allow your added data to shine.\nhttps://docs.stadiamaps.com/map-styles/alidade-smooth/",
      category: "Other",
      creationFunction: function() {
        return new OpenStreetMapImageryProvider({
          url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/",
          retinaTiles: useRetinaTiles,
          credit: `&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>
            &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
            &copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>`
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Stadia Alidade Smooth Dark",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/stadiaAlidadeSmoothDark.png"
      ),
      tooltip: "Stadia Alidade Smooth Dark, like its lighter cousin, is also designed to stay out of the way. It just flips the dark mode switch on the color scheme. With the lights out, your data can now literally shine.\nhttps://docs.stadiamaps.com/map-styles/alidade-smooth-dark/",
      category: "Other",
      creationFunction: function() {
        return new OpenStreetMapImageryProvider({
          url: "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/",
          retinaTiles: useRetinaTiles,
          credit: `&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a>
            &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a>
            &copy; <a href="https://www.openstreetmap.org/about/" target="_blank">OpenStreetMap contributors</a>`
        });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Sentinel-2",
      iconUrl: buildModuleUrl("Widgets/Images/ImageryProviders/sentinel-2.png"),
      tooltip: "Sentinel-2 cloudless by EOX IT Services GmbH (Contains modified Copernicus Sentinel data 2016 and 2017).",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3954);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Blue Marble",
      iconUrl: buildModuleUrl("Widgets/Images/ImageryProviders/blueMarble.png"),
      tooltip: "Blue Marble Next Generation July, 2004 imagery from NASA.",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3845);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Earth at night",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/earthAtNight.png"
      ),
      tooltip: "The Earth at night, also known as The Black Marble, is a 500 meter resolution global composite imagery layer released by NASA.",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3812);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Natural Earth\xA0II",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/naturalEarthII.png"
      ),
      tooltip: "Natural Earth II, darkened for contrast.\nhttp://www.naturalearthdata.com/",
      category: "Cesium ion",
      creationFunction: function() {
        return TileMapServiceImageryProvider.fromUrl(
          buildModuleUrl("Assets/Textures/NaturalEarthII")
        );
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Google Maps Satellite",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/googleSatellite.png"
      ),
      tooltip: "Imagery from Google Maps",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3830182);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Google Maps Satellite with Labels",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/googleSatelliteLabels.png"
      ),
      tooltip: "Imagery with place labels from Google Maps",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3830183);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Google Maps Roadmap",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/googleRoadmap.png"
      ),
      tooltip: "Labeled roads and other features on a base landscape from Google Maps",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3830184);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Google Maps Contour",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/googleContour.png"
      ),
      tooltip: "Hillshade mapping, contour lines, natural features (roadmap features hidden) from Google Maps",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3830186);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Azure Maps Aerial",
      iconUrl: buildModuleUrl(
        "Widgets/Images/ImageryProviders/azureAerial.png"
      ),
      tooltip: "Imagery from Azure Maps",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3891168);
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Azure Maps Roads",
      iconUrl: buildModuleUrl("Widgets/Images/ImageryProviders/azureRoads.png"),
      tooltip: "Labeled roads and other features on a base landscape from Azure Maps",
      category: "Cesium ion",
      creationFunction: function() {
        return IonImageryProvider.fromAssetId(3891169);
      }
    })
  );
  return providerViewModels;
}
var createDefaultImageryProviderViewModels_default = createDefaultImageryProviderViewModels;

// packages/widgets/Source/BaseLayerPicker/createDefaultTerrainProviderViewModels.js
import {
  buildModuleUrl as buildModuleUrl2,
  createWorldTerrainAsync,
  Ellipsoid,
  EllipsoidTerrainProvider as EllipsoidTerrainProvider2
} from "@cesium/engine";
function createDefaultTerrainProviderViewModels() {
  const providerViewModels = [];
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "WGS84 Ellipsoid",
      iconUrl: buildModuleUrl2("Widgets/Images/TerrainProviders/Ellipsoid.png"),
      tooltip: "WGS84 standard ellipsoid, also known as EPSG:4326",
      category: "Cesium ion",
      creationFunction: function() {
        return new EllipsoidTerrainProvider2({ ellipsoid: Ellipsoid.WGS84 });
      }
    })
  );
  providerViewModels.push(
    new ProviderViewModel_default({
      name: "Cesium World Terrain",
      iconUrl: buildModuleUrl2(
        "Widgets/Images/TerrainProviders/CesiumWorldTerrain.png"
      ),
      tooltip: "High-resolution global terrain tileset curated from several datasources and hosted by Cesium ion",
      category: "Cesium ion",
      creationFunction: function() {
        return createWorldTerrainAsync({
          requestWaterMask: true,
          requestVertexNormals: true
        });
      }
    })
  );
  return providerViewModels;
}
var createDefaultTerrainProviderViewModels_default = createDefaultTerrainProviderViewModels;

// packages/widgets/Source/CesiumInspector/CesiumInspector.js
import {
  defined as defined11,
  destroyObject as destroyObject5,
  DeveloperError as DeveloperError10,
  getElement as getElement3
} from "@cesium/engine";

// packages/widgets/Source/CesiumInspector/CesiumInspectorViewModel.js
import {
  Cartesian3,
  defined as defined10,
  destroyObject as destroyObject4,
  DebugModelMatrixPrimitive,
  DeveloperError as DeveloperError9,
  PerformanceDisplay,
  Ray,
  Rectangle,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  TileCoordinatesImageryProvider
} from "@cesium/engine";
function frustumStatisticsToString(statistics) {
  let str;
  if (defined10(statistics)) {
    str = "Command Statistics";
    const com = statistics.commandsInFrustums;
    for (const n in com) {
      if (com.hasOwnProperty(n)) {
        let num = parseInt(n, 10);
        let s;
        if (num === 7) {
          s = "1, 2 and 3";
        } else {
          const f = [];
          for (let i = 2; i >= 0; i--) {
            const p = Math.pow(2, i);
            if (num >= p) {
              f.push(i + 1);
              num -= p;
            }
          }
          s = f.reverse().join(" and ");
        }
        str += `<br>&nbsp;&nbsp;&nbsp;&nbsp;${com[n]} in frustum ${s}`;
      }
    }
    str += `<br>Total: ${statistics.totalCommands}`;
  }
  return str;
}
function boundDepthFrustum(lower, upper, proposed) {
  let bounded = Math.min(proposed, upper);
  bounded = Math.max(bounded, lower);
  return bounded;
}
var scratchPickRay = new Ray();
var scratchPickCartesian = new Cartesian3();
function CesiumInspectorViewModel(scene, performanceContainer) {
  if (!defined10(scene)) {
    throw new DeveloperError9("scene is required");
  }
  if (!defined10(performanceContainer)) {
    throw new DeveloperError9("performanceContainer is required");
  }
  const that = this;
  const canvas = scene.canvas;
  const eventHandler = new ScreenSpaceEventHandler(canvas);
  this._eventHandler = eventHandler;
  this._scene = scene;
  this._canvas = canvas;
  this._primitive = void 0;
  this._tile = void 0;
  this._modelMatrixPrimitive = void 0;
  this._performanceDisplay = void 0;
  this._performanceContainer = performanceContainer;
  const globe = this._scene.globe;
  globe.depthTestAgainstTerrain = true;
  this.frustums = false;
  this.frustumPlanes = false;
  this.performance = false;
  this.shaderCacheText = "";
  this.primitiveBoundingSphere = false;
  this.primitiveReferenceFrame = false;
  this.filterPrimitive = false;
  this.tileBoundingSphere = false;
  this.filterTile = false;
  this.wireframe = false;
  this.depthFrustum = 1;
  this._numberOfFrustums = 1;
  this.suspendUpdates = false;
  this.tileCoordinates = false;
  this.frustumStatisticText = false;
  this.tileText = "";
  this.hasPickedPrimitive = false;
  this.hasPickedTile = false;
  this.pickPrimitiveActive = false;
  this.pickTileActive = false;
  this.dropDownVisible = true;
  this.generalVisible = true;
  this.primitivesVisible = false;
  this.terrainVisible = false;
  this.depthFrustumText = "";
  knockout_default.track(this, [
    "frustums",
    "frustumPlanes",
    "performance",
    "shaderCacheText",
    "primitiveBoundingSphere",
    "primitiveReferenceFrame",
    "filterPrimitive",
    "tileBoundingSphere",
    "filterTile",
    "wireframe",
    "depthFrustum",
    "suspendUpdates",
    "tileCoordinates",
    "frustumStatisticText",
    "tileText",
    "hasPickedPrimitive",
    "hasPickedTile",
    "pickPrimitiveActive",
    "pickTileActive",
    "dropDownVisible",
    "generalVisible",
    "primitivesVisible",
    "terrainVisible",
    "depthFrustumText"
  ]);
  this._toggleDropDown = createCommand_default(function() {
    that.dropDownVisible = !that.dropDownVisible;
  });
  this._toggleGeneral = createCommand_default(function() {
    that.generalVisible = !that.generalVisible;
  });
  this._togglePrimitives = createCommand_default(function() {
    that.primitivesVisible = !that.primitivesVisible;
  });
  this._toggleTerrain = createCommand_default(function() {
    that.terrainVisible = !that.terrainVisible;
  });
  this._frustumsSubscription = knockout_default.getObservable(this, "frustums").subscribe(function(val) {
    that._scene.debugShowFrustums = val;
    that._scene.requestRender();
  });
  this._frustumPlanesSubscription = knockout_default.getObservable(this, "frustumPlanes").subscribe(function(val) {
    that._scene.debugShowFrustumPlanes = val;
    that._scene.requestRender();
  });
  this._performanceSubscription = knockout_default.getObservable(this, "performance").subscribe(function(val) {
    if (val) {
      that._performanceDisplay = new PerformanceDisplay({
        container: that._performanceContainer
      });
    } else {
      that._performanceContainer.innerHTML = "";
    }
  });
  this._showPrimitiveBoundingSphere = createCommand_default(function() {
    that._primitive.debugShowBoundingVolume = that.primitiveBoundingSphere;
    that._scene.requestRender();
    return true;
  });
  this._primitiveBoundingSphereSubscription = knockout_default.getObservable(this, "primitiveBoundingSphere").subscribe(function() {
    that._showPrimitiveBoundingSphere();
  });
  this._showPrimitiveReferenceFrame = createCommand_default(function() {
    if (that.primitiveReferenceFrame) {
      const modelMatrix = that._primitive.modelMatrix;
      that._modelMatrixPrimitive = new DebugModelMatrixPrimitive({
        modelMatrix
      });
      that._scene.primitives.add(that._modelMatrixPrimitive);
    } else if (defined10(that._modelMatrixPrimitive)) {
      that._scene.primitives.remove(that._modelMatrixPrimitive);
      that._modelMatrixPrimitive = void 0;
    }
    that._scene.requestRender();
    return true;
  });
  this._primitiveReferenceFrameSubscription = knockout_default.getObservable(this, "primitiveReferenceFrame").subscribe(function() {
    that._showPrimitiveReferenceFrame();
  });
  this._doFilterPrimitive = createCommand_default(function() {
    if (that.filterPrimitive) {
      that._scene.debugCommandFilter = function(command) {
        if (defined10(that._modelMatrixPrimitive) && command.owner === that._modelMatrixPrimitive._primitive) {
          return true;
        } else if (defined10(that._primitive)) {
          return command.owner === that._primitive || command.owner === that._primitive._billboardCollection || command.owner.primitive === that._primitive;
        }
        return false;
      };
    } else {
      that._scene.debugCommandFilter = void 0;
    }
    return true;
  });
  this._filterPrimitiveSubscription = knockout_default.getObservable(this, "filterPrimitive").subscribe(function() {
    that._doFilterPrimitive();
    that._scene.requestRender();
  });
  this._wireframeSubscription = knockout_default.getObservable(this, "wireframe").subscribe(function(val) {
    globe._surface.tileProvider._debug.wireframe = val;
    that._scene.requestRender();
  });
  this._depthFrustumSubscription = knockout_default.getObservable(this, "depthFrustum").subscribe(function(val) {
    that._scene.debugShowDepthFrustum = val;
    that._scene.requestRender();
  });
  this._incrementDepthFrustum = createCommand_default(function() {
    const next = that.depthFrustum + 1;
    that.depthFrustum = boundDepthFrustum(1, that._numberOfFrustums, next);
    that._scene.requestRender();
    return true;
  });
  this._decrementDepthFrustum = createCommand_default(function() {
    const next = that.depthFrustum - 1;
    that.depthFrustum = boundDepthFrustum(1, that._numberOfFrustums, next);
    that._scene.requestRender();
    return true;
  });
  this._suspendUpdatesSubscription = knockout_default.getObservable(this, "suspendUpdates").subscribe(function(val) {
    globe._surface._debug.suspendLodUpdate = val;
    if (!val) {
      that.filterTile = false;
    }
  });
  let tileBoundariesLayer;
  this._showTileCoordinates = createCommand_default(function() {
    if (that.tileCoordinates && !defined10(tileBoundariesLayer)) {
      tileBoundariesLayer = scene.imageryLayers.addImageryProvider(
        new TileCoordinatesImageryProvider({
          tilingScheme: scene.terrainProvider.tilingScheme
        })
      );
    } else if (!that.tileCoordinates && defined10(tileBoundariesLayer)) {
      scene.imageryLayers.remove(tileBoundariesLayer);
      tileBoundariesLayer = void 0;
    }
    return true;
  });
  this._tileCoordinatesSubscription = knockout_default.getObservable(this, "tileCoordinates").subscribe(function() {
    that._showTileCoordinates();
    that._scene.requestRender();
  });
  this._tileBoundingSphereSubscription = knockout_default.getObservable(this, "tileBoundingSphere").subscribe(function() {
    that._showTileBoundingSphere();
    that._scene.requestRender();
  });
  this._showTileBoundingSphere = createCommand_default(function() {
    if (that.tileBoundingSphere) {
      globe._surface.tileProvider._debug.boundingSphereTile = that._tile;
    } else {
      globe._surface.tileProvider._debug.boundingSphereTile = void 0;
    }
    that._scene.requestRender();
    return true;
  });
  this._doFilterTile = createCommand_default(function() {
    if (!that.filterTile) {
      that.suspendUpdates = false;
    } else {
      that.suspendUpdates = true;
      globe._surface._tilesToRender = [];
      if (defined10(that._tile) && that._tile.renderable) {
        globe._surface._tilesToRender.push(that._tile);
      }
    }
    return true;
  });
  this._filterTileSubscription = knockout_default.getObservable(this, "filterTile").subscribe(function() {
    that.doFilterTile();
    that._scene.requestRender();
  });
  function pickPrimitive(e) {
    const newPick = that._scene.pick({
      x: e.position.x,
      y: e.position.y
    });
    if (defined10(newPick)) {
      that.primitive = defined10(newPick.collection) ? newPick.collection : newPick.primitive;
    }
    that._scene.requestRender();
    that.pickPrimitiveActive = false;
  }
  this._pickPrimitive = createCommand_default(function() {
    that.pickPrimitiveActive = !that.pickPrimitiveActive;
  });
  this._pickPrimitiveActiveSubscription = knockout_default.getObservable(this, "pickPrimitiveActive").subscribe(function(val) {
    if (val) {
      eventHandler.setInputAction(
        pickPrimitive,
        ScreenSpaceEventType.LEFT_CLICK
      );
    } else {
      eventHandler.removeInputAction(ScreenSpaceEventType.LEFT_CLICK);
    }
  });
  function selectTile(e) {
    let selectedTile;
    const ellipsoid = globe.ellipsoid;
    const ray = that._scene.camera.getPickRay(e.position, scratchPickRay);
    const cartesian = globe.pick(ray, that._scene, scratchPickCartesian);
    if (defined10(cartesian)) {
      const cartographic = ellipsoid.cartesianToCartographic(cartesian);
      const tilesRendered = globe._surface.tileProvider._tilesToRenderByTextureCount;
      for (let textureCount = 0; !selectedTile && textureCount < tilesRendered.length; ++textureCount) {
        const tilesRenderedByTextureCount = tilesRendered[textureCount];
        if (!defined10(tilesRenderedByTextureCount)) {
          continue;
        }
        for (let tileIndex = 0; !selectedTile && tileIndex < tilesRenderedByTextureCount.length; ++tileIndex) {
          const tile = tilesRenderedByTextureCount[tileIndex];
          if (Rectangle.contains(tile.rectangle, cartographic)) {
            selectedTile = tile;
          }
        }
      }
    }
    that.tile = selectedTile;
    that.pickTileActive = false;
  }
  this._pickTile = createCommand_default(function() {
    that.pickTileActive = !that.pickTileActive;
  });
  this._pickTileActiveSubscription = knockout_default.getObservable(this, "pickTileActive").subscribe(function(val) {
    if (val) {
      eventHandler.setInputAction(
        selectTile,
        ScreenSpaceEventType.LEFT_CLICK
      );
    } else {
      eventHandler.removeInputAction(ScreenSpaceEventType.LEFT_CLICK);
    }
  });
  this._removePostRenderEvent = scene.postRender.addEventListener(function() {
    that._update();
  });
}
Object.defineProperties(CesiumInspectorViewModel.prototype, {
  /**
   * Gets the scene to control.
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the container of the PerformanceDisplay
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Element}
   */
  performanceContainer: {
    get: function() {
      return this._performanceContainer;
    }
  },
  /**
   * Gets the command to toggle the visibility of the drop down.
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  toggleDropDown: {
    get: function() {
      return this._toggleDropDown;
    }
  },
  /**
   * Gets the command to toggle the visibility of a BoundingSphere for a primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showPrimitiveBoundingSphere: {
    get: function() {
      return this._showPrimitiveBoundingSphere;
    }
  },
  /**
   * Gets the command to toggle the visibility of a {@link DebugModelMatrixPrimitive} for the model matrix of a primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showPrimitiveReferenceFrame: {
    get: function() {
      return this._showPrimitiveReferenceFrame;
    }
  },
  /**
   * Gets the command to toggle a filter that renders only a selected primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  doFilterPrimitive: {
    get: function() {
      return this._doFilterPrimitive;
    }
  },
  /**
   * Gets the command to increment the depth frustum index to be shown
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  incrementDepthFrustum: {
    get: function() {
      return this._incrementDepthFrustum;
    }
  },
  /**
   * Gets the command to decrement the depth frustum index to be shown
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  decrementDepthFrustum: {
    get: function() {
      return this._decrementDepthFrustum;
    }
  },
  /**
   * Gets the command to toggle the visibility of tile coordinates
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showTileCoordinates: {
    get: function() {
      return this._showTileCoordinates;
    }
  },
  /**
   * Gets the command to toggle the visibility of a BoundingSphere for a selected tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  showTileBoundingSphere: {
    get: function() {
      return this._showTileBoundingSphere;
    }
  },
  /**
   * Gets the command to toggle a filter that renders only a selected tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  doFilterTile: {
    get: function() {
      return this._doFilterTile;
    }
  },
  /**
   * Gets the command to expand and collapse the general section
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  toggleGeneral: {
    get: function() {
      return this._toggleGeneral;
    }
  },
  /**
   * Gets the command to expand and collapse the primitives section
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  togglePrimitives: {
    get: function() {
      return this._togglePrimitives;
    }
  },
  /**
   * Gets the command to expand and collapse the terrain section
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  toggleTerrain: {
    get: function() {
      return this._toggleTerrain;
    }
  },
  /**
   * Gets the command to pick a primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  pickPrimitive: {
    get: function() {
      return this._pickPrimitive;
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  pickTile: {
    get: function() {
      return this._pickTile;
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectParent: {
    get: function() {
      const that = this;
      return createCommand_default(function() {
        that.tile = that.tile.parent;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectNW: {
    get: function() {
      const that = this;
      return createCommand_default(function() {
        that.tile = that.tile.northwestChild;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectNE: {
    get: function() {
      const that = this;
      return createCommand_default(function() {
        that.tile = that.tile.northeastChild;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectSW: {
    get: function() {
      const that = this;
      return createCommand_default(function() {
        that.tile = that.tile.southwestChild;
      });
    }
  },
  /**
   * Gets the command to pick a tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  selectSE: {
    get: function() {
      const that = this;
      return createCommand_default(function() {
        that.tile = that.tile.southeastChild;
      });
    }
  },
  /**
   * Gets or sets the current selected primitive
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  primitive: {
    get: function() {
      return this._primitive;
    },
    set: function(newPrimitive) {
      const oldPrimitive = this._primitive;
      if (newPrimitive !== oldPrimitive) {
        this.hasPickedPrimitive = true;
        if (defined10(oldPrimitive)) {
          oldPrimitive.debugShowBoundingVolume = false;
        }
        this._scene.debugCommandFilter = void 0;
        if (defined10(this._modelMatrixPrimitive)) {
          this._scene.primitives.remove(this._modelMatrixPrimitive);
          this._modelMatrixPrimitive = void 0;
        }
        this._primitive = newPrimitive;
        newPrimitive.show = false;
        setTimeout(function() {
          newPrimitive.show = true;
        }, 50);
        this.showPrimitiveBoundingSphere();
        this.showPrimitiveReferenceFrame();
        this.doFilterPrimitive();
      }
    }
  },
  /**
   * Gets or sets the current selected tile
   * @memberof CesiumInspectorViewModel.prototype
   *
   * @type {Command}
   */
  tile: {
    get: function() {
      return this._tile;
    },
    set: function(newTile) {
      if (defined10(newTile)) {
        this.hasPickedTile = true;
        const oldTile = this._tile;
        if (newTile !== oldTile) {
          this.tileText = `L: ${newTile.level} X: ${newTile.x} Y: ${newTile.y}`;
          this.tileText += `<br>SW corner: ${newTile.rectangle.west}, ${newTile.rectangle.south}`;
          this.tileText += `<br>NE corner: ${newTile.rectangle.east}, ${newTile.rectangle.north}`;
          const data = newTile.data;
          if (defined10(data) && defined10(data.tileBoundingRegion)) {
            this.tileText += `<br>Min: ${data.tileBoundingRegion.minimumHeight} Max: ${data.tileBoundingRegion.maximumHeight}`;
          } else {
            this.tileText += "<br>(Tile is not loaded)";
          }
        }
        this._tile = newTile;
        this.showTileBoundingSphere();
        this.doFilterTile();
      } else {
        this.hasPickedTile = false;
        this._tile = void 0;
      }
    }
  }
});
CesiumInspectorViewModel.prototype._update = function() {
  if (this.frustums) {
    this.frustumStatisticText = frustumStatisticsToString(
      this._scene.debugFrustumStatistics
    );
  }
  const numberOfFrustums = this._scene.numberOfFrustums;
  this._numberOfFrustums = numberOfFrustums;
  this.depthFrustum = boundDepthFrustum(1, numberOfFrustums, this.depthFrustum);
  this.depthFrustumText = `${this.depthFrustum} of ${numberOfFrustums}`;
  if (this.performance) {
    this._performanceDisplay.update();
  }
  if (this.primitiveReferenceFrame) {
    this._modelMatrixPrimitive.modelMatrix = this._primitive.modelMatrix;
  }
  this.shaderCacheText = `Cached shaders: ${this._scene.context.shaderCache.numberOfShaders}`;
};
CesiumInspectorViewModel.prototype.isDestroyed = function() {
  return false;
};
CesiumInspectorViewModel.prototype.destroy = function() {
  this._eventHandler.destroy();
  this._removePostRenderEvent();
  this._frustumsSubscription.dispose();
  this._frustumPlanesSubscription.dispose();
  this._performanceSubscription.dispose();
  this._primitiveBoundingSphereSubscription.dispose();
  this._primitiveReferenceFrameSubscription.dispose();
  this._filterPrimitiveSubscription.dispose();
  this._wireframeSubscription.dispose();
  this._depthFrustumSubscription.dispose();
  this._suspendUpdatesSubscription.dispose();
  this._tileCoordinatesSubscription.dispose();
  this._tileBoundingSphereSubscription.dispose();
  this._filterTileSubscription.dispose();
  this._pickPrimitiveActiveSubscription.dispose();
  this._pickTileActiveSubscription.dispose();
  return destroyObject4(this);
};
var CesiumInspectorViewModel_default = CesiumInspectorViewModel;

// packages/widgets/Source/CesiumInspector/CesiumInspector.js
function CesiumInspector(container, scene) {
  if (!defined11(container)) {
    throw new DeveloperError10("container is required.");
  }
  if (!defined11(scene)) {
    throw new DeveloperError10("scene is required.");
  }
  container = getElement3(container);
  const performanceContainer = document.createElement("div");
  const viewModel = new CesiumInspectorViewModel_default(scene, performanceContainer);
  this._viewModel = viewModel;
  this._container = container;
  const element = document.createElement("div");
  this._element = element;
  const text = document.createElement("div");
  text.textContent = "Cesium Inspector";
  text.className = "cesium-cesiumInspector-button";
  text.setAttribute("data-bind", "click: toggleDropDown");
  element.appendChild(text);
  element.className = "cesium-cesiumInspector";
  element.setAttribute(
    "data-bind",
    'css: { "cesium-cesiumInspector-visible" : dropDownVisible, "cesium-cesiumInspector-hidden" : !dropDownVisible }'
  );
  container.appendChild(this._element);
  const panel = document.createElement("div");
  panel.className = "cesium-cesiumInspector-dropDown";
  element.appendChild(panel);
  const createSection = InspectorShared_default.createSection;
  const createCheckbox = InspectorShared_default.createCheckbox;
  const generalSection = createSection(
    panel,
    "General",
    "generalVisible",
    "toggleGeneral"
  );
  const debugShowFrustums = createCheckbox("Show Frustums", "frustums");
  const frustumStatistics = document.createElement("div");
  frustumStatistics.className = "cesium-cesiumInspector-frustumStatistics";
  frustumStatistics.setAttribute(
    "data-bind",
    "visible: frustums, html: frustumStatisticText"
  );
  debugShowFrustums.appendChild(frustumStatistics);
  generalSection.appendChild(debugShowFrustums);
  generalSection.appendChild(
    createCheckbox("Show Frustum Planes", "frustumPlanes")
  );
  generalSection.appendChild(
    createCheckbox("Performance Display", "performance")
  );
  performanceContainer.className = "cesium-cesiumInspector-performanceDisplay";
  generalSection.appendChild(performanceContainer);
  const shaderCacheDisplay = document.createElement("div");
  shaderCacheDisplay.className = "cesium-cesiumInspector-shaderCache";
  shaderCacheDisplay.setAttribute("data-bind", "html: shaderCacheText");
  generalSection.appendChild(shaderCacheDisplay);
  const depthFrustum = document.createElement("div");
  generalSection.appendChild(depthFrustum);
  const gLabel = document.createElement("span");
  gLabel.setAttribute(
    "data-bind",
    'html: "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Frustum:"'
  );
  depthFrustum.appendChild(gLabel);
  const gText = document.createElement("span");
  gText.setAttribute("data-bind", "text: depthFrustumText");
  depthFrustum.appendChild(gText);
  const gMinusButton = document.createElement("input");
  gMinusButton.type = "button";
  gMinusButton.value = "-";
  gMinusButton.className = "cesium-cesiumInspector-pickButton";
  gMinusButton.setAttribute("data-bind", "click: decrementDepthFrustum");
  depthFrustum.appendChild(gMinusButton);
  const gPlusButton = document.createElement("input");
  gPlusButton.type = "button";
  gPlusButton.value = "+";
  gPlusButton.className = "cesium-cesiumInspector-pickButton";
  gPlusButton.setAttribute("data-bind", "click: incrementDepthFrustum");
  depthFrustum.appendChild(gPlusButton);
  const primSection = createSection(
    panel,
    "Primitives",
    "primitivesVisible",
    "togglePrimitives"
  );
  const pickPrimRequired = document.createElement("div");
  pickPrimRequired.className = "cesium-cesiumInspector-pickSection";
  primSection.appendChild(pickPrimRequired);
  const pickPrimitiveButton = document.createElement("input");
  pickPrimitiveButton.type = "button";
  pickPrimitiveButton.value = "Pick a primitive";
  pickPrimitiveButton.className = "cesium-cesiumInspector-pickButton";
  pickPrimitiveButton.setAttribute(
    "data-bind",
    'css: {"cesium-cesiumInspector-pickButtonHighlight" : pickPrimitiveActive}, click: pickPrimitive'
  );
  let buttonWrap = document.createElement("div");
  buttonWrap.className = "cesium-cesiumInspector-center";
  buttonWrap.appendChild(pickPrimitiveButton);
  pickPrimRequired.appendChild(buttonWrap);
  pickPrimRequired.appendChild(
    createCheckbox(
      "Show bounding sphere",
      "primitiveBoundingSphere",
      "hasPickedPrimitive"
    )
  );
  pickPrimRequired.appendChild(
    createCheckbox(
      "Show reference frame",
      "primitiveReferenceFrame",
      "hasPickedPrimitive"
    )
  );
  this._primitiveOnly = createCheckbox(
    "Show only selected",
    "filterPrimitive",
    "hasPickedPrimitive"
  );
  pickPrimRequired.appendChild(this._primitiveOnly);
  const terrainSection = createSection(
    panel,
    "Terrain",
    "terrainVisible",
    "toggleTerrain"
  );
  const pickTileRequired = document.createElement("div");
  pickTileRequired.className = "cesium-cesiumInspector-pickSection";
  terrainSection.appendChild(pickTileRequired);
  const pickTileButton = document.createElement("input");
  pickTileButton.type = "button";
  pickTileButton.value = "Pick a tile";
  pickTileButton.className = "cesium-cesiumInspector-pickButton";
  pickTileButton.setAttribute(
    "data-bind",
    'css: {"cesium-cesiumInspector-pickButtonHighlight" : pickTileActive}, click: pickTile'
  );
  buttonWrap = document.createElement("div");
  buttonWrap.appendChild(pickTileButton);
  buttonWrap.className = "cesium-cesiumInspector-center";
  pickTileRequired.appendChild(buttonWrap);
  const tileInfo = document.createElement("div");
  pickTileRequired.appendChild(tileInfo);
  const parentTile = document.createElement("input");
  parentTile.type = "button";
  parentTile.value = "Parent";
  parentTile.className = "cesium-cesiumInspector-pickButton";
  parentTile.setAttribute("data-bind", "click: selectParent");
  const nwTile = document.createElement("input");
  nwTile.type = "button";
  nwTile.value = "NW";
  nwTile.className = "cesium-cesiumInspector-pickButton";
  nwTile.setAttribute("data-bind", "click: selectNW");
  const neTile = document.createElement("input");
  neTile.type = "button";
  neTile.value = "NE";
  neTile.className = "cesium-cesiumInspector-pickButton";
  neTile.setAttribute("data-bind", "click: selectNE");
  const swTile = document.createElement("input");
  swTile.type = "button";
  swTile.value = "SW";
  swTile.className = "cesium-cesiumInspector-pickButton";
  swTile.setAttribute("data-bind", "click: selectSW");
  const seTile = document.createElement("input");
  seTile.type = "button";
  seTile.value = "SE";
  seTile.className = "cesium-cesiumInspector-pickButton";
  seTile.setAttribute("data-bind", "click: selectSE");
  const tileText = document.createElement("div");
  tileText.className = "cesium-cesiumInspector-tileText";
  tileInfo.className = "cesium-cesiumInspector-frustumStatistics";
  tileInfo.appendChild(tileText);
  tileInfo.setAttribute("data-bind", "visible: hasPickedTile");
  tileText.setAttribute("data-bind", "html: tileText");
  const relativeText = document.createElement("div");
  relativeText.className = "cesium-cesiumInspector-relativeText";
  relativeText.textContent = "Select relative:";
  tileInfo.appendChild(relativeText);
  const table = document.createElement("table");
  const tr1 = document.createElement("tr");
  const tr2 = document.createElement("tr");
  const td1 = document.createElement("td");
  td1.appendChild(parentTile);
  const td2 = document.createElement("td");
  td2.appendChild(nwTile);
  const td3 = document.createElement("td");
  td3.appendChild(neTile);
  tr1.appendChild(td1);
  tr1.appendChild(td2);
  tr1.appendChild(td3);
  const td4 = document.createElement("td");
  const td5 = document.createElement("td");
  td5.appendChild(swTile);
  const td6 = document.createElement("td");
  td6.appendChild(seTile);
  tr2.appendChild(td4);
  tr2.appendChild(td5);
  tr2.appendChild(td6);
  table.appendChild(tr1);
  table.appendChild(tr2);
  tileInfo.appendChild(table);
  pickTileRequired.appendChild(
    createCheckbox(
      "Show bounding volume",
      "tileBoundingSphere",
      "hasPickedTile"
    )
  );
  pickTileRequired.appendChild(
    createCheckbox("Show only selected", "filterTile", "hasPickedTile")
  );
  terrainSection.appendChild(createCheckbox("Wireframe", "wireframe"));
  terrainSection.appendChild(
    createCheckbox("Suspend LOD update", "suspendUpdates")
  );
  terrainSection.appendChild(
    createCheckbox("Show tile coordinates", "tileCoordinates")
  );
  knockout_default.applyBindings(viewModel, this._element);
}
Object.defineProperties(CesiumInspector.prototype, {
  /**
   * Gets the parent container.
   * @memberof CesiumInspector.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof CesiumInspector.prototype
   *
   * @type {CesiumInspectorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
CesiumInspector.prototype.isDestroyed = function() {
  return false;
};
CesiumInspector.prototype.destroy = function() {
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  this.viewModel.destroy();
  return destroyObject5(this);
};
var CesiumInspector_default = CesiumInspector;

// packages/widgets/Source/Cesium3DTilesInspector/Cesium3DTilesInspector.js
import { Check as Check3, destroyObject as destroyObject7, getElement as getElement4 } from "@cesium/engine";

// packages/widgets/Source/Cesium3DTilesInspector/Cesium3DTilesInspectorViewModel.js
import {
  Check as Check2,
  Color as Color2,
  defined as defined12,
  destroyObject as destroyObject6,
  Cesium3DTileColorBlendMode,
  Cesium3DTileFeature,
  Cesium3DTilePass,
  Cesium3DTileset,
  Cesium3DTileStyle,
  PerformanceDisplay as PerformanceDisplay2,
  ResourceCache,
  ScreenSpaceEventHandler as ScreenSpaceEventHandler2,
  ScreenSpaceEventType as ScreenSpaceEventType2
} from "@cesium/engine";
function getPickTileset(viewModel) {
  return function(e) {
    const pick = viewModel._scene.pick(e.position);
    if (defined12(pick) && pick.primitive instanceof Cesium3DTileset) {
      viewModel.tileset = pick.primitive;
    }
    viewModel.pickActive = false;
  };
}
function selectTilesetOnHover(viewModel, value) {
  if (value) {
    viewModel._eventHandler.setInputAction(function(e) {
      const pick = viewModel._scene.pick(e.endPosition);
      if (defined12(pick) && pick.primitive instanceof Cesium3DTileset) {
        viewModel.tileset = pick.primitive;
      }
    }, ScreenSpaceEventType2.MOUSE_MOVE);
  } else {
    viewModel._eventHandler.removeInputAction(ScreenSpaceEventType2.MOUSE_MOVE);
    viewModel.picking = viewModel.picking;
  }
}
var stringOptions = {
  maximumFractionDigits: 3
};
function formatMemoryString(memorySizeInBytes) {
  const memoryInMegabytes = memorySizeInBytes / 1048576;
  if (memoryInMegabytes < 1) {
    return memoryInMegabytes.toLocaleString(void 0, stringOptions);
  }
  return Math.round(memoryInMegabytes).toLocaleString();
}
function getStatistics(tileset, isPick) {
  if (!defined12(tileset)) {
    return "";
  }
  const statistics = isPick ? tileset._statisticsPerPass[Cesium3DTilePass.PICK] : tileset._statisticsPerPass[Cesium3DTilePass.RENDER];
  let s = '<ul class="cesium-cesiumInspector-statistics">';
  s += // --- Rendering statistics
  `<li><strong>Visited: </strong>${statistics.visited.toLocaleString()}</li><li><strong>Selected: </strong>${statistics.selected.toLocaleString()}</li><li><strong>Commands: </strong>${statistics.numberOfCommands.toLocaleString()}</li>`;
  s += "</ul>";
  if (!isPick) {
    s += '<ul class="cesium-cesiumInspector-statistics">';
    s += // --- Cache/loading statistics
    `<li><strong>Requests: </strong>${statistics.numberOfPendingRequests.toLocaleString()}</li><li><strong>Attempted: </strong>${statistics.numberOfAttemptedRequests.toLocaleString()}</li><li><strong>Processing: </strong>${statistics.numberOfTilesProcessing.toLocaleString()}</li><li><strong>Content Ready: </strong>${statistics.numberOfTilesWithContentReady.toLocaleString()}</li><li><strong>Total: </strong>${statistics.numberOfTilesTotal.toLocaleString()}</li>`;
    s += "</ul>";
    s += '<ul class="cesium-cesiumInspector-statistics">';
    s += // --- Features statistics
    `<li><strong>Features Selected: </strong>${statistics.numberOfFeaturesSelected.toLocaleString()}</li><li><strong>Features Loaded: </strong>${statistics.numberOfFeaturesLoaded.toLocaleString()}</li><li><strong>Points Selected: </strong>${statistics.numberOfPointsSelected.toLocaleString()}</li><li><strong>Points Loaded: </strong>${statistics.numberOfPointsLoaded.toLocaleString()}</li><li><strong>Triangles Selected: </strong>${statistics.numberOfTrianglesSelected.toLocaleString()}</li>`;
    s += "</ul>";
    s += '<ul class="cesium-cesiumInspector-statistics">';
    s += // --- Styling statistics
    `<li><strong>Tiles styled: </strong>${statistics.numberOfTilesStyled.toLocaleString()}</li><li><strong>Features styled: </strong>${statistics.numberOfFeaturesStyled.toLocaleString()}</li>`;
    s += "</ul>";
    s += '<ul class="cesium-cesiumInspector-statistics">';
    s += // --- Optimization statistics
    `<li><strong>Children Union Culled: </strong>${statistics.numberOfTilesCulledWithChildrenUnion.toLocaleString()}</li>`;
    s += "</ul>";
    s += '<ul class="cesium-cesiumInspector-statistics">';
    s += // --- Memory statistics
    `<li><strong>Geometry Memory (MB): </strong>${formatMemoryString(
      statistics.geometryByteLength
    )}</li><li><strong>Texture Memory (MB): </strong>${formatMemoryString(
      statistics.texturesByteLength
    )}</li><li><strong>Batch Table Memory (MB): </strong>${formatMemoryString(
      statistics.batchTableByteLength
    )}</li>`;
    s += "</ul>";
  }
  return s;
}
function getResourceCacheStatistics() {
  const statistics = ResourceCache.statistics;
  return `
  <ul class="cesium-cesiumInspector-statistics">
    <li><strong>Geometry Memory (MB): </strong>${formatMemoryString(
    statistics.geometryByteLength
  )}</li>
    <li><strong>Texture Memory (MB): </strong>${formatMemoryString(
    statistics.texturesByteLength
  )}</li>
  </ul>
  `;
}
var colorBlendModes = [
  {
    text: "Highlight",
    value: Cesium3DTileColorBlendMode.HIGHLIGHT
  },
  {
    text: "Replace",
    value: Cesium3DTileColorBlendMode.REPLACE
  },
  {
    text: "Mix",
    value: Cesium3DTileColorBlendMode.MIX
  }
];
var highlightColor = new Color2(1, 1, 0, 0.4);
var scratchColor = new Color2();
var oldColor = new Color2();
function Cesium3DTilesInspectorViewModel(scene, performanceContainer) {
  Check2.typeOf.object("scene", scene);
  Check2.typeOf.object("performanceContainer", performanceContainer);
  const that = this;
  const canvas = scene.canvas;
  this._eventHandler = new ScreenSpaceEventHandler2(canvas);
  this._scene = scene;
  this._performanceContainer = performanceContainer;
  this._canvas = canvas;
  this._performanceDisplay = new PerformanceDisplay2({
    container: performanceContainer
  });
  this._statisticsText = "";
  this._pickStatisticsText = "";
  this._resourceCacheStatisticsText = "";
  this._editorError = "";
  this.performance = false;
  this.showStatistics = true;
  this.showPickStatistics = true;
  this.showResourceCacheStatistics = false;
  this.inspectorVisible = true;
  this.tilesetVisible = false;
  this.displayVisible = false;
  this.updateVisible = false;
  this.loggingVisible = false;
  this.styleVisible = false;
  this.tileDebugLabelsVisible = false;
  this.optimizationVisible = false;
  this.styleString = "{}";
  this.hasEnabledWireframe = false;
  this._tileset = void 0;
  this._feature = void 0;
  this._tile = void 0;
  knockout_default.track(this, [
    "performance",
    "inspectorVisible",
    "_statisticsText",
    "_pickStatisticsText",
    "_resourceCacheStatisticsText",
    "_editorError",
    "showPickStatistics",
    "showStatistics",
    "showResourceCacheStatistics",
    "tilesetVisible",
    "displayVisible",
    "updateVisible",
    "loggingVisible",
    "styleVisible",
    "optimizationVisible",
    "tileDebugLabelsVisible",
    "styleString",
    "_feature",
    "_tile",
    "_tileset",
    "hasEnabledWireframe"
  ]);
  this._properties = knockout_default.observable({});
  this.properties = [];
  knockout_default.defineProperty(this, "properties", function() {
    const names = [];
    const properties = that._properties();
    for (const prop in properties) {
      if (properties.hasOwnProperty(prop)) {
        names.push(prop);
      }
    }
    return names;
  });
  const dynamicScreenSpaceError = knockout_default.observable();
  knockout_default.defineProperty(this, "dynamicScreenSpaceError", {
    get: function() {
      return dynamicScreenSpaceError();
    },
    set: function(value) {
      dynamicScreenSpaceError(value);
      if (defined12(that._tileset)) {
        that._tileset.dynamicScreenSpaceError = value;
      }
    }
  });
  this.dynamicScreenSpaceError = false;
  const colorBlendMode = knockout_default.observable();
  knockout_default.defineProperty(this, "colorBlendMode", {
    get: function() {
      return colorBlendMode();
    },
    set: function(value) {
      colorBlendMode(value);
      if (defined12(that._tileset)) {
        that._tileset.colorBlendMode = value;
        that._scene.requestRender();
      }
    }
  });
  this.colorBlendMode = Cesium3DTileColorBlendMode.HIGHLIGHT;
  const showOnlyPickedTileDebugLabel = knockout_default.observable();
  const picking = knockout_default.observable();
  knockout_default.defineProperty(this, "picking", {
    get: function() {
      return picking();
    },
    set: function(value) {
      picking(value);
      if (value) {
        that._eventHandler.setInputAction(function(e) {
          const picked = scene.pick(e.endPosition);
          if (picked instanceof Cesium3DTileFeature) {
            that.feature = picked;
            that.tile = picked.content.tile;
          } else if (defined12(picked) && defined12(picked.content)) {
            that.feature = void 0;
            that.tile = picked.content.tile;
          } else {
            that.feature = void 0;
            that.tile = void 0;
          }
          if (!defined12(that._tileset)) {
            return;
          }
          if (showOnlyPickedTileDebugLabel && defined12(picked) && defined12(picked.content)) {
            let position;
            if (scene.pickPositionSupported) {
              position = scene.pickPosition(e.endPosition);
              if (defined12(position)) {
                that._tileset.debugPickPosition = position;
              }
            }
            that._tileset.debugPickedTile = picked.content.tile;
          } else {
            that._tileset.debugPickedTile = void 0;
          }
          that._scene.requestRender();
        }, ScreenSpaceEventType2.MOUSE_MOVE);
      } else {
        that.feature = void 0;
        that.tile = void 0;
        that._eventHandler.removeInputAction(ScreenSpaceEventType2.MOUSE_MOVE);
      }
    }
  });
  this.picking = true;
  const colorize = knockout_default.observable();
  knockout_default.defineProperty(this, "colorize", {
    get: function() {
      return colorize();
    },
    set: function(value) {
      colorize(value);
      if (defined12(that._tileset)) {
        that._tileset.debugColorizeTiles = value;
        that._scene.requestRender();
      }
    }
  });
  this.colorize = false;
  const wireframe = knockout_default.observable();
  knockout_default.defineProperty(this, "wireframe", {
    get: function() {
      return wireframe();
    },
    set: function(value) {
      wireframe(value);
      if (defined12(that._tileset)) {
        that._tileset.debugWireframe = value;
        that._scene.requestRender();
      }
    }
  });
  this.wireframe = false;
  const showBoundingVolumes = knockout_default.observable();
  knockout_default.defineProperty(this, "showBoundingVolumes", {
    get: function() {
      return showBoundingVolumes();
    },
    set: function(value) {
      showBoundingVolumes(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowBoundingVolume = value;
        that._scene.requestRender();
      }
    }
  });
  this.showBoundingVolumes = false;
  const showContentBoundingVolumes = knockout_default.observable();
  knockout_default.defineProperty(this, "showContentBoundingVolumes", {
    get: function() {
      return showContentBoundingVolumes();
    },
    set: function(value) {
      showContentBoundingVolumes(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowContentBoundingVolume = value;
        that._scene.requestRender();
      }
    }
  });
  this.showContentBoundingVolumes = false;
  const showRequestVolumes = knockout_default.observable();
  knockout_default.defineProperty(this, "showRequestVolumes", {
    get: function() {
      return showRequestVolumes();
    },
    set: function(value) {
      showRequestVolumes(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowViewerRequestVolume = value;
        that._scene.requestRender();
      }
    }
  });
  this.showRequestVolumes = false;
  const freezeFrame = knockout_default.observable();
  knockout_default.defineProperty(this, "freezeFrame", {
    get: function() {
      return freezeFrame();
    },
    set: function(value) {
      freezeFrame(value);
      if (defined12(that._tileset)) {
        that._tileset.debugFreezeFrame = value;
        that._scene.debugShowFrustumPlanes = value;
        that._scene.requestRender();
      }
    }
  });
  this.freezeFrame = false;
  knockout_default.defineProperty(this, "showOnlyPickedTileDebugLabel", {
    get: function() {
      return showOnlyPickedTileDebugLabel();
    },
    set: function(value) {
      showOnlyPickedTileDebugLabel(value);
      if (defined12(that._tileset)) {
        that._tileset.debugPickedTileLabelOnly = value;
        that._scene.requestRender();
      }
    }
  });
  this.showOnlyPickedTileDebugLabel = false;
  const showGeometricError = knockout_default.observable();
  knockout_default.defineProperty(this, "showGeometricError", {
    get: function() {
      return showGeometricError();
    },
    set: function(value) {
      showGeometricError(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowGeometricError = value;
        that._scene.requestRender();
      }
    }
  });
  this.showGeometricError = false;
  const showRenderingStatistics = knockout_default.observable();
  knockout_default.defineProperty(this, "showRenderingStatistics", {
    get: function() {
      return showRenderingStatistics();
    },
    set: function(value) {
      showRenderingStatistics(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowRenderingStatistics = value;
        that._scene.requestRender();
      }
    }
  });
  this.showRenderingStatistics = false;
  const showMemoryUsage = knockout_default.observable();
  knockout_default.defineProperty(this, "showMemoryUsage", {
    get: function() {
      return showMemoryUsage();
    },
    set: function(value) {
      showMemoryUsage(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowMemoryUsage = value;
        that._scene.requestRender();
      }
    }
  });
  this.showMemoryUsage = false;
  const showUrl = knockout_default.observable();
  knockout_default.defineProperty(this, "showUrl", {
    get: function() {
      return showUrl();
    },
    set: function(value) {
      showUrl(value);
      if (defined12(that._tileset)) {
        that._tileset.debugShowUrl = value;
        that._scene.requestRender();
      }
    }
  });
  this.showUrl = false;
  const maximumScreenSpaceError = knockout_default.observable();
  knockout_default.defineProperty(this, "maximumScreenSpaceError", {
    get: function() {
      return maximumScreenSpaceError();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        maximumScreenSpaceError(value);
        if (defined12(that._tileset)) {
          that._tileset.maximumScreenSpaceError = value;
        }
      }
    }
  });
  this.maximumScreenSpaceError = 16;
  const dynamicScreenSpaceErrorDensity = knockout_default.observable();
  knockout_default.defineProperty(this, "dynamicScreenSpaceErrorDensity", {
    get: function() {
      return dynamicScreenSpaceErrorDensity();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        dynamicScreenSpaceErrorDensity(value);
        if (defined12(that._tileset)) {
          that._tileset.dynamicScreenSpaceErrorDensity = value;
        }
      }
    }
  });
  this.dynamicScreenSpaceErrorDensity = 2e-4;
  this.dynamicScreenSpaceErrorDensitySliderValue = void 0;
  knockout_default.defineProperty(this, "dynamicScreenSpaceErrorDensitySliderValue", {
    get: function() {
      return Math.pow(dynamicScreenSpaceErrorDensity(), 1 / 6);
    },
    set: function(value) {
      const scaledValue = Math.pow(value, 6);
      dynamicScreenSpaceErrorDensity(scaledValue);
      if (defined12(that._tileset)) {
        that._tileset.dynamicScreenSpaceErrorDensity = scaledValue;
      }
    }
  });
  const dynamicScreenSpaceErrorFactor = knockout_default.observable();
  knockout_default.defineProperty(this, "dynamicScreenSpaceErrorFactor", {
    get: function() {
      return dynamicScreenSpaceErrorFactor();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        dynamicScreenSpaceErrorFactor(value);
        if (defined12(that._tileset)) {
          that._tileset.dynamicScreenSpaceErrorFactor = value;
        }
      }
    }
  });
  this.dynamicScreenSpaceErrorFactor = 24;
  const pickTileset = getPickTileset(this);
  const pickActive = knockout_default.observable();
  knockout_default.defineProperty(this, "pickActive", {
    get: function() {
      return pickActive();
    },
    set: function(value) {
      pickActive(value);
      if (value) {
        that._eventHandler.setInputAction(
          pickTileset,
          ScreenSpaceEventType2.LEFT_CLICK
        );
      } else {
        that._eventHandler.removeInputAction(ScreenSpaceEventType2.LEFT_CLICK);
      }
    }
  });
  const pointCloudShading = knockout_default.observable();
  knockout_default.defineProperty(this, "pointCloudShading", {
    get: function() {
      return pointCloudShading();
    },
    set: function(value) {
      pointCloudShading(value);
      if (defined12(that._tileset)) {
        that._tileset.pointCloudShading.attenuation = value;
      }
    }
  });
  this.pointCloudShading = false;
  const geometricErrorScale = knockout_default.observable();
  knockout_default.defineProperty(this, "geometricErrorScale", {
    get: function() {
      return geometricErrorScale();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        geometricErrorScale(value);
        if (defined12(that._tileset)) {
          that._tileset.pointCloudShading.geometricErrorScale = value;
        }
      }
    }
  });
  this.geometricErrorScale = 1;
  const maximumAttenuation = knockout_default.observable();
  knockout_default.defineProperty(this, "maximumAttenuation", {
    get: function() {
      return maximumAttenuation();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        maximumAttenuation(value);
        if (defined12(that._tileset)) {
          that._tileset.pointCloudShading.maximumAttenuation = value === 0 ? void 0 : value;
        }
      }
    }
  });
  this.maximumAttenuation = 0;
  const baseResolution = knockout_default.observable();
  knockout_default.defineProperty(this, "baseResolution", {
    get: function() {
      return baseResolution();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        baseResolution(value);
        if (defined12(that._tileset)) {
          that._tileset.pointCloudShading.baseResolution = value === 0 ? void 0 : value;
        }
      }
    }
  });
  this.baseResolution = 0;
  const eyeDomeLighting = knockout_default.observable();
  knockout_default.defineProperty(this, "eyeDomeLighting", {
    get: function() {
      return eyeDomeLighting();
    },
    set: function(value) {
      eyeDomeLighting(value);
      if (defined12(that._tileset)) {
        that._tileset.pointCloudShading.eyeDomeLighting = value;
      }
    }
  });
  this.eyeDomeLighting = false;
  const eyeDomeLightingStrength = knockout_default.observable();
  knockout_default.defineProperty(this, "eyeDomeLightingStrength", {
    get: function() {
      return eyeDomeLightingStrength();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        eyeDomeLightingStrength(value);
        if (defined12(that._tileset)) {
          that._tileset.pointCloudShading.eyeDomeLightingStrength = value;
        }
      }
    }
  });
  this.eyeDomeLightingStrength = 1;
  const eyeDomeLightingRadius = knockout_default.observable();
  knockout_default.defineProperty(this, "eyeDomeLightingRadius", {
    get: function() {
      return eyeDomeLightingRadius();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        eyeDomeLightingRadius(value);
        if (defined12(that._tileset)) {
          that._tileset.pointCloudShading.eyeDomeLightingRadius = value;
        }
      }
    }
  });
  this.eyeDomeLightingRadius = 1;
  this.pickActive = false;
  const skipLevelOfDetail = knockout_default.observable();
  knockout_default.defineProperty(this, "skipLevelOfDetail", {
    get: function() {
      return skipLevelOfDetail();
    },
    set: function(value) {
      skipLevelOfDetail(value);
      if (defined12(that._tileset)) {
        that._tileset.skipLevelOfDetail = value;
      }
    }
  });
  this.skipLevelOfDetail = true;
  const skipScreenSpaceErrorFactor = knockout_default.observable();
  knockout_default.defineProperty(this, "skipScreenSpaceErrorFactor", {
    get: function() {
      return skipScreenSpaceErrorFactor();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        skipScreenSpaceErrorFactor(value);
        if (defined12(that._tileset)) {
          that._tileset.skipScreenSpaceErrorFactor = value;
        }
      }
    }
  });
  this.skipScreenSpaceErrorFactor = 16;
  const baseScreenSpaceError = knockout_default.observable();
  knockout_default.defineProperty(this, "baseScreenSpaceError", {
    get: function() {
      return baseScreenSpaceError();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        baseScreenSpaceError(value);
        if (defined12(that._tileset)) {
          that._tileset.baseScreenSpaceError = value;
        }
      }
    }
  });
  this.baseScreenSpaceError = 1024;
  const skipLevels = knockout_default.observable();
  knockout_default.defineProperty(this, "skipLevels", {
    get: function() {
      return skipLevels();
    },
    set: function(value) {
      value = Number(value);
      if (!isNaN(value)) {
        skipLevels(value);
        if (defined12(that._tileset)) {
          that._tileset.skipLevels = value;
        }
      }
    }
  });
  this.skipLevels = 1;
  const immediatelyLoadDesiredLevelOfDetail = knockout_default.observable();
  knockout_default.defineProperty(this, "immediatelyLoadDesiredLevelOfDetail", {
    get: function() {
      return immediatelyLoadDesiredLevelOfDetail();
    },
    set: function(value) {
      immediatelyLoadDesiredLevelOfDetail(value);
      if (defined12(that._tileset)) {
        that._tileset.immediatelyLoadDesiredLevelOfDetail = value;
      }
    }
  });
  this.immediatelyLoadDesiredLevelOfDetail = false;
  const loadSiblings = knockout_default.observable();
  knockout_default.defineProperty(this, "loadSiblings", {
    get: function() {
      return loadSiblings();
    },
    set: function(value) {
      loadSiblings(value);
      if (defined12(that._tileset)) {
        that._tileset.loadSiblings = value;
      }
    }
  });
  this.loadSiblings = false;
  this._style = void 0;
  this._shouldStyle = false;
  this._definedProperties = [
    "properties",
    "dynamicScreenSpaceError",
    "colorBlendMode",
    "picking",
    "colorize",
    "wireframe",
    "showBoundingVolumes",
    "showContentBoundingVolumes",
    "showRequestVolumes",
    "freezeFrame",
    "maximumScreenSpaceError",
    "dynamicScreenSpaceErrorDensity",
    "baseScreenSpaceError",
    "skipScreenSpaceErrorFactor",
    "skipLevelOfDetail",
    "skipLevels",
    "immediatelyLoadDesiredLevelOfDetail",
    "loadSiblings",
    "dynamicScreenSpaceErrorDensitySliderValue",
    "dynamicScreenSpaceErrorFactor",
    "pickActive",
    "showOnlyPickedTileDebugLabel",
    "showGeometricError",
    "showRenderingStatistics",
    "showMemoryUsage",
    "showUrl",
    "pointCloudShading",
    "geometricErrorScale",
    "maximumAttenuation",
    "baseResolution",
    "eyeDomeLighting",
    "eyeDomeLightingStrength",
    "eyeDomeLightingRadius"
  ];
  this._removePostRenderEvent = scene.postRender.addEventListener(function() {
    that._update();
  });
  if (!defined12(this._tileset)) {
    selectTilesetOnHover(this, true);
  }
}
Object.defineProperties(Cesium3DTilesInspectorViewModel.prototype, {
  /**
   * Gets the scene
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Scene}
   * @readonly
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the performance container
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {HTMLElement}
   * @readonly
   */
  performanceContainer: {
    get: function() {
      return this._performanceContainer;
    }
  },
  /**
   * Gets the statistics text.  This property is observable.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  statisticsText: {
    get: function() {
      return this._statisticsText;
    }
  },
  /**
   * Gets the pick statistics text.  This property is observable.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  pickStatisticsText: {
    get: function() {
      return this._pickStatisticsText;
    }
  },
  /**
   * Gets the resource cache statistics text. This property is observable.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  resourceCacheStatisticsText: {
    get: function() {
      return this._resourceCacheStatisticsText;
    }
  },
  /**
   * Gets the available blend modes
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {object[]}
   * @readonly
   */
  colorBlendModes: {
    get: function() {
      return colorBlendModes;
    }
  },
  /**
   * Gets the editor error message
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {string}
   * @readonly
   */
  editorError: {
    get: function() {
      return this._editorError;
    }
  },
  /**
   * Gets or sets the tileset of the view model.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Cesium3DTileset}
   */
  tileset: {
    get: function() {
      return this._tileset;
    },
    set: function(tileset) {
      this._tileset = tileset;
      this._style = void 0;
      this.styleString = "{}";
      this.feature = void 0;
      this.tile = void 0;
      if (defined12(tileset)) {
        this._properties(tileset.properties);
        const settings = [
          "colorize",
          "wireframe",
          "showBoundingVolumes",
          "showContentBoundingVolumes",
          "showRequestVolumes",
          "freezeFrame",
          "showOnlyPickedTileDebugLabel",
          "showGeometricError",
          "showRenderingStatistics",
          "showMemoryUsage",
          "showUrl"
        ];
        const length = settings.length;
        for (let i = 0; i < length; ++i) {
          const setting = settings[i];
          this[setting] = this[setting];
        }
        this.maximumScreenSpaceError = tileset.maximumScreenSpaceError;
        this.dynamicScreenSpaceError = tileset.dynamicScreenSpaceError;
        this.dynamicScreenSpaceErrorDensity = tileset.dynamicScreenSpaceErrorDensity;
        this.dynamicScreenSpaceErrorFactor = tileset.dynamicScreenSpaceErrorFactor;
        this.colorBlendMode = tileset.colorBlendMode;
        this.skipLevelOfDetail = tileset.skipLevelOfDetail;
        this.skipScreenSpaceErrorFactor = tileset.skipScreenSpaceErrorFactor;
        this.baseScreenSpaceError = tileset.baseScreenSpaceError;
        this.skipLevels = tileset.skipLevels;
        this.immediatelyLoadDesiredLevelOfDetail = tileset.immediatelyLoadDesiredLevelOfDetail;
        this.loadSiblings = tileset.loadSiblings;
        this.hasEnabledWireframe = tileset._enableDebugWireframe;
        const pointCloudShading = tileset.pointCloudShading;
        this.pointCloudShading = pointCloudShading.attenuation;
        this.geometricErrorScale = pointCloudShading.geometricErrorScale;
        this.maximumAttenuation = pointCloudShading.maximumAttenuation ? pointCloudShading.maximumAttenuation : 0;
        this.baseResolution = pointCloudShading.baseResolution ? pointCloudShading.baseResolution : 0;
        this.eyeDomeLighting = pointCloudShading.eyeDomeLighting;
        this.eyeDomeLightingStrength = pointCloudShading.eyeDomeLightingStrength;
        this.eyeDomeLightingRadius = pointCloudShading.eyeDomeLightingRadius;
        this._scene.requestRender();
      } else {
        this._properties({});
      }
      this._statisticsText = getStatistics(tileset, false);
      this._pickStatisticsText = getStatistics(tileset, true);
      this._resourceCacheStatisticsText = getResourceCacheStatistics();
      selectTilesetOnHover(this, false);
    }
  },
  /**
   * Gets the current feature of the view model.
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Cesium3DTileFeature}
   */
  feature: {
    get: function() {
      return this._feature;
    },
    set: function(feature) {
      if (this._feature === feature) {
        return;
      }
      const currentFeature = this._feature;
      if (defined12(currentFeature) && !currentFeature.content.isDestroyed()) {
        if (!this.colorize && defined12(this._style)) {
          currentFeature.color = defined12(this._style.color) ? this._style.color.evaluateColor(currentFeature, scratchColor) : Color2.WHITE;
        } else {
          currentFeature.color = oldColor;
        }
        this._scene.requestRender();
      }
      if (defined12(feature)) {
        Color2.clone(feature.color, oldColor);
        feature.color = highlightColor;
        this._scene.requestRender();
      }
      this._feature = feature;
    }
  },
  /**
   * Gets the current tile of the view model
   * @memberof Cesium3DTilesInspectorViewModel.prototype
   * @type {Cesium3DTile}
   */
  tile: {
    get: function() {
      return this._tile;
    },
    set: function(tile) {
      if (this._tile === tile) {
        return;
      }
      const currentTile = this._tile;
      if (defined12(currentTile) && !currentTile.isDestroyed() && !hasFeatures(currentTile.content)) {
        currentTile.color = oldColor;
        this._scene.requestRender();
      }
      if (defined12(tile) && !hasFeatures(tile.content)) {
        Color2.clone(tile.color, oldColor);
        tile.color = highlightColor;
        this._scene.requestRender();
      }
      this._tile = tile;
    }
  }
});
function hasFeatures(content) {
  if (!defined12(content)) {
    return false;
  }
  if (content.featuresLength > 0) {
    return true;
  }
  const innerContents = content.innerContents;
  if (defined12(innerContents)) {
    const length = innerContents.length;
    for (let i = 0; i < length; ++i) {
      if (!hasFeatures(innerContents[i])) {
        return false;
      }
    }
    return true;
  }
  return false;
}
Cesium3DTilesInspectorViewModel.prototype.togglePickTileset = function() {
  this.pickActive = !this.pickActive;
};
Cesium3DTilesInspectorViewModel.prototype.toggleInspector = function() {
  this.inspectorVisible = !this.inspectorVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleTileset = function() {
  this.tilesetVisible = !this.tilesetVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleDisplay = function() {
  this.displayVisible = !this.displayVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleUpdate = function() {
  this.updateVisible = !this.updateVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleLogging = function() {
  this.loggingVisible = !this.loggingVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleStyle = function() {
  this.styleVisible = !this.styleVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleTileDebugLabels = function() {
  this.tileDebugLabelsVisible = !this.tileDebugLabelsVisible;
};
Cesium3DTilesInspectorViewModel.prototype.toggleOptimization = function() {
  this.optimizationVisible = !this.optimizationVisible;
};
Cesium3DTilesInspectorViewModel.prototype.trimTilesCache = function() {
  if (defined12(this._tileset)) {
    this._tileset.trimLoadedTiles();
  }
};
Cesium3DTilesInspectorViewModel.prototype.compileStyle = function() {
  const tileset = this._tileset;
  if (!defined12(tileset) || this.styleString === JSON.stringify(tileset.style)) {
    return;
  }
  this._editorError = "";
  try {
    if (this.styleString.length === 0) {
      this.styleString = "{}";
    }
    this._style = new Cesium3DTileStyle(JSON.parse(this.styleString));
    this._shouldStyle = true;
    this._scene.requestRender();
  } catch (err) {
    this._editorError = err.toString();
  }
  this.feature = this._feature;
  this.tile = this._tile;
};
Cesium3DTilesInspectorViewModel.prototype.styleEditorKeyPress = function(sender, event) {
  if (event.keyCode === 9) {
    event.preventDefault();
    const textArea = event.target;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    let newEnd = end;
    const selected = textArea.value.slice(start, end);
    const lines = selected.split("\n");
    const length = lines.length;
    let i;
    if (!event.shiftKey) {
      for (i = 0; i < length; ++i) {
        lines[i] = `  ${lines[i]}`;
        newEnd += 2;
      }
    } else {
      for (i = 0; i < length; ++i) {
        if (lines[i][0] === " ") {
          if (lines[i][1] === " ") {
            lines[i] = lines[i].substr(2);
            newEnd -= 2;
          } else {
            lines[i] = lines[i].substr(1);
            newEnd -= 1;
          }
        }
      }
    }
    const newText = lines.join("\n");
    textArea.value = textArea.value.slice(0, start) + newText + textArea.value.slice(end);
    textArea.selectionStart = start !== end ? start : newEnd;
    textArea.selectionEnd = newEnd;
  } else if (event.ctrlKey && (event.keyCode === 10 || event.keyCode === 13)) {
    this.compileStyle();
  }
  return true;
};
Cesium3DTilesInspectorViewModel.prototype._update = function() {
  const tileset = this._tileset;
  if (this.performance) {
    this._performanceDisplay.update();
  }
  if (defined12(tileset)) {
    if (tileset.isDestroyed()) {
      this.tile = void 0;
      this.feature = void 0;
      this.tileset = void 0;
      return;
    }
    const style = tileset.style;
    if (this._style !== tileset.style) {
      if (this._shouldStyle) {
        tileset.style = this._style;
        this._shouldStyle = false;
      } else {
        this._style = style;
        this.styleString = JSON.stringify(style.style, null, "  ");
      }
    }
  }
  if (this.showStatistics) {
    this._statisticsText = getStatistics(tileset, false);
    this._pickStatisticsText = getStatistics(tileset, true);
    this._resourceCacheStatisticsText = getResourceCacheStatistics();
  }
};
Cesium3DTilesInspectorViewModel.prototype.isDestroyed = function() {
  return false;
};
Cesium3DTilesInspectorViewModel.prototype.destroy = function() {
  this._eventHandler.destroy();
  this._removePostRenderEvent();
  const that = this;
  this._definedProperties.forEach(function(property) {
    knockout_default.getObservable(that, property).dispose();
  });
  return destroyObject6(this);
};
Cesium3DTilesInspectorViewModel.getStatistics = getStatistics;
var Cesium3DTilesInspectorViewModel_default = Cesium3DTilesInspectorViewModel;

// packages/widgets/Source/Cesium3DTilesInspector/Cesium3DTilesInspector.js
function Cesium3DTilesInspector(container, scene) {
  Check3.defined("container", container);
  Check3.typeOf.object("scene", scene);
  container = getElement4(container);
  const element = document.createElement("div");
  const performanceContainer = document.createElement("div");
  performanceContainer.setAttribute("data-bind", "visible: performance");
  const viewModel = new Cesium3DTilesInspectorViewModel_default(
    scene,
    performanceContainer
  );
  this._viewModel = viewModel;
  this._container = container;
  this._element = element;
  const text = document.createElement("div");
  text.textContent = "3D Tiles Inspector";
  text.className = "cesium-cesiumInspector-button";
  text.setAttribute("data-bind", "click: toggleInspector");
  element.appendChild(text);
  element.className = "cesium-cesiumInspector cesium-3DTilesInspector";
  element.setAttribute(
    "data-bind",
    'css: { "cesium-cesiumInspector-visible" : inspectorVisible, "cesium-cesiumInspector-hidden" : !inspectorVisible}'
  );
  container.appendChild(element);
  const panel = document.createElement("div");
  panel.className = "cesium-cesiumInspector-dropDown";
  element.appendChild(panel);
  const createSection = InspectorShared_default.createSection;
  const createCheckbox = InspectorShared_default.createCheckbox;
  const createRangeInput = InspectorShared_default.createRangeInput;
  const createButton = InspectorShared_default.createButton;
  const tilesetPanelContents = createSection(
    panel,
    "Tileset",
    "tilesetVisible",
    "toggleTileset"
  );
  const displayPanelContents = createSection(
    panel,
    "Display",
    "displayVisible",
    "toggleDisplay"
  );
  const updatePanelContents = createSection(
    panel,
    "Update",
    "updateVisible",
    "toggleUpdate"
  );
  const loggingPanelContents = createSection(
    panel,
    "Logging",
    "loggingVisible",
    "toggleLogging"
  );
  const tileDebugLabelsPanelContents = createSection(
    panel,
    "Tile Debug Labels",
    "tileDebugLabelsVisible",
    "toggleTileDebugLabels"
  );
  const stylePanelContents = createSection(
    panel,
    "Style",
    "styleVisible",
    "toggleStyle"
  );
  const optimizationPanelContents = createSection(
    panel,
    "Optimization",
    "optimizationVisible",
    "toggleOptimization"
  );
  const properties = document.createElement("div");
  properties.className = "field-group";
  const propertiesLabel = document.createElement("label");
  propertiesLabel.className = "field-label";
  propertiesLabel.appendChild(document.createTextNode("Properties: "));
  const propertiesField = document.createElement("div");
  propertiesField.setAttribute("data-bind", "text: properties");
  properties.appendChild(propertiesLabel);
  properties.appendChild(propertiesField);
  tilesetPanelContents.appendChild(properties);
  tilesetPanelContents.appendChild(
    createButton("Pick Tileset", "togglePickTileset", "pickActive")
  );
  tilesetPanelContents.appendChild(
    createButton("Trim Tiles Cache", "trimTilesCache")
  );
  tilesetPanelContents.appendChild(createCheckbox("Enable Picking", "picking"));
  displayPanelContents.appendChild(createCheckbox("Colorize", "colorize"));
  const wireframeCheckbox = displayPanelContents.appendChild(
    createCheckbox(
      "Wireframe",
      "wireframe",
      "_tileset === undefined || hasEnabledWireframe"
    )
  );
  const warningText = document.createElement("p");
  warningText.setAttribute(
    "data-bind",
    "visible: _tileset !== undefined && !hasEnabledWireframe"
  );
  warningText.setAttribute(
    "class",
    "cesium-3DTilesInspector-disabledElementsInfo"
  );
  warningText.innerText = "Set enableDebugWireframe to true in the tileset constructor to enable this option.";
  wireframeCheckbox.appendChild(warningText);
  displayPanelContents.appendChild(
    createCheckbox("Bounding Volumes", "showBoundingVolumes")
  );
  displayPanelContents.appendChild(
    createCheckbox("Content Volumes", "showContentBoundingVolumes")
  );
  displayPanelContents.appendChild(
    createCheckbox("Request Volumes", "showRequestVolumes")
  );
  displayPanelContents.appendChild(
    createCheckbox("Point Cloud Shading", "pointCloudShading")
  );
  const pointCloudShadingContainer = document.createElement("div");
  pointCloudShadingContainer.setAttribute(
    "data-bind",
    "visible: pointCloudShading"
  );
  pointCloudShadingContainer.appendChild(
    createRangeInput(
      "Geometric Error Scale",
      "geometricErrorScale",
      0,
      2,
      0.01
    )
  );
  pointCloudShadingContainer.appendChild(
    createRangeInput("Maximum Attenuation", "maximumAttenuation", 0, 32, 1)
  );
  pointCloudShadingContainer.appendChild(
    createRangeInput("Base Resolution", "baseResolution", 0, 1, 0.01)
  );
  pointCloudShadingContainer.appendChild(
    createCheckbox("Eye Dome Lighting (EDL)", "eyeDomeLighting")
  );
  displayPanelContents.appendChild(pointCloudShadingContainer);
  const edlContainer = document.createElement("div");
  edlContainer.setAttribute("data-bind", "visible: eyeDomeLighting");
  edlContainer.appendChild(
    createRangeInput("EDL Strength", "eyeDomeLightingStrength", 0, 2, 0.1)
  );
  edlContainer.appendChild(
    createRangeInput("EDL Radius", "eyeDomeLightingRadius", 0, 4, 0.1)
  );
  pointCloudShadingContainer.appendChild(edlContainer);
  updatePanelContents.appendChild(
    createCheckbox("Freeze Frame", "freezeFrame")
  );
  updatePanelContents.appendChild(
    createCheckbox("Dynamic Screen Space Error", "dynamicScreenSpaceError")
  );
  const sseContainer = document.createElement("div");
  sseContainer.appendChild(
    createRangeInput(
      "Maximum Screen Space Error",
      "maximumScreenSpaceError",
      0,
      128,
      1
    )
  );
  updatePanelContents.appendChild(sseContainer);
  const dynamicScreenSpaceErrorContainer = document.createElement("div");
  dynamicScreenSpaceErrorContainer.setAttribute(
    "data-bind",
    "visible: dynamicScreenSpaceError"
  );
  dynamicScreenSpaceErrorContainer.appendChild(
    createRangeInput(
      "Screen Space Error Density",
      "dynamicScreenSpaceErrorDensitySliderValue",
      0,
      1,
      5e-3,
      "dynamicScreenSpaceErrorDensity"
    )
  );
  dynamicScreenSpaceErrorContainer.appendChild(
    createRangeInput(
      "Screen Space Error Factor",
      "dynamicScreenSpaceErrorFactor",
      1,
      32,
      0.1
    )
  );
  updatePanelContents.appendChild(dynamicScreenSpaceErrorContainer);
  loggingPanelContents.appendChild(
    createCheckbox("Performance", "performance")
  );
  loggingPanelContents.appendChild(performanceContainer);
  loggingPanelContents.appendChild(
    createCheckbox("Statistics", "showStatistics")
  );
  const statistics = document.createElement("div");
  statistics.className = "cesium-3dTilesInspector-statistics";
  statistics.setAttribute(
    "data-bind",
    "html: statisticsText, visible: showStatistics"
  );
  loggingPanelContents.appendChild(statistics);
  loggingPanelContents.appendChild(
    createCheckbox("Pick Statistics", "showPickStatistics")
  );
  const pickStatistics = document.createElement("div");
  pickStatistics.className = "cesium-3dTilesInspector-statistics";
  pickStatistics.setAttribute(
    "data-bind",
    "html: pickStatisticsText, visible: showPickStatistics"
  );
  loggingPanelContents.appendChild(pickStatistics);
  loggingPanelContents.appendChild(
    createCheckbox("Resource Cache Statistics", "showResourceCacheStatistics")
  );
  const resourceCacheStatistics = document.createElement("div");
  resourceCacheStatistics.className = "cesium-3dTilesInspector-statistics";
  resourceCacheStatistics.setAttribute(
    "data-bind",
    "html: resourceCacheStatisticsText, visible: showResourceCacheStatistics"
  );
  loggingPanelContents.appendChild(resourceCacheStatistics);
  const stylePanelEditor = document.createElement("div");
  stylePanelContents.appendChild(stylePanelEditor);
  stylePanelEditor.appendChild(document.createTextNode("Color Blend Mode: "));
  const blendDropdown = document.createElement("select");
  blendDropdown.setAttribute(
    "data-bind",
    'options: colorBlendModes, optionsText: "text", optionsValue: "value", value: colorBlendMode'
  );
  stylePanelEditor.appendChild(blendDropdown);
  const styleEditor = document.createElement("textarea");
  styleEditor.setAttribute(
    "data-bind",
    "textInput: styleString, event: { keydown: styleEditorKeyPress }"
  );
  stylePanelEditor.className = "cesium-cesiumInspector-styleEditor";
  stylePanelEditor.appendChild(styleEditor);
  const closeStylesBtn = createButton("Compile (Ctrl+Enter)", "compileStyle");
  stylePanelEditor.appendChild(closeStylesBtn);
  const errorBox = document.createElement("div");
  errorBox.className = "cesium-cesiumInspector-error";
  errorBox.setAttribute("data-bind", "text: editorError");
  stylePanelEditor.appendChild(errorBox);
  tileDebugLabelsPanelContents.appendChild(
    createCheckbox("Show Picked Only", "showOnlyPickedTileDebugLabel")
  );
  tileDebugLabelsPanelContents.appendChild(
    createCheckbox("Geometric Error", "showGeometricError")
  );
  tileDebugLabelsPanelContents.appendChild(
    createCheckbox("Rendering Statistics", "showRenderingStatistics")
  );
  tileDebugLabelsPanelContents.appendChild(
    createCheckbox("Memory Usage (MB)", "showMemoryUsage")
  );
  tileDebugLabelsPanelContents.appendChild(createCheckbox("Url", "showUrl"));
  optimizationPanelContents.appendChild(
    createCheckbox("Skip Tile LODs", "skipLevelOfDetail")
  );
  const skipScreenSpaceErrorFactorContainer = document.createElement("div");
  skipScreenSpaceErrorFactorContainer.appendChild(
    createRangeInput("Skip SSE Factor", "skipScreenSpaceErrorFactor", 1, 50, 1)
  );
  optimizationPanelContents.appendChild(skipScreenSpaceErrorFactorContainer);
  const baseScreenSpaceError = document.createElement("div");
  baseScreenSpaceError.appendChild(
    createRangeInput(
      "SSE before skipping LOD",
      "baseScreenSpaceError",
      0,
      4096,
      1
    )
  );
  optimizationPanelContents.appendChild(baseScreenSpaceError);
  const skipLevelsContainer = document.createElement("div");
  skipLevelsContainer.appendChild(
    createRangeInput("Min. levels to skip", "skipLevels", 0, 10, 1)
  );
  optimizationPanelContents.appendChild(skipLevelsContainer);
  optimizationPanelContents.appendChild(
    createCheckbox(
      "Load only tiles that meet the max SSE.",
      "immediatelyLoadDesiredLevelOfDetail"
    )
  );
  optimizationPanelContents.appendChild(
    createCheckbox("Load siblings of visible tiles", "loadSiblings")
  );
  knockout_default.applyBindings(viewModel, element);
}
Object.defineProperties(Cesium3DTilesInspector.prototype, {
  /**
   * Gets the parent container.
   * @memberof Cesium3DTilesInspector.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof Cesium3DTilesInspector.prototype
   *
   * @type {Cesium3DTilesInspectorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
Cesium3DTilesInspector.prototype.isDestroyed = function() {
  return false;
};
Cesium3DTilesInspector.prototype.destroy = function() {
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  this.viewModel.destroy();
  return destroyObject7(this);
};
var Cesium3DTilesInspector_default = Cesium3DTilesInspector;

// packages/widgets/Source/FullscreenButton/FullscreenButton.js
import {
  defined as defined14,
  destroyObject as destroyObject9,
  DeveloperError as DeveloperError12,
  getElement as getElement6
} from "@cesium/engine";

// packages/widgets/Source/FullscreenButton/FullscreenButtonViewModel.js
import {
  defined as defined13,
  destroyObject as destroyObject8,
  DeveloperError as DeveloperError11,
  Fullscreen,
  getElement as getElement5
} from "@cesium/engine";
function FullscreenButtonViewModel(fullscreenElement, container) {
  if (!defined13(container)) {
    container = document.body;
  }
  container = getElement5(container);
  const that = this;
  const tmpIsFullscreen = knockout_default.observable(Fullscreen.fullscreen);
  const tmpIsEnabled = knockout_default.observable(Fullscreen.enabled);
  const ownerDocument = container.ownerDocument;
  this.isFullscreen = void 0;
  knockout_default.defineProperty(this, "isFullscreen", {
    get: function() {
      return tmpIsFullscreen();
    }
  });
  this.isFullscreenEnabled = void 0;
  knockout_default.defineProperty(this, "isFullscreenEnabled", {
    get: function() {
      return tmpIsEnabled();
    },
    set: function(value) {
      tmpIsEnabled(value && Fullscreen.enabled);
    }
  });
  this.tooltip = void 0;
  knockout_default.defineProperty(this, "tooltip", function() {
    if (!this.isFullscreenEnabled) {
      return "Full screen unavailable";
    }
    return tmpIsFullscreen() ? "Exit full screen" : "Full screen";
  });
  this._command = createCommand_default(
    function() {
      if (Fullscreen.fullscreen) {
        Fullscreen.exitFullscreen();
      } else {
        Fullscreen.requestFullscreen(that._fullscreenElement);
      }
    },
    knockout_default.getObservable(this, "isFullscreenEnabled")
  );
  this._fullscreenElement = getElement5(fullscreenElement) ?? ownerDocument.body;
  this._callback = function() {
    tmpIsFullscreen(Fullscreen.fullscreen);
  };
  ownerDocument.addEventListener(Fullscreen.changeEventName, this._callback);
}
Object.defineProperties(FullscreenButtonViewModel.prototype, {
  /**
   * Gets or sets the HTML element to place into fullscreen mode when the
   * corresponding button is pressed.
   * @memberof FullscreenButtonViewModel.prototype
   *
   * @type {Element}
   */
  fullscreenElement: {
    //TODO:@exception {DeveloperError} value must be a valid HTML Element.
    get: function() {
      return this._fullscreenElement;
    },
    set: function(value) {
      if (!(value instanceof Element)) {
        throw new DeveloperError11("value must be a valid Element.");
      }
      this._fullscreenElement = value;
    }
  },
  /**
   * Gets the Command to toggle fullscreen mode.
   * @memberof FullscreenButtonViewModel.prototype
   *
   * @type {Command}
   */
  command: {
    get: function() {
      return this._command;
    }
  }
});
FullscreenButtonViewModel.prototype.isDestroyed = function() {
  return false;
};
FullscreenButtonViewModel.prototype.destroy = function() {
  document.removeEventListener(Fullscreen.changeEventName, this._callback);
  destroyObject8(this);
};
var FullscreenButtonViewModel_default = FullscreenButtonViewModel;

// packages/widgets/Source/FullscreenButton/FullscreenButton.js
var enterFullScreenPath = "M 83.96875 17.5625 L 83.96875 17.59375 L 76.65625 24.875 L 97.09375 24.96875 L 76.09375 45.96875 L 81.9375 51.8125 L 102.78125 30.9375 L 102.875 51.15625 L 110.15625 43.875 L 110.1875 17.59375 L 83.96875 17.5625 z M 44.125 17.59375 L 17.90625 17.625 L 17.9375 43.90625 L 25.21875 51.1875 L 25.3125 30.96875 L 46.15625 51.8125 L 52 45.96875 L 31 25 L 51.4375 24.90625 L 44.125 17.59375 z M 46.0625 76.03125 L 25.1875 96.875 L 25.09375 76.65625 L 17.8125 83.9375 L 17.8125 110.21875 L 44 110.25 L 51.3125 102.9375 L 30.90625 102.84375 L 51.875 81.875 L 46.0625 76.03125 z M 82 76.15625 L 76.15625 82 L 97.15625 103 L 76.71875 103.0625 L 84.03125 110.375 L 110.25 110.34375 L 110.21875 84.0625 L 102.9375 76.8125 L 102.84375 97 L 82 76.15625 z";
var exitFullScreenPath = "M 104.34375 17.5625 L 83.5 38.4375 L 83.40625 18.21875 L 76.125 25.5 L 76.09375 51.78125 L 102.3125 51.8125 L 102.3125 51.78125 L 109.625 44.5 L 89.1875 44.40625 L 110.1875 23.40625 L 104.34375 17.5625 z M 23.75 17.59375 L 17.90625 23.4375 L 38.90625 44.4375 L 18.5 44.53125 L 25.78125 51.8125 L 52 51.78125 L 51.96875 25.53125 L 44.6875 18.25 L 44.625 38.46875 L 23.75 17.59375 z M 25.6875 76.03125 L 18.375 83.3125 L 38.78125 83.40625 L 17.8125 104.40625 L 23.625 110.25 L 44.5 89.375 L 44.59375 109.59375 L 51.875 102.3125 L 51.875 76.0625 L 25.6875 76.03125 z M 102.375 76.15625 L 76.15625 76.1875 L 76.1875 102.4375 L 83.46875 109.71875 L 83.5625 89.53125 L 104.40625 110.375 L 110.25 104.53125 L 89.25 83.53125 L 109.6875 83.46875 L 102.375 76.15625 z";
function FullscreenButton(container, fullscreenElement) {
  if (!defined14(container)) {
    throw new DeveloperError12("container is required.");
  }
  container = getElement6(container);
  const viewModel = new FullscreenButtonViewModel_default(fullscreenElement, container);
  viewModel._exitFullScreenPath = exitFullScreenPath;
  viewModel._enterFullScreenPath = enterFullScreenPath;
  const element = document.createElement("button");
  element.type = "button";
  element.className = "cesium-button cesium-fullscreenButton";
  element.setAttribute(
    "data-bind",
    "attr: { title: tooltip },click: command,enable: isFullscreenEnabled,cesiumSvgPath: { path: isFullscreen ? _exitFullScreenPath : _enterFullScreenPath, width: 128, height: 128 }"
  );
  container.appendChild(element);
  knockout_default.applyBindings(viewModel, element);
  this._container = container;
  this._viewModel = viewModel;
  this._element = element;
}
Object.defineProperties(FullscreenButton.prototype, {
  /**
   * Gets the parent container.
   * @memberof FullscreenButton.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof FullscreenButton.prototype
   *
   * @type {FullscreenButtonViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
FullscreenButton.prototype.isDestroyed = function() {
  return false;
};
FullscreenButton.prototype.destroy = function() {
  this._viewModel.destroy();
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  return destroyObject9(this);
};
var FullscreenButton_default = FullscreenButton;

// packages/widgets/Source/Geocoder/Geocoder.js
import {
  defined as defined16,
  destroyObject as destroyObject11,
  DeveloperError as DeveloperError14,
  FeatureDetection as FeatureDetection2,
  getElement as getElement8
} from "@cesium/engine";

// packages/widgets/Source/Geocoder/GeocoderViewModel.js
import {
  computeFlyToLocationForRectangle,
  defined as defined15,
  DeveloperError as DeveloperError13,
  destroyObject as destroyObject10,
  Event as Event2,
  GeocoderService,
  GeocodeType,
  getElement as getElement7,
  IonGeocoderService,
  Math as CesiumMath,
  Matrix4,
  Rectangle as Rectangle2,
  sampleTerrainMostDetailed
} from "@cesium/engine";
var DEFAULT_HEIGHT = 1e3;
function GeocoderViewModel(options) {
  if (!defined15(options) || !defined15(options.scene)) {
    throw new DeveloperError13("options.scene is required.");
  }
  if (defined15(options.geocoderServices)) {
    this._geocoderServices = options.geocoderServices;
  } else {
    this._geocoderServices = [new IonGeocoderService({ scene: options.scene })];
  }
  this._viewContainer = options.container;
  this._scene = options.scene;
  this._flightDuration = options.flightDuration;
  this._searchText = "";
  this._isSearchInProgress = false;
  this._wasGeocodeCancelled = false;
  this._previousCredits = [];
  this._complete = new Event2();
  this._suggestions = [];
  this._selectedSuggestion = void 0;
  this._showSuggestions = true;
  this._handleArrowDown = handleArrowDown;
  this._handleArrowUp = handleArrowUp;
  const that = this;
  this._suggestionsVisible = knockout_default.pureComputed(function() {
    const suggestions = knockout_default.getObservable(that, "_suggestions");
    const suggestionsNotEmpty = suggestions().length > 0;
    const showSuggestions = knockout_default.getObservable(that, "_showSuggestions")();
    return suggestionsNotEmpty && showSuggestions;
  });
  this._searchCommand = createCommand_default(function(geocodeType) {
    geocodeType = geocodeType ?? GeocodeType.SEARCH;
    that._focusTextbox = false;
    if (defined15(that._selectedSuggestion)) {
      that.activateSuggestion(that._selectedSuggestion);
      return false;
    }
    that.hideSuggestions();
    if (that.isSearchInProgress) {
      cancelGeocode(that);
    } else {
      return geocode(that, that._geocoderServices, geocodeType);
    }
  });
  this.deselectSuggestion = function() {
    that._selectedSuggestion = void 0;
  };
  this.handleKeyDown = function(data, event) {
    const downKey = event.key === "ArrowDown" || event.key === "Down" || event.keyCode === 40;
    const upKey = event.key === "ArrowUp" || event.key === "Up" || event.keyCode === 38;
    if (downKey || upKey) {
      event.preventDefault();
    }
    return true;
  };
  this.handleKeyUp = function(data, event) {
    const downKey = event.key === "ArrowDown" || event.key === "Down" || event.keyCode === 40;
    const upKey = event.key === "ArrowUp" || event.key === "Up" || event.keyCode === 38;
    const enterKey = event.key === "Enter" || event.keyCode === 13;
    if (upKey) {
      handleArrowUp(that);
    } else if (downKey) {
      handleArrowDown(that);
    } else if (enterKey) {
      that._searchCommand();
    }
    return true;
  };
  this.activateSuggestion = function(data) {
    that.hideSuggestions();
    that._searchText = data.displayName;
    const destination = data.destination;
    clearSuggestions(that);
    that.destinationFound(that, destination);
  };
  this.hideSuggestions = function() {
    that._showSuggestions = false;
    that._selectedSuggestion = void 0;
  };
  this.showSuggestions = function() {
    that._showSuggestions = true;
  };
  this.handleMouseover = function(data, event) {
    if (data !== that._selectedSuggestion) {
      that._selectedSuggestion = data;
    }
  };
  this.keepExpanded = false;
  this.autoComplete = options.autocomplete ?? true;
  this.destinationFound = options.destinationFound ?? GeocoderViewModel.flyToDestination;
  this._focusTextbox = false;
  knockout_default.track(this, [
    "_searchText",
    "_isSearchInProgress",
    "keepExpanded",
    "_suggestions",
    "_selectedSuggestion",
    "_showSuggestions",
    "_focusTextbox"
  ]);
  const searchTextObservable = knockout_default.getObservable(this, "_searchText");
  searchTextObservable.extend({ rateLimit: { timeout: 500 } });
  this._suggestionSubscription = searchTextObservable.subscribe(function() {
    GeocoderViewModel._updateSearchSuggestions(that);
  });
  this.isSearchInProgress = void 0;
  knockout_default.defineProperty(this, "isSearchInProgress", {
    get: function() {
      return this._isSearchInProgress;
    }
  });
  this.searchText = void 0;
  knockout_default.defineProperty(this, "searchText", {
    get: function() {
      if (this.isSearchInProgress) {
        return "Searching...";
      }
      return this._searchText;
    },
    set: function(value) {
      if (typeof value !== "string") {
        throw new DeveloperError13("value must be a valid string.");
      }
      this._searchText = value;
    }
  });
  this.flightDuration = void 0;
  knockout_default.defineProperty(this, "flightDuration", {
    get: function() {
      return this._flightDuration;
    },
    set: function(value) {
      if (defined15(value) && value < 0) {
        throw new DeveloperError13("value must be positive.");
      }
      this._flightDuration = value;
    }
  });
}
Object.defineProperties(GeocoderViewModel.prototype, {
  /**
   * Gets the event triggered on flight completion.
   * @memberof GeocoderViewModel.prototype
   *
   * @type {Event}
   */
  complete: {
    get: function() {
      return this._complete;
    }
  },
  /**
   * Gets the scene to control.
   * @memberof GeocoderViewModel.prototype
   *
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the Command that is executed when the button is clicked.
   * @memberof GeocoderViewModel.prototype
   *
   * @type {Command}
   */
  search: {
    get: function() {
      return this._searchCommand;
    }
  },
  /**
   * Gets the currently selected geocoder search suggestion
   * @memberof GeocoderViewModel.prototype
   *
   * @type {object}
   */
  selectedSuggestion: {
    get: function() {
      return this._selectedSuggestion;
    }
  },
  /**
   * Gets the list of geocoder search suggestions
   * @memberof GeocoderViewModel.prototype
   *
   * @type {object[]}
   */
  suggestions: {
    get: function() {
      return this._suggestions;
    }
  }
});
GeocoderViewModel.prototype.destroy = function() {
  this._suggestionSubscription.dispose();
};
function handleArrowUp(viewModel) {
  if (viewModel._suggestions.length === 0) {
    return;
  }
  const currentIndex = viewModel._suggestions.indexOf(
    viewModel._selectedSuggestion
  );
  if (currentIndex === -1 || currentIndex === 0) {
    viewModel._selectedSuggestion = void 0;
    return;
  }
  const next = currentIndex - 1;
  viewModel._selectedSuggestion = viewModel._suggestions[next];
  GeocoderViewModel._adjustSuggestionsScroll(viewModel, next);
}
function handleArrowDown(viewModel) {
  if (viewModel._suggestions.length === 0) {
    return;
  }
  const numberOfSuggestions = viewModel._suggestions.length;
  const currentIndex = viewModel._suggestions.indexOf(
    viewModel._selectedSuggestion
  );
  const next = (currentIndex + 1) % numberOfSuggestions;
  viewModel._selectedSuggestion = viewModel._suggestions[next];
  GeocoderViewModel._adjustSuggestionsScroll(viewModel, next);
}
function computeFlyToLocationForCartographic(cartographic, terrainProvider) {
  const availability = defined15(terrainProvider) ? terrainProvider.availability : void 0;
  if (!defined15(availability)) {
    cartographic.height += DEFAULT_HEIGHT;
    return Promise.resolve(cartographic);
  }
  return sampleTerrainMostDetailed(terrainProvider, [cartographic]).then(
    function(positionOnTerrain) {
      cartographic = positionOnTerrain[0];
      cartographic.height += DEFAULT_HEIGHT;
      return cartographic;
    }
  );
}
function flyToDestination(viewModel, destination) {
  const scene = viewModel._scene;
  const ellipsoid = scene.ellipsoid;
  const camera = scene.camera;
  const terrainProvider = scene.terrainProvider;
  let finalDestination = destination;
  let promise;
  if (destination instanceof Rectangle2) {
    if (CesiumMath.equalsEpsilon(
      destination.south,
      destination.north,
      CesiumMath.EPSILON7
    ) && CesiumMath.equalsEpsilon(
      destination.east,
      destination.west,
      CesiumMath.EPSILON7
    )) {
      destination = Rectangle2.center(destination);
    } else {
      promise = computeFlyToLocationForRectangle(destination, scene);
    }
  } else {
    destination = ellipsoid.cartesianToCartographic(destination);
  }
  if (!defined15(promise)) {
    promise = computeFlyToLocationForCartographic(destination, terrainProvider);
  }
  return promise.then(function(result) {
    finalDestination = ellipsoid.cartographicToCartesian(result);
  }).finally(function() {
    camera.flyTo({
      destination: finalDestination,
      complete: function() {
        viewModel._complete.raiseEvent();
      },
      duration: viewModel._flightDuration,
      endTransform: Matrix4.IDENTITY
    });
  });
}
async function attemptGeocode(geocoderService, query, geocodeType) {
  try {
    const result = await geocoderService.geocode(query, geocodeType);
    return {
      state: "fulfilled",
      value: result,
      credits: geocoderService.credit
    };
  } catch (error) {
    return { state: "rejected", reason: error };
  }
}
async function geocode(viewModel, geocoderServices, geocodeType) {
  const query = viewModel._searchText;
  if (hasOnlyWhitespace(query)) {
    viewModel.showSuggestions();
    return;
  }
  viewModel._isSearchInProgress = true;
  viewModel._wasGeocodeCancelled = false;
  let i;
  let result;
  for (i = 0; i < geocoderServices.length; i++) {
    if (viewModel._wasGeocodeCancelled) {
      return;
    }
    result = await attemptGeocode(geocoderServices[i], query, geocodeType);
    if (defined15(result) && result.state === "fulfilled" && result.value.length > 0) {
      break;
    }
  }
  if (viewModel._wasGeocodeCancelled) {
    return;
  }
  viewModel._isSearchInProgress = false;
  clearCredits(viewModel);
  const geocoderResults = result.value;
  if (result.state === "fulfilled" && defined15(geocoderResults) && geocoderResults.length > 0) {
    viewModel._searchText = geocoderResults[0].displayName;
    viewModel.destinationFound(viewModel, geocoderResults[0].destination);
    const credits = updateCredits(
      viewModel,
      GeocoderService.getCreditsFromResult(geocoderResults[0])
    );
    if (!defined15(credits)) {
      updateCredit(viewModel, geocoderServices[i].credit);
    }
    return;
  }
  viewModel._searchText = `${query} (not found)`;
}
function updateCredit(viewModel, credit) {
  if (defined15(credit) && !viewModel._scene.isDestroyed() && !viewModel._scene.frameState.creditDisplay.isDestroyed()) {
    viewModel._scene.frameState.creditDisplay.addStaticCredit(credit);
    viewModel._previousCredits.push(credit);
  }
}
function updateCredits(viewModel, credits) {
  if (defined15(credits)) {
    credits.forEach((credit) => updateCredit(viewModel, credit));
  }
  return credits;
}
function clearCredits(viewModel) {
  if (!viewModel._scene.isDestroyed() && !viewModel._scene.frameState.creditDisplay.isDestroyed()) {
    viewModel._previousCredits.forEach((credit) => {
      viewModel._scene.frameState.creditDisplay.removeStaticCredit(credit);
    });
  }
  viewModel._previousCredits.length = 0;
}
function adjustSuggestionsScroll(viewModel, focusedItemIndex) {
  const container = getElement7(viewModel._viewContainer);
  const searchResults = container.getElementsByClassName("search-results")[0];
  const listItems = container.getElementsByTagName("li");
  const element = listItems[focusedItemIndex];
  if (focusedItemIndex === 0) {
    searchResults.scrollTop = 0;
    return;
  }
  const offsetTop = element.offsetTop;
  if (offsetTop + element.clientHeight > searchResults.clientHeight) {
    searchResults.scrollTop = offsetTop + element.clientHeight;
  } else if (offsetTop < searchResults.scrollTop) {
    searchResults.scrollTop = offsetTop;
  }
}
function cancelGeocode(viewModel) {
  if (viewModel._isSearchInProgress) {
    viewModel._isSearchInProgress = false;
    viewModel._wasGeocodeCancelled = true;
  }
}
function hasOnlyWhitespace(string) {
  return /^\s*$/.test(string);
}
function clearSuggestions(viewModel) {
  knockout_default.getObservable(viewModel, "_suggestions").removeAll();
}
async function updateSearchSuggestions(viewModel) {
  if (!viewModel.autoComplete) {
    return;
  }
  const query = viewModel._searchText;
  clearSuggestions(viewModel);
  clearCredits(viewModel);
  if (hasOnlyWhitespace(query)) {
    return;
  }
  for (const service of viewModel._geocoderServices) {
    const newResults = await service.geocode(query, GeocodeType.AUTOCOMPLETE);
    viewModel._suggestions = viewModel._suggestions.concat(newResults);
    if (newResults.length > 0) {
      let useDefaultCredit = true;
      newResults.forEach((result) => {
        const credits = GeocoderService.getCreditsFromResult(result);
        useDefaultCredit = useDefaultCredit && !defined15(credits);
        updateCredits(viewModel, credits);
      });
      if (useDefaultCredit) {
        updateCredit(viewModel, service.credit);
      }
    }
    if (viewModel._suggestions.length >= 5) {
      return;
    }
  }
}
GeocoderViewModel.flyToDestination = flyToDestination;
GeocoderViewModel._updateSearchSuggestions = updateSearchSuggestions;
GeocoderViewModel._adjustSuggestionsScroll = adjustSuggestionsScroll;
GeocoderViewModel.prototype.isDestroyed = function() {
  return false;
};
GeocoderViewModel.prototype.destroy = function() {
  clearCredits(this);
  return destroyObject10(this);
};
var GeocoderViewModel_default = GeocoderViewModel;

// packages/widgets/Source/Geocoder/Geocoder.js
var startSearchPath = "M29.772,26.433l-7.126-7.126c0.96-1.583,1.523-3.435,1.524-5.421C24.169,8.093,19.478,3.401,13.688,3.399C7.897,3.401,3.204,8.093,3.204,13.885c0,5.789,4.693,10.481,10.484,10.481c1.987,0,3.839-0.563,5.422-1.523l7.128,7.127L29.772,26.433zM7.203,13.885c0.006-3.582,2.903-6.478,6.484-6.486c3.579,0.008,6.478,2.904,6.484,6.486c-0.007,3.58-2.905,6.476-6.484,6.484C10.106,20.361,7.209,17.465,7.203,13.885z";
var stopSearchPath = "M24.778,21.419 19.276,15.917 24.777,10.415 21.949,7.585 16.447,13.087 10.945,7.585 8.117,10.415 13.618,15.917 8.116,21.419 10.946,24.248 16.447,18.746 21.948,24.248z";
function Geocoder(options) {
  if (!defined16(options) || !defined16(options.container)) {
    throw new DeveloperError14("options.container is required.");
  }
  if (!defined16(options.scene)) {
    throw new DeveloperError14("options.scene is required.");
  }
  const container = getElement8(options.container);
  const viewModel = new GeocoderViewModel_default(options);
  viewModel._startSearchPath = startSearchPath;
  viewModel._stopSearchPath = stopSearchPath;
  const form = document.createElement("form");
  form.setAttribute("data-bind", "submit: search");
  const textBox = document.createElement("input");
  textBox.type = "search";
  textBox.className = "cesium-geocoder-input";
  textBox.setAttribute("placeholder", "Enter an address or landmark...");
  textBox.setAttribute(
    "data-bind",
    'textInput: searchText,disable: isSearchInProgress,event: { keyup: handleKeyUp, keydown: handleKeyDown, mouseover: deselectSuggestion },css: { "cesium-geocoder-input-wide" : keepExpanded || searchText.length > 0 },hasFocus: _focusTextbox'
  );
  this._onTextBoxFocus = function() {
    setTimeout(function() {
      textBox.select();
    }, 0);
  };
  textBox.addEventListener("focus", this._onTextBoxFocus, false);
  form.appendChild(textBox);
  this._textBox = textBox;
  const searchButton = document.createElement("span");
  searchButton.className = "cesium-geocoder-searchButton";
  searchButton.setAttribute(
    "data-bind",
    "click: search,cesiumSvgPath: { path: isSearchInProgress ? _stopSearchPath : _startSearchPath, width: 32, height: 32 }"
  );
  form.appendChild(searchButton);
  container.appendChild(form);
  const searchSuggestionsContainer = document.createElement("div");
  searchSuggestionsContainer.className = "search-results";
  searchSuggestionsContainer.setAttribute(
    "data-bind",
    "visible: _suggestionsVisible"
  );
  const suggestionsList = document.createElement("ul");
  suggestionsList.setAttribute("data-bind", "foreach: _suggestions");
  const suggestions = document.createElement("li");
  suggestionsList.appendChild(suggestions);
  suggestions.setAttribute(
    "data-bind",
    "text: $data.displayName, click: $parent.activateSuggestion, event: { mouseover: $parent.handleMouseover}, css: { active: $data === $parent._selectedSuggestion }"
  );
  searchSuggestionsContainer.appendChild(suggestionsList);
  container.appendChild(searchSuggestionsContainer);
  knockout_default.applyBindings(viewModel, form);
  knockout_default.applyBindings(viewModel, searchSuggestionsContainer);
  this._container = container;
  this._searchSuggestionsContainer = searchSuggestionsContainer;
  this._viewModel = viewModel;
  this._form = form;
  this._onInputBegin = function(e) {
    let target = e.target;
    if (typeof e.composedPath === "function") {
      target = e.composedPath()[0];
    }
    if (!container.contains(target)) {
      viewModel._focusTextbox = false;
      viewModel.hideSuggestions();
    }
  };
  this._onInputEnd = function(e) {
    viewModel._focusTextbox = true;
    viewModel.showSuggestions();
  };
  if (FeatureDetection2.supportsPointerEvents()) {
    document.addEventListener("pointerdown", this._onInputBegin, true);
    container.addEventListener("pointerup", this._onInputEnd, true);
    container.addEventListener("pointercancel", this._onInputEnd, true);
  } else {
    document.addEventListener("mousedown", this._onInputBegin, true);
    container.addEventListener("mouseup", this._onInputEnd, true);
    document.addEventListener("touchstart", this._onInputBegin, true);
    container.addEventListener("touchend", this._onInputEnd, true);
    container.addEventListener("touchcancel", this._onInputEnd, true);
  }
}
Object.defineProperties(Geocoder.prototype, {
  /**
   * Gets the parent container.
   * @memberof Geocoder.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the parent container.
   * @memberof Geocoder.prototype
   *
   * @type {Element}
   */
  searchSuggestionsContainer: {
    get: function() {
      return this._searchSuggestionsContainer;
    }
  },
  /**
   * Gets the view model.
   * @memberof Geocoder.prototype
   *
   * @type {GeocoderViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
Geocoder.prototype.isDestroyed = function() {
  return false;
};
Geocoder.prototype.destroy = function() {
  const container = this._container;
  if (FeatureDetection2.supportsPointerEvents()) {
    document.removeEventListener("pointerdown", this._onInputBegin, true);
    container.removeEventListener("pointerup", this._onInputEnd, true);
  } else {
    document.removeEventListener("mousedown", this._onInputBegin, true);
    container.removeEventListener("mouseup", this._onInputEnd, true);
    document.removeEventListener("touchstart", this._onInputBegin, true);
    container.removeEventListener("touchend", this._onInputEnd, true);
  }
  this._viewModel.destroy();
  knockout_default.cleanNode(this._form);
  knockout_default.cleanNode(this._searchSuggestionsContainer);
  container.removeChild(this._form);
  container.removeChild(this._searchSuggestionsContainer);
  this._textBox.removeEventListener("focus", this._onTextBoxFocus, false);
  return destroyObject11(this);
};
var Geocoder_default = Geocoder;

// packages/widgets/Source/HomeButton/HomeButton.js
import {
  defined as defined18,
  destroyObject as destroyObject12,
  DeveloperError as DeveloperError16,
  getElement as getElement9
} from "@cesium/engine";

// packages/widgets/Source/HomeButton/HomeButtonViewModel.js
import { defined as defined17, DeveloperError as DeveloperError15 } from "@cesium/engine";
function HomeButtonViewModel(scene, duration) {
  if (!defined17(scene)) {
    throw new DeveloperError15("scene is required.");
  }
  this._scene = scene;
  this._duration = duration;
  const that = this;
  this._command = createCommand_default(function() {
    that._scene.camera.flyHome(that._duration);
  });
  this.tooltip = "View Home";
  knockout_default.track(this, ["tooltip"]);
}
Object.defineProperties(HomeButtonViewModel.prototype, {
  /**
   * Gets the scene to control.
   * @memberof HomeButtonViewModel.prototype
   *
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the Command that is executed when the button is clicked.
   * @memberof HomeButtonViewModel.prototype
   *
   * @type {Command}
   */
  command: {
    get: function() {
      return this._command;
    }
  },
  /**
   * Gets or sets the the duration of the camera flight in seconds.
   * A value of zero causes the camera to instantly switch to home view.
   * The duration will be computed based on the distance when undefined.
   * @memberof HomeButtonViewModel.prototype
   *
   * @type {number|undefined}
   */
  duration: {
    get: function() {
      return this._duration;
    },
    set: function(value) {
      if (defined17(value) && value < 0) {
        throw new DeveloperError15("value must be positive.");
      }
      this._duration = value;
    }
  }
});
var HomeButtonViewModel_default = HomeButtonViewModel;

// packages/widgets/Source/HomeButton/HomeButton.js
function HomeButton(container, scene, duration) {
  if (!defined18(container)) {
    throw new DeveloperError16("container is required.");
  }
  container = getElement9(container);
  const viewModel = new HomeButtonViewModel_default(scene, duration);
  viewModel._svgPath = "M14,4l-10,8.75h20l-4.25-3.7188v-4.6562h-2.812v2.1875l-2.938-2.5625zm-7.0938,9.906v10.094h14.094v-10.094h-14.094zm2.1876,2.313h3.3122v4.25h-3.3122v-4.25zm5.8442,1.281h3.406v6.438h-3.406v-6.438z";
  const element = document.createElement("button");
  element.type = "button";
  element.className = "cesium-button cesium-toolbar-button cesium-home-button";
  element.setAttribute(
    "data-bind",
    "attr: { title: tooltip },click: command,cesiumSvgPath: { path: _svgPath, width: 28, height: 28 }"
  );
  container.appendChild(element);
  knockout_default.applyBindings(viewModel, element);
  this._container = container;
  this._viewModel = viewModel;
  this._element = element;
}
Object.defineProperties(HomeButton.prototype, {
  /**
   * Gets the parent container.
   * @memberof HomeButton.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof HomeButton.prototype
   *
   * @type {HomeButtonViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
HomeButton.prototype.isDestroyed = function() {
  return false;
};
HomeButton.prototype.destroy = function() {
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  return destroyObject12(this);
};
var HomeButton_default = HomeButton;

// packages/widgets/Source/I3SBuildingSceneLayerExplorer/I3SBuildingSceneLayerExplorer.js
import { Check as Check4, defined as defined20 } from "@cesium/engine";

// packages/widgets/Source/I3SBuildingSceneLayerExplorer/I3SBuildingSceneLayerExplorerViewModel.js
import { defined as defined19 } from "@cesium/engine";
function expandItemsHandler(data, event) {
  const nestedList = event.currentTarget.parentElement.parentElement.querySelector(
    `#${data.name}-expander`
  );
  nestedList.classList.toggle("active");
  event.currentTarget.textContent = event.currentTarget.textContent === "+" ? "-" : "+";
}
function trackSublayer(sublayer, viewModel) {
  knockout_default.track(sublayer);
  for (let i = 0; i < sublayer.sublayers.length; i++) {
    trackSublayer(sublayer.sublayers[i], viewModel);
  }
}
function isFullModel(layer) {
  return layer.modelName === "FullModel";
}
function isOverview(layer) {
  return layer.modelName === "Overview";
}
function isTopLayer(layer) {
  return isOverview(layer) || isFullModel(layer);
}
function addTopLayer(layer, viewModel) {
  if (isTopLayer(layer)) {
    layer.visibility = false;
    for (let i = 0; i < layer.sublayers.length; i++) {
      layer.sublayers[i].visibility = true;
    }
    const topLayer = {
      name: layer.name,
      modelName: layer.modelName,
      disable: knockout_default.observable(false),
      index: viewModel.sublayers.length
    };
    viewModel.topLayers.push(topLayer);
    viewModel.sublayers.push(layer);
    return topLayer;
  }
}
function handleTopLayerSelector(layer, viewModel) {
  if (isTopLayer(layer)) {
    viewModel.sublayers.forEach((elem) => elem.visibility = false);
    viewModel.sublayers[layer.index].visibility = true;
    const bsl = document.getElementById("bsl-wrapper");
    if (isFullModel(layer)) {
      viewModel.currentLevel = viewModel.selectedLevel;
      bsl.style.display = "block";
    } else {
      viewModel.selectedLevel = viewModel.currentLevel;
      viewModel.currentLevel = "All";
      bsl.style.display = "none";
    }
  }
}
async function setLevels(i3sProvider, levels) {
  try {
    const attributes = i3sProvider.getAttributeNames();
    for (let index = 0; index < attributes.length; index++) {
      if (attributes[index] === "BldgLevel") {
        const values = i3sProvider.getAttributeValues(attributes[index]);
        for (let i = 0; i < values.length; i++) {
          levels.push(values[i]);
        }
      }
    }
    levels.sort((a, b) => a - b);
    levels.unshift("All");
  } catch (error) {
    console.log(`There was an error getting attributes: ${error}`);
  }
}
function I3SBuildingSceneLayerExplorerViewModel(i3sProvider) {
  const that = this;
  this.levels = [];
  this.viewModel = {
    sublayers: [],
    levels: this.levels,
    currentLevel: knockout_default.observable(),
    selectedLevel: "All",
    topLayers: [
      {
        name: "Select a layer to explore...",
        disable: knockout_default.observable(true),
        index: -1
      }
    ],
    currentLayer: knockout_default.observable(),
    expandClickHandler: expandItemsHandler,
    setOptionDisable: function(option, item) {
      knockout_default.applyBindingsToNode(option, { disable: item.disable }, item);
    },
    defaultLayer: void 0
  };
  this.viewModel.currentLayer.subscribe(function(layer) {
    handleTopLayerSelector(layer, that.viewModel);
  });
  const sublayers = i3sProvider.sublayers;
  for (let i = 0; i < sublayers.length; i++) {
    trackSublayer(sublayers[i], this.viewModel);
    const topLayer = addTopLayer(sublayers[i], this.viewModel);
    if (defined19(topLayer) && (isOverview(topLayer) || !defined19(this.viewModel.defaultLayer) && isFullModel(topLayer))) {
      this.viewModel.defaultLayer = topLayer;
    }
  }
  if (this.viewModel.topLayers.length === 1 && sublayers.length > 0) {
    i3sProvider.show = false;
    const fullModel = {
      name: "Full Model",
      modelName: "FullModel",
      visibility: i3sProvider.show,
      sublayers: i3sProvider.sublayers
    };
    this.viewModel.defaultLayer = addTopLayer(fullModel, this.viewModel);
    this.viewModel.currentLayer.subscribe(function(layer) {
      i3sProvider.show = isFullModel(layer);
    });
  } else if (this.viewModel.topLayers.length === 1) {
    this.viewModel.topLayers[0].name = "Building layers not found";
  }
  setLevels(i3sProvider, this.levels);
  this.viewModel.currentLevel.subscribe(function(newValue) {
    if (newValue !== "All") {
      i3sProvider.filterByAttributes([
        {
          name: "BldgLevel",
          values: [newValue]
        }
      ]);
    } else {
      i3sProvider.filterByAttributes();
    }
  });
  return this.viewModel;
}
var I3SBuildingSceneLayerExplorerViewModel_default = I3SBuildingSceneLayerExplorerViewModel;

// packages/widgets/Source/I3SBuildingSceneLayerExplorer/I3SBuildingSceneLayerExplorer.js
function I3SBuildingSceneLayerExplorer(containerId, i3sProvider) {
  const container = document.getElementById(containerId);
  Check4.defined("container", container);
  Check4.defined("i3sProvider", i3sProvider);
  const htmlWrapper = document.createElement("div");
  htmlWrapper.classList.add("cesium-viewer-i3s-explorer");
  htmlWrapper.innerHTML = `
        <h3>Building explorer</h3>
        <select
          data-bind="options: topLayers, optionsText: 'name', optionsAfterRender: setOptionDisable, value: currentLayer"
        ></select>
        <div id="bsl-wrapper">
          <h3>Select Level</h3>
          <select data-bind="options: levels, value: currentLevel"></select>
          <h3>Disciplines & Categories</h3>
          <ul class="layersList" data-bind="foreach: sublayers">
            <ul class="layersList" data-bind="foreach: sublayers.sort(function (l, r) { return l.name.localeCompare(r.name) })">
              <li>
                <div class="li-wrapper">
                  <span
                    class="expandItem"
                    data-bind="click: $root.expandClickHandler"
                    >+</span
                  >
                  <input
                    type="checkbox"
                    data-bind="checked: visibility, valueUpdate: 'input', attr: { id: name}"
                  />
                  <label data-bind="attr: { for: name}">
                    <span data-bind="text: name"></span>
                  </label>
                </div>
                <ul class="nested" data-bind="attr: { id: name + '-expander'}">
                  <li data-bind="foreach: sublayers.sort(function (l, r) { return l.name.localeCompare(r.name) })">
                    <div class="li-wrapper">
                      <input
                        type="checkbox"
                        data-bind="checked: visibility, valueUpdate: 'input', attr: { id: name}"
                      />
                      <label data-bind="attr: { for: name}">
                        <span data-bind="text: name"></span>
                      </label>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </ul>
        </div>`;
  container.appendChild(htmlWrapper);
  const viewModel = new I3SBuildingSceneLayerExplorerViewModel_default(i3sProvider);
  knockout_default.track(viewModel);
  knockout_default.applyBindings(viewModel, container);
  if (defined20(viewModel.defaultLayer)) {
    viewModel.currentLayer = viewModel.defaultLayer;
  }
}
var I3SBuildingSceneLayerExplorer_default = I3SBuildingSceneLayerExplorer;

// packages/widgets/Source/InfoBox/InfoBox.js
import {
  buildModuleUrl as buildModuleUrl3,
  Check as Check5,
  Color as Color3,
  defined as defined22,
  destroyObject as destroyObject13,
  getElement as getElement10
} from "@cesium/engine";

// packages/widgets/Source/InfoBox/InfoBoxViewModel.js
import { defined as defined21, Event as Event3 } from "@cesium/engine";
var cameraEnabledPath = "M 13.84375 7.03125 C 11.412798 7.03125 9.46875 8.975298 9.46875 11.40625 L 9.46875 11.59375 L 2.53125 7.21875 L 2.53125 24.0625 L 9.46875 19.6875 C 9.4853444 22.104033 11.423165 24.0625 13.84375 24.0625 L 25.875 24.0625 C 28.305952 24.0625 30.28125 22.087202 30.28125 19.65625 L 30.28125 11.40625 C 30.28125 8.975298 28.305952 7.03125 25.875 7.03125 L 13.84375 7.03125 z";
var cameraDisabledPath = "M 27.34375 1.65625 L 5.28125 27.9375 L 8.09375 30.3125 L 30.15625 4.03125 L 27.34375 1.65625 z M 13.84375 7.03125 C 11.412798 7.03125 9.46875 8.975298 9.46875 11.40625 L 9.46875 11.59375 L 2.53125 7.21875 L 2.53125 24.0625 L 9.46875 19.6875 C 9.4724893 20.232036 9.5676108 20.7379 9.75 21.21875 L 21.65625 7.03125 L 13.84375 7.03125 z M 28.21875 7.71875 L 14.53125 24.0625 L 25.875 24.0625 C 28.305952 24.0625 30.28125 22.087202 30.28125 19.65625 L 30.28125 11.40625 C 30.28125 9.8371439 29.456025 8.4902779 28.21875 7.71875 z";
function InfoBoxViewModel() {
  this._cameraClicked = new Event3();
  this._closeClicked = new Event3();
  this.maxHeight = 500;
  this.enableCamera = false;
  this.isCameraTracking = false;
  this.showInfo = false;
  this.titleText = "";
  this.description = "";
  knockout_default.track(this, [
    "showInfo",
    "titleText",
    "description",
    "maxHeight",
    "enableCamera",
    "isCameraTracking"
  ]);
  this._loadingIndicatorHtml = '<div class="cesium-infoBox-loadingContainer"><span class="cesium-infoBox-loading"></span></div>';
  this.cameraIconPath = void 0;
  knockout_default.defineProperty(this, "cameraIconPath", {
    get: function() {
      return !this.enableCamera || this.isCameraTracking ? cameraDisabledPath : cameraEnabledPath;
    }
  });
  knockout_default.defineProperty(this, "_bodyless", {
    get: function() {
      return !defined21(this.description) || this.description.length === 0;
    }
  });
}
InfoBoxViewModel.prototype.maxHeightOffset = function(offset) {
  return `${this.maxHeight - offset}px`;
};
Object.defineProperties(InfoBoxViewModel.prototype, {
  /**
   * Gets an {@link Event} that is fired when the user clicks the camera icon.
   * @memberof InfoBoxViewModel.prototype
   * @type {Event}
   */
  cameraClicked: {
    get: function() {
      return this._cameraClicked;
    }
  },
  /**
   * Gets an {@link Event} that is fired when the user closes the info box.
   * @memberof InfoBoxViewModel.prototype
   * @type {Event}
   */
  closeClicked: {
    get: function() {
      return this._closeClicked;
    }
  }
});
var InfoBoxViewModel_default = InfoBoxViewModel;

// packages/widgets/Source/InfoBox/InfoBox.js
function InfoBox(container) {
  Check5.defined("container", container);
  container = getElement10(container);
  const infoElement = document.createElement("div");
  infoElement.className = "cesium-infoBox";
  infoElement.setAttribute(
    "data-bind",
    'css: { "cesium-infoBox-visible" : showInfo, "cesium-infoBox-bodyless" : _bodyless }'
  );
  container.appendChild(infoElement);
  const titleElement = document.createElement("div");
  titleElement.className = "cesium-infoBox-title";
  titleElement.setAttribute("data-bind", "text: titleText");
  infoElement.appendChild(titleElement);
  const cameraElement = document.createElement("button");
  cameraElement.type = "button";
  cameraElement.className = "cesium-button cesium-infoBox-camera";
  cameraElement.setAttribute(
    "data-bind",
    'attr: { title: "Focus camera on object" },click: function () { cameraClicked.raiseEvent(this); },enable: enableCamera,cesiumSvgPath: { path: cameraIconPath, width: 32, height: 32 }'
  );
  infoElement.appendChild(cameraElement);
  const closeElement = document.createElement("button");
  closeElement.type = "button";
  closeElement.className = "cesium-infoBox-close";
  closeElement.setAttribute(
    "data-bind",
    "click: function () { closeClicked.raiseEvent(this); }"
  );
  closeElement.innerHTML = "&times;";
  infoElement.appendChild(closeElement);
  const frame = document.createElement("iframe");
  frame.className = "cesium-infoBox-iframe";
  frame.setAttribute("sandbox", "allow-same-origin allow-popups allow-forms");
  frame.setAttribute(
    "data-bind",
    "style : { maxHeight : maxHeightOffset(40) }"
  );
  frame.setAttribute("allowfullscreen", true);
  infoElement.appendChild(frame);
  const viewModel = new InfoBoxViewModel_default();
  knockout_default.applyBindings(viewModel, infoElement);
  this._container = container;
  this._element = infoElement;
  this._frame = frame;
  this._viewModel = viewModel;
  this._descriptionSubscription = void 0;
  const that = this;
  frame.addEventListener("load", function() {
    const frameDocument = frame.contentDocument;
    const cssLink = frameDocument.createElement("link");
    cssLink.href = buildModuleUrl3("Widgets/InfoBox/InfoBoxDescription.css");
    cssLink.rel = "stylesheet";
    cssLink.type = "text/css";
    const frameContent = frameDocument.createElement("div");
    frameContent.className = "cesium-infoBox-description";
    frameDocument.head.appendChild(cssLink);
    frameDocument.body.appendChild(frameContent);
    that._descriptionSubscription = subscribeAndEvaluate_default(
      viewModel,
      "description",
      function(value) {
        frame.style.height = "5px";
        frameContent.innerHTML = value;
        let background = null;
        const firstElementChild = frameContent.firstElementChild;
        if (firstElementChild !== null && frameContent.childNodes.length === 1) {
          const style = window.getComputedStyle(firstElementChild);
          if (style !== null) {
            const backgroundColor = style["background-color"];
            const color = Color3.fromCssColorString(backgroundColor);
            if (defined22(color) && color.alpha !== 0) {
              background = style["background-color"];
            }
          }
        }
        infoElement.style["background-color"] = background;
        const height = frameContent.getBoundingClientRect().height;
        frame.style.height = `${height}px`;
      }
    );
  });
  frame.setAttribute("src", "about:blank");
}
Object.defineProperties(InfoBox.prototype, {
  /**
   * Gets the parent container.
   * @memberof InfoBox.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof InfoBox.prototype
   *
   * @type {InfoBoxViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  },
  /**
   * Gets the iframe used to display the description.
   * @memberof InfoBox.prototype
   *
   * @type {HTMLIFrameElement}
   */
  frame: {
    get: function() {
      return this._frame;
    }
  }
});
InfoBox.prototype.isDestroyed = function() {
  return false;
};
InfoBox.prototype.destroy = function() {
  const container = this._container;
  knockout_default.cleanNode(this._element);
  container.removeChild(this._element);
  if (defined22(this._descriptionSubscription)) {
    this._descriptionSubscription.dispose();
  }
  return destroyObject13(this);
};
var InfoBox_default = InfoBox;

// packages/widgets/Source/NavigationHelpButton/NavigationHelpButton.js
import {
  buildModuleUrl as buildModuleUrl4,
  defined as defined23,
  destroyObject as destroyObject14,
  DeveloperError as DeveloperError17,
  FeatureDetection as FeatureDetection3,
  getElement as getElement11
} from "@cesium/engine";

// packages/widgets/Source/NavigationHelpButton/NavigationHelpButtonViewModel.js
function NavigationHelpButtonViewModel() {
  this.showInstructions = false;
  const that = this;
  this._command = createCommand_default(function() {
    that.showInstructions = !that.showInstructions;
  });
  this._showClick = createCommand_default(function() {
    that._touch = false;
  });
  this._showTouch = createCommand_default(function() {
    that._touch = true;
  });
  this._touch = false;
  this.tooltip = "Navigation Instructions";
  knockout_default.track(this, ["tooltip", "showInstructions", "_touch"]);
}
Object.defineProperties(NavigationHelpButtonViewModel.prototype, {
  /**
   * Gets the Command that is executed when the button is clicked.
   * @memberof NavigationHelpButtonViewModel.prototype
   *
   * @type {Command}
   */
  command: {
    get: function() {
      return this._command;
    }
  },
  /**
   * Gets the Command that is executed when the mouse instructions should be shown.
   * @memberof NavigationHelpButtonViewModel.prototype
   *
   * @type {Command}
   */
  showClick: {
    get: function() {
      return this._showClick;
    }
  },
  /**
   * Gets the Command that is executed when the touch instructions should be shown.
   * @memberof NavigationHelpButtonViewModel.prototype
   *
   * @type {Command}
   */
  showTouch: {
    get: function() {
      return this._showTouch;
    }
  }
});
var NavigationHelpButtonViewModel_default = NavigationHelpButtonViewModel;

// packages/widgets/Source/NavigationHelpButton/NavigationHelpButton.js
function NavigationHelpButton(options) {
  if (!defined23(options) || !defined23(options.container)) {
    throw new DeveloperError17("options.container is required.");
  }
  const container = getElement11(options.container);
  const viewModel = new NavigationHelpButtonViewModel_default();
  const showInsructionsDefault = options.instructionsInitiallyVisible ?? false;
  viewModel.showInstructions = showInsructionsDefault;
  viewModel._svgPath = "M16,1.466C7.973,1.466,1.466,7.973,1.466,16c0,8.027,6.507,14.534,14.534,14.534c8.027,0,14.534-6.507,14.534-14.534C30.534,7.973,24.027,1.466,16,1.466z M17.328,24.371h-2.707v-2.596h2.707V24.371zM17.328,19.003v0.858h-2.707v-1.057c0-3.19,3.63-3.696,3.63-5.963c0-1.034-0.924-1.826-2.134-1.826c-1.254,0-2.354,0.924-2.354,0.924l-1.541-1.915c0,0,1.519-1.584,4.137-1.584c2.487,0,4.796,1.54,4.796,4.136C21.156,16.208,17.328,16.627,17.328,19.003z";
  const wrapper = document.createElement("span");
  wrapper.className = "cesium-navigationHelpButton-wrapper";
  container.appendChild(wrapper);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "cesium-button cesium-toolbar-button cesium-navigation-help-button";
  button.setAttribute(
    "data-bind",
    "attr: { title: tooltip },click: command,cesiumSvgPath: { path: _svgPath, width: 32, height: 32 }"
  );
  wrapper.appendChild(button);
  const instructionContainer = document.createElement("div");
  instructionContainer.className = "cesium-navigation-help";
  instructionContainer.setAttribute(
    "data-bind",
    'css: { "cesium-navigation-help-visible" : showInstructions}'
  );
  wrapper.appendChild(instructionContainer);
  const mouseButton = document.createElement("button");
  mouseButton.type = "button";
  mouseButton.className = "cesium-navigation-button cesium-navigation-button-left";
  mouseButton.setAttribute(
    "data-bind",
    'click: showClick, css: {"cesium-navigation-button-selected": !_touch, "cesium-navigation-button-unselected": _touch}'
  );
  const mouseIcon = document.createElement("img");
  mouseIcon.src = buildModuleUrl4("Widgets/Images/NavigationHelp/Mouse.svg");
  mouseIcon.className = "cesium-navigation-button-icon";
  mouseIcon.style.width = "25px";
  mouseIcon.style.height = "25px";
  mouseButton.appendChild(mouseIcon);
  mouseButton.appendChild(document.createTextNode("Mouse"));
  const touchButton = document.createElement("button");
  touchButton.type = "button";
  touchButton.className = "cesium-navigation-button cesium-navigation-button-right";
  touchButton.setAttribute(
    "data-bind",
    'click: showTouch, css: {"cesium-navigation-button-selected": _touch, "cesium-navigation-button-unselected": !_touch}'
  );
  const touchIcon = document.createElement("img");
  touchIcon.src = buildModuleUrl4("Widgets/Images/NavigationHelp/Touch.svg");
  touchIcon.className = "cesium-navigation-button-icon";
  touchIcon.style.width = "25px";
  touchIcon.style.height = "25px";
  touchButton.appendChild(touchIcon);
  touchButton.appendChild(document.createTextNode("Touch"));
  instructionContainer.appendChild(mouseButton);
  instructionContainer.appendChild(touchButton);
  const clickInstructions = document.createElement("div");
  clickInstructions.className = "cesium-click-navigation-help cesium-navigation-help-instructions";
  clickInstructions.setAttribute(
    "data-bind",
    'css: { "cesium-click-navigation-help-visible" : !_touch}'
  );
  clickInstructions.innerHTML = `            <table>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/MouseLeft.svg"
  )}" width="48" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-pan">Pan view</div>                        <div class="cesium-navigation-help-details">Left click + drag</div>                    </td>                </tr>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/MouseRight.svg"
  )}" width="48" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-zoom">Zoom view</div>                        <div class="cesium-navigation-help-details">Right click + drag, or</div>                        <div class="cesium-navigation-help-details">Mouse wheel scroll</div>                    </td>                </tr>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/MouseMiddle.svg"
  )}" width="48" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-rotate">Rotate view</div>                        <div class="cesium-navigation-help-details">Middle click + drag, or</div>                        <div class="cesium-navigation-help-details">CTRL + Left/Right click + drag</div>                    </td>                </tr>            </table>`;
  instructionContainer.appendChild(clickInstructions);
  const touchInstructions = document.createElement("div");
  touchInstructions.className = "cesium-touch-navigation-help cesium-navigation-help-instructions";
  touchInstructions.setAttribute(
    "data-bind",
    'css: { "cesium-touch-navigation-help-visible" : _touch}'
  );
  touchInstructions.innerHTML = `            <table>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/TouchDrag.svg"
  )}" width="70" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-pan">Pan view</div>                        <div class="cesium-navigation-help-details">One finger drag</div>                    </td>                </tr>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/TouchZoom.svg"
  )}" width="70" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-zoom">Zoom view</div>                        <div class="cesium-navigation-help-details">Two finger pinch</div>                    </td>                </tr>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/TouchTilt.svg"
  )}" width="70" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-rotate">Tilt view</div>                        <div class="cesium-navigation-help-details">Two finger drag, same direction</div>                    </td>                </tr>                <tr>                    <td><img src="${buildModuleUrl4(
    "Widgets/Images/NavigationHelp/TouchRotate.svg"
  )}" width="70" height="48" /></td>                    <td>                        <div class="cesium-navigation-help-tilt">Rotate view</div>                        <div class="cesium-navigation-help-details">Two finger drag, opposite direction</div>                    </td>                </tr>            </table>`;
  instructionContainer.appendChild(touchInstructions);
  knockout_default.applyBindings(viewModel, wrapper);
  this._container = container;
  this._viewModel = viewModel;
  this._wrapper = wrapper;
  this._closeInstructions = function(e) {
    if (!wrapper.contains(e.target)) {
      viewModel.showInstructions = false;
    }
  };
  if (FeatureDetection3.supportsPointerEvents()) {
    document.addEventListener("pointerdown", this._closeInstructions, true);
  } else {
    document.addEventListener("mousedown", this._closeInstructions, true);
    document.addEventListener("touchstart", this._closeInstructions, true);
  }
}
Object.defineProperties(NavigationHelpButton.prototype, {
  /**
   * Gets the parent container.
   * @memberof NavigationHelpButton.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof NavigationHelpButton.prototype
   *
   * @type {NavigationHelpButtonViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
NavigationHelpButton.prototype.isDestroyed = function() {
  return false;
};
NavigationHelpButton.prototype.destroy = function() {
  if (FeatureDetection3.supportsPointerEvents()) {
    document.removeEventListener("pointerdown", this._closeInstructions, true);
  } else {
    document.removeEventListener("mousedown", this._closeInstructions, true);
    document.removeEventListener("touchstart", this._closeInstructions, true);
  }
  knockout_default.cleanNode(this._wrapper);
  this._container.removeChild(this._wrapper);
  return destroyObject14(this);
};
var NavigationHelpButton_default = NavigationHelpButton;

// packages/widgets/Source/PerformanceWatchdog/PerformanceWatchdog.js
import {
  defined as defined25,
  destroyObject as destroyObject16,
  DeveloperError as DeveloperError19,
  getElement as getElement12
} from "@cesium/engine";

// packages/widgets/Source/PerformanceWatchdog/PerformanceWatchdogViewModel.js
import {
  defined as defined24,
  destroyObject as destroyObject15,
  DeveloperError as DeveloperError18,
  FrameRateMonitor
} from "@cesium/engine";
function PerformanceWatchdogViewModel(options) {
  if (!defined24(options) || !defined24(options.scene)) {
    throw new DeveloperError18("options.scene is required.");
  }
  this._scene = options.scene;
  this.lowFrameRateMessage = options.lowFrameRateMessage ?? "This application appears to be performing poorly on your system.  Please try using a different web browser or updating your video drivers.";
  this.lowFrameRateMessageDismissed = false;
  this.showingLowFrameRateMessage = false;
  knockout_default.track(this, [
    "lowFrameRateMessage",
    "lowFrameRateMessageDismissed",
    "showingLowFrameRateMessage"
  ]);
  const that = this;
  this._dismissMessage = createCommand_default(function() {
    that.showingLowFrameRateMessage = false;
    that.lowFrameRateMessageDismissed = true;
  });
  const monitor = FrameRateMonitor.fromScene(options.scene);
  this._unsubscribeLowFrameRate = monitor.lowFrameRate.addEventListener(
    function() {
      if (!that.lowFrameRateMessageDismissed) {
        that.showingLowFrameRateMessage = true;
      }
    }
  );
  this._unsubscribeNominalFrameRate = monitor.nominalFrameRate.addEventListener(
    function() {
      that.showingLowFrameRateMessage = false;
    }
  );
}
Object.defineProperties(PerformanceWatchdogViewModel.prototype, {
  /**
   * Gets the {@link Scene} instance for which to monitor performance.
   * @memberof PerformanceWatchdogViewModel.prototype
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets a command that dismisses the low frame rate message.  Once it is dismissed, the message
   * will not be redisplayed.
   * @memberof PerformanceWatchdogViewModel.prototype
   * @type {Command}
   */
  dismissMessage: {
    get: function() {
      return this._dismissMessage;
    }
  }
});
PerformanceWatchdogViewModel.prototype.destroy = function() {
  this._unsubscribeLowFrameRate();
  this._unsubscribeNominalFrameRate();
  return destroyObject15(this);
};
var PerformanceWatchdogViewModel_default = PerformanceWatchdogViewModel;

// packages/widgets/Source/PerformanceWatchdog/PerformanceWatchdog.js
function PerformanceWatchdog(options) {
  if (!defined25(options) || !defined25(options.container)) {
    throw new DeveloperError19("options.container is required.");
  }
  if (!defined25(options.scene)) {
    throw new DeveloperError19("options.scene is required.");
  }
  const container = getElement12(options.container);
  const viewModel = new PerformanceWatchdogViewModel_default(options);
  const element = document.createElement("div");
  element.className = "cesium-performance-watchdog-message-area";
  element.setAttribute("data-bind", "visible: showingLowFrameRateMessage");
  const dismissButton = document.createElement("button");
  dismissButton.setAttribute("type", "button");
  dismissButton.className = "cesium-performance-watchdog-message-dismiss";
  dismissButton.innerHTML = "&times;";
  dismissButton.setAttribute("data-bind", "click: dismissMessage");
  element.appendChild(dismissButton);
  const message = document.createElement("div");
  message.className = "cesium-performance-watchdog-message";
  message.setAttribute("data-bind", "html: lowFrameRateMessage");
  element.appendChild(message);
  container.appendChild(element);
  knockout_default.applyBindings(viewModel, element);
  this._container = container;
  this._viewModel = viewModel;
  this._element = element;
}
Object.defineProperties(PerformanceWatchdog.prototype, {
  /**
   * Gets the parent container.
   * @memberof PerformanceWatchdog.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof PerformanceWatchdog.prototype
   *
   * @type {PerformanceWatchdogViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
PerformanceWatchdog.prototype.isDestroyed = function() {
  return false;
};
PerformanceWatchdog.prototype.destroy = function() {
  this._viewModel.destroy();
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  return destroyObject16(this);
};
var PerformanceWatchdog_default = PerformanceWatchdog;

// packages/widgets/Source/ProjectionPicker/ProjectionPicker.js
import {
  defined as defined27,
  destroyObject as destroyObject18,
  DeveloperError as DeveloperError21,
  FeatureDetection as FeatureDetection4,
  getElement as getElement13
} from "@cesium/engine";

// packages/widgets/Source/ProjectionPicker/ProjectionPickerViewModel.js
import {
  defined as defined26,
  destroyObject as destroyObject17,
  DeveloperError as DeveloperError20,
  EventHelper as EventHelper2,
  OrthographicFrustum,
  SceneMode
} from "@cesium/engine";
function ProjectionPickerViewModel(scene) {
  if (!defined26(scene)) {
    throw new DeveloperError20("scene is required.");
  }
  this._scene = scene;
  this._orthographic = scene.camera.frustum instanceof OrthographicFrustum;
  this._flightInProgress = false;
  this.dropDownVisible = false;
  this.tooltipPerspective = "Perspective Projection";
  this.tooltipOrthographic = "Orthographic Projection";
  this.selectedTooltip = void 0;
  this.sceneMode = scene.mode;
  knockout_default.track(this, [
    "_orthographic",
    "_flightInProgress",
    "sceneMode",
    "dropDownVisible",
    "tooltipPerspective",
    "tooltipOrthographic"
  ]);
  const that = this;
  knockout_default.defineProperty(this, "selectedTooltip", function() {
    if (that._orthographic) {
      return that.tooltipOrthographic;
    }
    return that.tooltipPerspective;
  });
  this._toggleDropDown = createCommand_default(function() {
    if (that.sceneMode === SceneMode.SCENE2D || that._flightInProgress) {
      return;
    }
    that.dropDownVisible = !that.dropDownVisible;
  });
  this._eventHelper = new EventHelper2();
  this._eventHelper.add(
    scene.morphComplete,
    function(transitioner, oldMode, newMode, isMorphing) {
      that.sceneMode = newMode;
      that._orthographic = newMode === SceneMode.SCENE2D || that._scene.camera.frustum instanceof OrthographicFrustum;
    }
  );
  this._eventHelper.add(scene.preRender, function() {
    that._flightInProgress = defined26(scene.camera._currentFlight);
  });
  this._switchToPerspective = createCommand_default(function() {
    if (that.sceneMode === SceneMode.SCENE2D) {
      return;
    }
    that._scene.camera.switchToPerspectiveFrustum();
    that._orthographic = false;
    that.dropDownVisible = false;
  });
  this._switchToOrthographic = createCommand_default(function() {
    if (that.sceneMode === SceneMode.SCENE2D) {
      return;
    }
    that._scene.camera.switchToOrthographicFrustum();
    that._orthographic = true;
    that.dropDownVisible = false;
  });
  this._sceneMode = SceneMode;
}
Object.defineProperties(ProjectionPickerViewModel.prototype, {
  /**
   * Gets the scene
   * @memberof ProjectionPickerViewModel.prototype
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets the command to toggle the drop down box.
   * @memberof ProjectionPickerViewModel.prototype
   *
   * @type {Command}
   */
  toggleDropDown: {
    get: function() {
      return this._toggleDropDown;
    }
  },
  /**
   * Gets the command to switch to a perspective projection.
   * @memberof ProjectionPickerViewModel.prototype
   *
   * @type {Command}
   */
  switchToPerspective: {
    get: function() {
      return this._switchToPerspective;
    }
  },
  /**
   * Gets the command to switch to orthographic projection.
   * @memberof ProjectionPickerViewModel.prototype
   *
   * @type {Command}
   */
  switchToOrthographic: {
    get: function() {
      return this._switchToOrthographic;
    }
  },
  /**
   * Gets whether the scene is currently using an orthographic projection.
   * @memberof ProjectionPickerViewModel.prototype
   *
   * @type {Command}
   */
  isOrthographicProjection: {
    get: function() {
      return this._orthographic;
    }
  }
});
ProjectionPickerViewModel.prototype.isDestroyed = function() {
  return false;
};
ProjectionPickerViewModel.prototype.destroy = function() {
  this._eventHelper.removeAll();
  destroyObject17(this);
};
var ProjectionPickerViewModel_default = ProjectionPickerViewModel;

// packages/widgets/Source/ProjectionPicker/ProjectionPicker.js
var perspectivePath = "M 28.15625,10.4375 9.125,13.21875 13.75,43.25 41.75,55.09375 50.8125,37 54.5,11.9375 z m 0.125,3 19.976451,0.394265 L 43.03125,16.875 22.6875,14.28125 z M 50.971746,15.705477 47.90625,36.03125 42.53125,46 44.84375,19.3125 z M 12.625,16.03125 l 29.15625,3.6875 -2.65625,31 L 16.4375,41.125 z";
var orthographicPath = "m 31.560594,6.5254438 -20.75,12.4687502 0.1875,24.5625 22.28125,11.8125 19.5,-12 0.65625,-0.375 0,-0.75 0.0312,-23.21875 z m 0.0625,3.125 16.65625,9.5000002 -16.125,10.28125 -17.34375,-9.71875 z m 18.96875,11.1875002 0.15625,20.65625 -17.46875,10.59375 0.15625,-20.28125 z m -37.0625,1.25 17.21875,9.625 -0.15625,19.21875 -16.9375,-9 z";
function ProjectionPicker(container, scene) {
  if (!defined27(container)) {
    throw new DeveloperError21("container is required.");
  }
  if (!defined27(scene)) {
    throw new DeveloperError21("scene is required.");
  }
  container = getElement13(container);
  const viewModel = new ProjectionPickerViewModel_default(scene);
  viewModel._perspectivePath = perspectivePath;
  viewModel._orthographicPath = orthographicPath;
  const wrapper = document.createElement("span");
  wrapper.className = "cesium-projectionPicker-wrapper cesium-toolbar-button";
  container.appendChild(wrapper);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "cesium-button cesium-toolbar-button";
  button.setAttribute(
    "data-bind",
    'css: { "cesium-projectionPicker-buttonPerspective": !_orthographic,       "cesium-projectionPicker-buttonOrthographic": _orthographic,       "cesium-button-disabled" : sceneMode === _sceneMode.SCENE2D || _flightInProgress,        "cesium-projectionPicker-selected": dropDownVisible },attr: { title: selectedTooltip },click: toggleDropDown'
  );
  button.innerHTML = '<!-- ko cesiumSvgPath: { path: _perspectivePath, width: 64, height: 64, css: "cesium-projectionPicker-iconPerspective" } --><!-- /ko --><!-- ko cesiumSvgPath: { path: _orthographicPath, width: 64, height: 64, css: "cesium-projectionPicker-iconOrthographic" } --><!-- /ko -->';
  wrapper.appendChild(button);
  const perspectiveButton = document.createElement("button");
  perspectiveButton.type = "button";
  perspectiveButton.className = "cesium-button cesium-toolbar-button cesium-projectionPicker-dropDown-icon";
  perspectiveButton.setAttribute(
    "data-bind",
    'css: { "cesium-projectionPicker-visible" : (dropDownVisible && _orthographic),       "cesium-projectionPicker-none" : !_orthographic,       "cesium-projectionPicker-hidden" : !dropDownVisible },attr: { title: tooltipPerspective },click: switchToPerspective,cesiumSvgPath: { path: _perspectivePath, width: 64, height: 64 }'
  );
  wrapper.appendChild(perspectiveButton);
  const orthographicButton = document.createElement("button");
  orthographicButton.type = "button";
  orthographicButton.className = "cesium-button cesium-toolbar-button cesium-projectionPicker-dropDown-icon";
  orthographicButton.setAttribute(
    "data-bind",
    'css: { "cesium-projectionPicker-visible" : (dropDownVisible && !_orthographic),       "cesium-projectionPicker-none" : _orthographic,       "cesium-projectionPicker-hidden" : !dropDownVisible},attr: { title: tooltipOrthographic },click: switchToOrthographic,cesiumSvgPath: { path: _orthographicPath, width: 64, height: 64 }'
  );
  wrapper.appendChild(orthographicButton);
  knockout_default.applyBindings(viewModel, wrapper);
  this._viewModel = viewModel;
  this._container = container;
  this._wrapper = wrapper;
  this._closeDropDown = function(e) {
    if (!wrapper.contains(e.target)) {
      viewModel.dropDownVisible = false;
    }
  };
  if (FeatureDetection4.supportsPointerEvents()) {
    document.addEventListener("pointerdown", this._closeDropDown, true);
  } else {
    document.addEventListener("mousedown", this._closeDropDown, true);
    document.addEventListener("touchstart", this._closeDropDown, true);
  }
}
Object.defineProperties(ProjectionPicker.prototype, {
  /**
   * Gets the parent container.
   * @memberof ProjectionPicker.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof ProjectionPicker.prototype
   *
   * @type {ProjectionPickerViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
ProjectionPicker.prototype.isDestroyed = function() {
  return false;
};
ProjectionPicker.prototype.destroy = function() {
  this._viewModel.destroy();
  if (FeatureDetection4.supportsPointerEvents()) {
    document.removeEventListener("pointerdown", this._closeDropDown, true);
  } else {
    document.removeEventListener("mousedown", this._closeDropDown, true);
    document.removeEventListener("touchstart", this._closeDropDown, true);
  }
  knockout_default.cleanNode(this._wrapper);
  this._container.removeChild(this._wrapper);
  return destroyObject18(this);
};
var ProjectionPicker_default = ProjectionPicker;

// packages/widgets/Source/SceneModePicker/SceneModePicker.js
import {
  defined as defined29,
  destroyObject as destroyObject20,
  DeveloperError as DeveloperError23,
  FeatureDetection as FeatureDetection5,
  getElement as getElement14
} from "@cesium/engine";

// packages/widgets/Source/SceneModePicker/SceneModePickerViewModel.js
import {
  defined as defined28,
  destroyObject as destroyObject19,
  DeveloperError as DeveloperError22,
  EventHelper as EventHelper3,
  SceneMode as SceneMode2
} from "@cesium/engine";
function SceneModePickerViewModel(scene, duration) {
  if (!defined28(scene)) {
    throw new DeveloperError22("scene is required.");
  }
  this._scene = scene;
  const that = this;
  const morphStart = function(transitioner, oldMode, newMode, isMorphing) {
    that.sceneMode = newMode;
    that.dropDownVisible = false;
  };
  this._eventHelper = new EventHelper3();
  this._eventHelper.add(scene.morphStart, morphStart);
  this._duration = duration ?? 2;
  this.sceneMode = scene.mode;
  this.dropDownVisible = false;
  this.tooltip2D = "2D";
  this.tooltip3D = "3D";
  this.tooltipColumbusView = "Columbus View";
  knockout_default.track(this, [
    "sceneMode",
    "dropDownVisible",
    "tooltip2D",
    "tooltip3D",
    "tooltipColumbusView"
  ]);
  this.selectedTooltip = void 0;
  knockout_default.defineProperty(this, "selectedTooltip", function() {
    const mode = that.sceneMode;
    if (mode === SceneMode2.SCENE2D) {
      return that.tooltip2D;
    }
    if (mode === SceneMode2.SCENE3D) {
      return that.tooltip3D;
    }
    return that.tooltipColumbusView;
  });
  this._toggleDropDown = createCommand_default(function() {
    that.dropDownVisible = !that.dropDownVisible;
  });
  this._morphTo2D = createCommand_default(function() {
    scene.morphTo2D(that._duration);
  });
  this._morphTo3D = createCommand_default(function() {
    scene.morphTo3D(that._duration);
  });
  this._morphToColumbusView = createCommand_default(function() {
    scene.morphToColumbusView(that._duration);
  });
  this._sceneMode = SceneMode2;
}
Object.defineProperties(SceneModePickerViewModel.prototype, {
  /**
   * Gets the scene
   * @memberof SceneModePickerViewModel.prototype
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets or sets the the duration of scene mode transition animations in seconds.
   * A value of zero causes the scene to instantly change modes.
   * @memberof SceneModePickerViewModel.prototype
   * @type {number}
   */
  duration: {
    get: function() {
      return this._duration;
    },
    set: function(value) {
      if (value < 0) {
        throw new DeveloperError22("duration value must be positive.");
      }
      this._duration = value;
    }
  },
  /**
   * Gets the command to toggle the drop down box.
   * @memberof SceneModePickerViewModel.prototype
   *
   * @type {Command}
   */
  toggleDropDown: {
    get: function() {
      return this._toggleDropDown;
    }
  },
  /**
   * Gets the command to morph to 2D.
   * @memberof SceneModePickerViewModel.prototype
   *
   * @type {Command}
   */
  morphTo2D: {
    get: function() {
      return this._morphTo2D;
    }
  },
  /**
   * Gets the command to morph to 3D.
   * @memberof SceneModePickerViewModel.prototype
   *
   * @type {Command}
   */
  morphTo3D: {
    get: function() {
      return this._morphTo3D;
    }
  },
  /**
   * Gets the command to morph to Columbus View.
   * @memberof SceneModePickerViewModel.prototype
   *
   * @type {Command}
   */
  morphToColumbusView: {
    get: function() {
      return this._morphToColumbusView;
    }
  }
});
SceneModePickerViewModel.prototype.isDestroyed = function() {
  return false;
};
SceneModePickerViewModel.prototype.destroy = function() {
  this._eventHelper.removeAll();
  destroyObject19(this);
};
var SceneModePickerViewModel_default = SceneModePickerViewModel;

// packages/widgets/Source/SceneModePicker/SceneModePicker.js
var globePath = "m 32.401392,4.9330437 c -7.087603,0 -14.096095,2.884602 -19.10793,7.8946843 -5.0118352,5.010083 -7.9296167,11.987468 -7.9296167,19.072999 0,7.085531 2.9177815,14.097848 7.9296167,19.107931 4.837653,4.835961 11.541408,7.631372 18.374354,7.82482 0.05712,0.01231 0.454119,0.139729 0.454119,0.139729 l 0.03493,-0.104797 c 0.08246,7.84e-4 0.162033,0.03493 0.244525,0.03493 0.08304,0 0.161515,-0.03414 0.244526,-0.03493 l 0.03493,0.104797 c 0,0 0.309474,-0.129487 0.349323,-0.139729 6.867765,-0.168094 13.582903,-2.965206 18.444218,-7.82482 2.558195,-2.5573 4.551081,-5.638134 5.903547,-8.977584 1.297191,-3.202966 2.02607,-6.661489 2.02607,-10.130347 0,-6.237309 -2.366261,-12.31219 -6.322734,-17.116794 -0.0034,-0.02316 0.0049,-0.04488 0,-0.06986 -0.01733,-0.08745 -0.104529,-0.278855 -0.104797,-0.279458 -5.31e-4,-0.0012 -0.522988,-0.628147 -0.523984,-0.62878         -3.47e-4,-2.2e-4 -0.133444,-0.03532 -0.244525,-0.06987 C 51.944299,13.447603 51.751076,13.104317 51.474391,12.827728 46.462556,7.8176457 39.488996,4.9330437 32.401392,4.9330437 z m -2.130866,3.5281554 0.104797,9.6762289 c -4.111695,-0.08361 -7.109829,-0.423664 -9.257041,-0.943171 1.198093,-2.269271 2.524531,-4.124404 3.91241,-5.414496 2.167498,-2.0147811 3.950145,-2.8540169 5.239834,-3.3185619 z m 2.794579,0 c 1.280302,0.4754953 3.022186,1.3285948 5.065173,3.2486979 1.424667,1.338973 2.788862,3.303645 3.982275,5.728886 -2.29082,0.403367 -5.381258,0.621049 -8.942651,0.698645 L 33.065105,8.4611991 z m 5.728886,0.2445256 c 4.004072,1.1230822 7.793098,3.1481363 10.724195,6.0782083 0.03468,0.03466 0.07033,0.06991 0.104797,0.104797 -0.45375,0.313891 -0.923054,0.663002 -1.956205,1.082899 -0.647388,0.263114 -1.906242,0.477396 -2.829511,0.733577 -1.382296,-2.988132         -3.027146,-5.368585 -4.785716,-7.0213781 -0.422866,-0.397432 -0.835818,-0.6453247 -1.25756,-0.9781032 z m -15.33525,0.7685092 c -0.106753,0.09503 -0.207753,0.145402 -0.31439,0.244526 -1.684973,1.5662541 -3.298068,3.8232211 -4.680919,6.5672591 -0.343797,-0.14942 -1.035052,-0.273198 -1.292493,-0.419186 -0.956528,-0.542427 -1.362964,-1.022024 -1.537018,-1.292493 -0.0241,-0.03745 -0.01868,-0.0401 -0.03493,-0.06986 2.250095,-2.163342 4.948824,-3.869984 7.859752,-5.0302421 z m -9.641296,7.0912431 c 0.464973,0.571618 0.937729,1.169056 1.956205,1.746612 0.349907,0.198425 1.107143,0.335404 1.537018,0.523983 -1.20166,3.172984 -1.998037,7.051901 -2.165798,11.772162 C 14.256557,30.361384 12.934823,30.161483 12.280427,29.90959 10.644437,29.279855 9.6888882,28.674891 9.1714586,28.267775 8.6540289,27.860658 8.6474751,27.778724 8.6474751,27.778724 l -0.069864,0.03493 C 9.3100294,23.691285         11.163248,19.798527 13.817445,16.565477 z m 37.552149,0.523984 c 2.548924,3.289983 4.265057,7.202594 4.890513,11.318043 -0.650428,0.410896 -1.756876,1.001936 -3.563088,1.606882 -1.171552,0.392383 -3.163859,0.759153 -4.960377,1.117832 -0.04367,-4.752703 -0.784809,-8.591423 -1.88634,-11.807094 0.917574,-0.263678 2.170552,-0.486495 2.864443,-0.76851 1.274693,-0.518066 2.003942,-1.001558 2.654849,-1.467153 z m -31.439008,2.619917 c 2.487341,0.672766 5.775813,1.137775 10.479669,1.222628 l 0.104797,10.689263 0,0.03493 0,0.733577 c -5.435005,-0.09059 -9.512219,-0.519044 -12.610536,-1.117831 0.106127,-4.776683 0.879334,-8.55791 2.02607,-11.562569 z m 23.264866,0.31439 c 1.073459,3.067541 1.833795,6.821314 1.816476,11.702298 -3.054474,0.423245 -7.062018,0.648559 -11.702298,0.698644 l 0,-0.838373 -0.104796,-10.654331 c 4.082416,-0.0864 7.404468,-0.403886 9.990618,-0.908238 z         M 8.2632205,30.922625 c 0.7558676,0.510548 1.5529563,1.013339 3.0041715,1.57195 0.937518,0.360875 2.612202,0.647642 3.91241,0.978102 0.112814,3.85566 0.703989,7.107756 1.606883,9.920754 -1.147172,-0.324262 -2.644553,-0.640648 -3.423359,-0.978102 -1.516688,-0.657177 -2.386627,-1.287332 -2.864443,-1.71168 -0.477816,-0.424347 -0.489051,-0.489051 -0.489051,-0.489051 L 9.8002387,40.319395 C 8.791691,37.621767 8.1584238,34.769583 8.1584238,31.900727 c 0,-0.330153 0.090589,-0.648169 0.1047967,-0.978102 z m 48.2763445,0.419186 c 0.0047,0.188973 0.06986,0.36991 0.06986,0.558916 0,2.938869 -0.620228,5.873558 -1.676747,8.628261 -0.07435,0.07583 -0.06552,0.07411 -0.454119,0.349323 -0.606965,0.429857 -1.631665,1.042044 -3.318562,1.676747 -1.208528,0.454713 -3.204964,0.850894 -5.135038,1.25756 0.84593,-2.765726 1.41808,-6.005357 1.606883,-9.815957 2.232369,-0.413371 4.483758,-0.840201         5.938479,-1.327425 1.410632,-0.472457 2.153108,-0.89469 2.96924,-1.327425 z m -38.530252,2.864443 c 3.208141,0.56697 7.372279,0.898588 12.575603,0.978103 l 0.174662,9.885821 c -4.392517,-0.06139 -8.106722,-0.320566 -10.863925,-0.803441 -1.051954,-2.664695 -1.692909,-6.043794 -1.88634,-10.060483 z m 26.793022,0.31439 c -0.246298,3.923551 -0.877762,7.263679 -1.816476,9.885822 -2.561957,0.361954 -5.766249,0.560708 -9.431703,0.62878 l -0.174661,-9.815957 c 4.491734,-0.04969 8.334769,-0.293032 11.42284,-0.698645 z M 12.035901,44.860585 c 0.09977,0.04523 0.105535,0.09465 0.209594,0.139729 1.337656,0.579602 3.441099,1.058072 5.589157,1.537018 1.545042,3.399208 3.548524,5.969402 5.589157,7.789888 -3.034411,-1.215537 -5.871615,-3.007978 -8.174142,-5.309699 -1.245911,-1.245475 -2.271794,-2.662961 -3.213766,-4.156936 z m 40.69605,0 c -0.941972,1.493975 -1.967855,2.911461         -3.213765,4.156936 -2.74253,2.741571 -6.244106,4.696717 -9.955686,5.868615 0.261347,-0.241079 0.507495,-0.394491 0.768509,-0.663713 1.674841,-1.727516 3.320792,-4.181056 4.645987,-7.265904 2.962447,-0.503021 5.408965,-1.122293 7.161107,-1.781544 0.284034,-0.106865 0.337297,-0.207323 0.593848,-0.31439 z m -31.404076,2.305527 c 2.645807,0.376448 5.701178,0.649995 9.466635,0.698645 l 0.139729,7.789888 c -1.38739,-0.480844 -3.316218,-1.29837 -5.659022,-3.388427 -1.388822,-1.238993 -2.743668,-3.0113 -3.947342,-5.100106 z m 20.365491,0.104797 c -1.04872,2.041937 -2.174337,3.779068 -3.353494,4.995309 -1.853177,1.911459 -3.425515,2.82679 -4.611055,3.353494 l -0.139729,-7.789887 c 3.13091,-0.05714 5.728238,-0.278725 8.104278,-0.558916 z";
var flatMapPath = "m 2.9825053,17.550598 0,1.368113 0,26.267766 0,1.368113 1.36811,0 54.9981397,0 1.36811,0 0,-1.368113 0,-26.267766 0,-1.368113 -1.36811,0 -54.9981397,0 -1.36811,0 z m 2.73623,2.736226 10.3292497,0 0,10.466063 -10.3292497,0 0,-10.466063 z m 13.0654697,0 11.69737,0 0,10.466063 -11.69737,0 0,-10.466063 z m 14.43359,0 11.69737,0 0,10.466063 -11.69737,0 0,-10.466063 z m 14.43359,0 10.32926,0 0,10.466063 -10.32926,0 0,-10.466063 z m -41.9326497,13.202288 10.3292497,0 0,10.329252 -10.3292497,0 0,-10.329252 z m 13.0654697,0 11.69737,0 0,10.329252 -11.69737,0 0,-10.329252 z m 14.43359,0 11.69737,0 0,10.329252 -11.69737,0 0,-10.329252 z m 14.43359,0 10.32926,0 0,10.329252 -10.32926,0 0,-10.329252 z";
var columbusViewPath = "m 14.723969,17.675598 -0.340489,0.817175 -11.1680536,26.183638 -0.817175,1.872692 2.076986,0 54.7506996,0 2.07698,0 -0.81717,-1.872692 -11.16805,-26.183638 -0.34049,-0.817175 -0.91933,0 -32.414586,0 -0.919322,0 z m 1.838643,2.723916 6.196908,0 -2.928209,10.418977 -7.729111,0 4.460412,-10.418977 z m 9.02297,0 4.903049,0 0,10.418977 -7.831258,0 2.928209,-10.418977 z m 7.626964,0 5.584031,0 2.62176,10.418977 -8.205791,0 0,-10.418977 z m 8.410081,0 5.51593,0 4.46042,10.418977 -7.38863,0 -2.58772,-10.418977 z m -30.678091,13.142892 8.103649,0 -2.89416,10.282782 -9.6018026,0 4.3923136,-10.282782 z m 10.929711,0 8.614384,0 0,10.282782 -11.508544,0 2.89416,-10.282782 z m 11.338299,0 8.852721,0 2.58772,10.282782 -11.440441,0 0,-10.282782 z m 11.678781,0 7.86531,0 4.39231,10.282782 -9.6699,0 -2.58772,-10.282782 z";
function SceneModePicker(container, scene, duration) {
  if (!defined29(container)) {
    throw new DeveloperError23("container is required.");
  }
  if (!defined29(scene)) {
    throw new DeveloperError23("scene is required.");
  }
  container = getElement14(container);
  const viewModel = new SceneModePickerViewModel_default(scene, duration);
  viewModel._globePath = globePath;
  viewModel._flatMapPath = flatMapPath;
  viewModel._columbusViewPath = columbusViewPath;
  const wrapper = document.createElement("span");
  wrapper.className = "cesium-sceneModePicker-wrapper cesium-toolbar-button";
  container.appendChild(wrapper);
  const button = document.createElement("button");
  button.type = "button";
  button.className = "cesium-button cesium-toolbar-button";
  button.setAttribute(
    "data-bind",
    'css: { "cesium-sceneModePicker-button2D": sceneMode === _sceneMode.SCENE2D,       "cesium-sceneModePicker-button3D": sceneMode === _sceneMode.SCENE3D,       "cesium-sceneModePicker-buttonColumbusView": sceneMode === _sceneMode.COLUMBUS_VIEW,       "cesium-sceneModePicker-selected": dropDownVisible },attr: { title: selectedTooltip },click: toggleDropDown'
  );
  button.innerHTML = '<!-- ko cesiumSvgPath: { path: _globePath, width: 64, height: 64, css: "cesium-sceneModePicker-slide-svg cesium-sceneModePicker-icon3D" } --><!-- /ko --><!-- ko cesiumSvgPath: { path: _flatMapPath, width: 64, height: 64, css: "cesium-sceneModePicker-slide-svg cesium-sceneModePicker-icon2D" } --><!-- /ko --><!-- ko cesiumSvgPath: { path: _columbusViewPath, width: 64, height: 64, css: "cesium-sceneModePicker-slide-svg cesium-sceneModePicker-iconColumbusView" } --><!-- /ko -->';
  wrapper.appendChild(button);
  const morphTo3DButton = document.createElement("button");
  morphTo3DButton.type = "button";
  morphTo3DButton.className = "cesium-button cesium-toolbar-button cesium-sceneModePicker-dropDown-icon";
  morphTo3DButton.setAttribute(
    "data-bind",
    'css: { "cesium-sceneModePicker-visible" : (dropDownVisible && (sceneMode !== _sceneMode.SCENE3D)) || (!dropDownVisible && (sceneMode === _sceneMode.SCENE3D)),       "cesium-sceneModePicker-none" : sceneMode === _sceneMode.SCENE3D,       "cesium-sceneModePicker-hidden" : !dropDownVisible },attr: { title: tooltip3D },click: morphTo3D,cesiumSvgPath: { path: _globePath, width: 64, height: 64 }'
  );
  wrapper.appendChild(morphTo3DButton);
  const morphTo2DButton = document.createElement("button");
  morphTo2DButton.type = "button";
  morphTo2DButton.className = "cesium-button cesium-toolbar-button cesium-sceneModePicker-dropDown-icon";
  morphTo2DButton.setAttribute(
    "data-bind",
    'css: { "cesium-sceneModePicker-visible" : (dropDownVisible && (sceneMode !== _sceneMode.SCENE2D)),       "cesium-sceneModePicker-none" : sceneMode === _sceneMode.SCENE2D,       "cesium-sceneModePicker-hidden" : !dropDownVisible },attr: { title: tooltip2D },click: morphTo2D,cesiumSvgPath: { path: _flatMapPath, width: 64, height: 64 }'
  );
  wrapper.appendChild(morphTo2DButton);
  const morphToCVButton = document.createElement("button");
  morphToCVButton.type = "button";
  morphToCVButton.className = "cesium-button cesium-toolbar-button cesium-sceneModePicker-dropDown-icon";
  morphToCVButton.setAttribute(
    "data-bind",
    'css: { "cesium-sceneModePicker-visible" : (dropDownVisible && (sceneMode !== _sceneMode.COLUMBUS_VIEW)) || (!dropDownVisible && (sceneMode === _sceneMode.COLUMBUS_VIEW)),       "cesium-sceneModePicker-none" : sceneMode === _sceneMode.COLUMBUS_VIEW,       "cesium-sceneModePicker-hidden" : !dropDownVisible},attr: { title: tooltipColumbusView },click: morphToColumbusView,cesiumSvgPath: { path: _columbusViewPath, width: 64, height: 64 }'
  );
  wrapper.appendChild(morphToCVButton);
  knockout_default.applyBindings(viewModel, wrapper);
  this._viewModel = viewModel;
  this._container = container;
  this._wrapper = wrapper;
  this._closeDropDown = function(e) {
    if (!wrapper.contains(e.target)) {
      viewModel.dropDownVisible = false;
    }
  };
  if (FeatureDetection5.supportsPointerEvents()) {
    document.addEventListener("pointerdown", this._closeDropDown, true);
  } else {
    document.addEventListener("mousedown", this._closeDropDown, true);
    document.addEventListener("touchstart", this._closeDropDown, true);
  }
}
Object.defineProperties(SceneModePicker.prototype, {
  /**
   * Gets the parent container.
   * @memberof SceneModePicker.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof SceneModePicker.prototype
   *
   * @type {SceneModePickerViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
SceneModePicker.prototype.isDestroyed = function() {
  return false;
};
SceneModePicker.prototype.destroy = function() {
  this._viewModel.destroy();
  if (FeatureDetection5.supportsPointerEvents()) {
    document.removeEventListener("pointerdown", this._closeDropDown, true);
  } else {
    document.removeEventListener("mousedown", this._closeDropDown, true);
    document.removeEventListener("touchstart", this._closeDropDown, true);
  }
  knockout_default.cleanNode(this._wrapper);
  this._container.removeChild(this._wrapper);
  return destroyObject20(this);
};
var SceneModePicker_default = SceneModePicker;

// packages/widgets/Source/SelectionIndicator/SelectionIndicator.js
import {
  defined as defined31,
  destroyObject as destroyObject21,
  DeveloperError as DeveloperError25,
  getElement as getElement15
} from "@cesium/engine";

// packages/widgets/Source/SelectionIndicator/SelectionIndicatorViewModel.js
import {
  Cartesian2,
  defined as defined30,
  DeveloperError as DeveloperError24,
  EasingFunction,
  SceneTransforms
} from "@cesium/engine";
var screenSpacePos = new Cartesian2();
var offScreen = "-1000px";
function SelectionIndicatorViewModel(scene, selectionIndicatorElement, container) {
  if (!defined30(scene)) {
    throw new DeveloperError24("scene is required.");
  }
  if (!defined30(selectionIndicatorElement)) {
    throw new DeveloperError24("selectionIndicatorElement is required.");
  }
  if (!defined30(container)) {
    throw new DeveloperError24("container is required.");
  }
  this._scene = scene;
  this._screenPositionX = offScreen;
  this._screenPositionY = offScreen;
  this._tweens = scene.tweens;
  this._container = container ?? document.body;
  this._selectionIndicatorElement = selectionIndicatorElement;
  this._scale = 1;
  this.position = void 0;
  this.showSelection = false;
  knockout_default.track(this, [
    "position",
    "_screenPositionX",
    "_screenPositionY",
    "_scale",
    "showSelection"
  ]);
  this.isVisible = void 0;
  knockout_default.defineProperty(this, "isVisible", {
    get: function() {
      return this.showSelection && defined30(this.position);
    }
  });
  knockout_default.defineProperty(this, "_transform", {
    get: function() {
      return `scale(${this._scale})`;
    }
  });
  this.computeScreenSpacePosition = function(position, result) {
    return SceneTransforms.worldToWindowCoordinates(scene, position, result);
  };
}
SelectionIndicatorViewModel.prototype.update = function() {
  if (this.showSelection && defined30(this.position)) {
    const screenPosition = this.computeScreenSpacePosition(
      this.position,
      screenSpacePos
    );
    if (!defined30(screenPosition)) {
      this._screenPositionX = offScreen;
      this._screenPositionY = offScreen;
    } else {
      const container = this._container;
      const containerWidth = container.parentNode.clientWidth;
      const containerHeight = container.parentNode.clientHeight;
      const indicatorSize = this._selectionIndicatorElement.clientWidth;
      const halfSize = indicatorSize * 0.5;
      screenPosition.x = Math.min(
        Math.max(screenPosition.x, -indicatorSize),
        containerWidth + indicatorSize
      ) - halfSize;
      screenPosition.y = Math.min(
        Math.max(screenPosition.y, -indicatorSize),
        containerHeight + indicatorSize
      ) - halfSize;
      this._screenPositionX = `${Math.floor(screenPosition.x + 0.25)}px`;
      this._screenPositionY = `${Math.floor(screenPosition.y + 0.25)}px`;
    }
  }
};
SelectionIndicatorViewModel.prototype.animateAppear = function() {
  this._tweens.addProperty({
    object: this,
    property: "_scale",
    startValue: 2,
    stopValue: 1,
    duration: 0.8,
    easingFunction: EasingFunction.EXPONENTIAL_OUT
  });
};
SelectionIndicatorViewModel.prototype.animateDepart = function() {
  this._tweens.addProperty({
    object: this,
    property: "_scale",
    startValue: this._scale,
    stopValue: 1.5,
    duration: 0.8,
    easingFunction: EasingFunction.EXPONENTIAL_OUT
  });
};
Object.defineProperties(SelectionIndicatorViewModel.prototype, {
  /**
   * Gets the HTML element containing the selection indicator.
   * @memberof SelectionIndicatorViewModel.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the HTML element that holds the selection indicator.
   * @memberof SelectionIndicatorViewModel.prototype
   *
   * @type {Element}
   */
  selectionIndicatorElement: {
    get: function() {
      return this._selectionIndicatorElement;
    }
  },
  /**
   * Gets the scene being used.
   * @memberof SelectionIndicatorViewModel.prototype
   *
   * @type {Scene}
   */
  scene: {
    get: function() {
      return this._scene;
    }
  }
});
var SelectionIndicatorViewModel_default = SelectionIndicatorViewModel;

// packages/widgets/Source/SelectionIndicator/SelectionIndicator.js
function SelectionIndicator(container, scene) {
  if (!defined31(container)) {
    throw new DeveloperError25("container is required.");
  }
  container = getElement15(container);
  this._container = container;
  const el = document.createElement("div");
  el.className = "cesium-selection-wrapper";
  el.setAttribute(
    "data-bind",
    'style: { "top" : _screenPositionY, "left" : _screenPositionX },css: { "cesium-selection-wrapper-visible" : isVisible }'
  );
  container.appendChild(el);
  this._element = el;
  const svgNS3 = "http://www.w3.org/2000/svg";
  const path = "M -34 -34 L -34 -11.25 L -30 -15.25 L -30 -30 L -15.25 -30 L -11.25 -34 L -34 -34 z M 11.25 -34 L 15.25 -30 L 30 -30 L 30 -15.25 L 34 -11.25 L 34 -34 L 11.25 -34 z M -34 11.25 L -34 34 L -11.25 34 L -15.25 30 L -30 30 L -30 15.25 L -34 11.25 z M 34 11.25 L 30 15.25 L 30 30 L 15.25 30 L 11.25 34 L 34 34 L 34 11.25 z";
  const svg = document.createElementNS(svgNS3, "svg:svg");
  svg.setAttribute("width", 160);
  svg.setAttribute("height", 160);
  svg.setAttribute("viewBox", "0 0 160 160");
  const group = document.createElementNS(svgNS3, "g");
  group.setAttribute("transform", "translate(80,80)");
  svg.appendChild(group);
  const pathElement = document.createElementNS(svgNS3, "path");
  pathElement.setAttribute("data-bind", "attr: { transform: _transform }");
  pathElement.setAttribute("d", path);
  group.appendChild(pathElement);
  el.appendChild(svg);
  const viewModel = new SelectionIndicatorViewModel_default(
    scene,
    this._element,
    this._container
  );
  this._viewModel = viewModel;
  knockout_default.applyBindings(this._viewModel, this._element);
}
Object.defineProperties(SelectionIndicator.prototype, {
  /**
   * Gets the parent container.
   * @memberof SelectionIndicator.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof SelectionIndicator.prototype
   *
   * @type {SelectionIndicatorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
SelectionIndicator.prototype.isDestroyed = function() {
  return false;
};
SelectionIndicator.prototype.destroy = function() {
  const container = this._container;
  knockout_default.cleanNode(this._element);
  container.removeChild(this._element);
  return destroyObject21(this);
};
var SelectionIndicator_default = SelectionIndicator;

// packages/widgets/Source/Timeline/Timeline.js
import {
  ClockRange as ClockRange2,
  defined as defined33,
  destroyObject as destroyObject22,
  DeveloperError as DeveloperError26,
  getElement as getElement16,
  JulianDate as JulianDate5
} from "@cesium/engine";

// packages/widgets/Source/Timeline/TimelineHighlightRange.js
import { JulianDate as JulianDate3 } from "@cesium/engine";
function TimelineHighlightRange(color, heightInPx, base) {
  this._color = color;
  this._height = heightInPx;
  this._base = base ?? 0;
}
TimelineHighlightRange.prototype.getHeight = function() {
  return this._height;
};
TimelineHighlightRange.prototype.getBase = function() {
  return this._base;
};
TimelineHighlightRange.prototype.getStartTime = function() {
  return this._start;
};
TimelineHighlightRange.prototype.getStopTime = function() {
  return this._stop;
};
TimelineHighlightRange.prototype.setRange = function(start, stop2) {
  this._start = start;
  this._stop = stop2;
};
TimelineHighlightRange.prototype.render = function(renderState) {
  let range = "";
  if (this._start && this._stop && this._color) {
    const highlightStart = JulianDate3.secondsDifference(
      this._start,
      renderState.epochJulian
    );
    let highlightLeft = Math.round(
      renderState.timeBarWidth * renderState.getAlpha(highlightStart)
    );
    const highlightStop = JulianDate3.secondsDifference(
      this._stop,
      renderState.epochJulian
    );
    let highlightWidth = Math.round(
      renderState.timeBarWidth * renderState.getAlpha(highlightStop)
    ) - highlightLeft;
    if (highlightLeft < 0) {
      highlightWidth += highlightLeft;
      highlightLeft = 0;
    }
    if (highlightLeft + highlightWidth > renderState.timeBarWidth) {
      highlightWidth = renderState.timeBarWidth - highlightLeft;
    }
    if (highlightWidth > 0) {
      range = `<span class="cesium-timeline-highlight" style="left: ${highlightLeft.toString()}px; width: ${highlightWidth.toString()}px; bottom: ${this._base.toString()}px; height: ${this._height}px; background-color: ${this._color};"></span>`;
    }
  }
  return range;
};
var TimelineHighlightRange_default = TimelineHighlightRange;

// packages/widgets/Source/Timeline/TimelineTrack.js
import { Color as Color4, defined as defined32, JulianDate as JulianDate4 } from "@cesium/engine";
function TimelineTrack(interval, pixelHeight, color, backgroundColor) {
  this.interval = interval;
  this.height = pixelHeight;
  this.color = color || new Color4(0.5, 0.5, 0.5, 1);
  this.backgroundColor = backgroundColor || new Color4(0, 0, 0, 0);
}
TimelineTrack.prototype.render = function(context, renderState) {
  const startInterval = this.interval.start;
  const stopInterval = this.interval.stop;
  const spanStart = renderState.startJulian;
  const spanStop = JulianDate4.addSeconds(
    renderState.startJulian,
    renderState.duration,
    new JulianDate4()
  );
  if (JulianDate4.lessThan(startInterval, spanStart) && JulianDate4.greaterThan(stopInterval, spanStop)) {
    context.fillStyle = this.color.toCssColorString();
    context.fillRect(0, renderState.y, renderState.timeBarWidth, this.height);
  } else if (JulianDate4.lessThanOrEquals(startInterval, spanStop) && JulianDate4.greaterThanOrEquals(stopInterval, spanStart)) {
    let x;
    let start, stop2;
    for (x = 0; x < renderState.timeBarWidth; ++x) {
      const currentTime = JulianDate4.addSeconds(
        renderState.startJulian,
        x / renderState.timeBarWidth * renderState.duration,
        new JulianDate4()
      );
      if (!defined32(start) && JulianDate4.greaterThanOrEquals(currentTime, startInterval)) {
        start = x;
      } else if (!defined32(stop2) && JulianDate4.greaterThanOrEquals(currentTime, stopInterval)) {
        stop2 = x;
      }
    }
    context.fillStyle = this.backgroundColor.toCssColorString();
    context.fillRect(0, renderState.y, renderState.timeBarWidth, this.height);
    if (defined32(start)) {
      if (!defined32(stop2)) {
        stop2 = renderState.timeBarWidth;
      }
      context.fillStyle = this.color.toCssColorString();
      context.fillRect(
        start,
        renderState.y,
        Math.max(stop2 - start, 1),
        this.height
      );
    }
  }
};
var TimelineTrack_default = TimelineTrack;

// packages/widgets/Source/Timeline/Timeline.js
var timelineWheelDelta = 1e12;
var timelineMouseMode = {
  none: 0,
  scrub: 1,
  slide: 2,
  zoom: 3,
  touchOnly: 4
};
var timelineTouchMode = {
  none: 0,
  scrub: 1,
  slideZoom: 2,
  singleTap: 3,
  ignore: 4
};
var timelineTicScales = [
  1e-3,
  2e-3,
  5e-3,
  0.01,
  0.02,
  0.05,
  0.1,
  0.25,
  0.5,
  1,
  2,
  5,
  10,
  15,
  30,
  60,
  // 1min
  120,
  // 2min
  300,
  // 5min
  600,
  // 10min
  900,
  // 15min
  1800,
  // 30min
  3600,
  // 1hr
  7200,
  // 2hr
  14400,
  // 4hr
  21600,
  // 6hr
  43200,
  // 12hr
  86400,
  // 24hr
  172800,
  // 2days
  345600,
  // 4days
  604800,
  // 7days
  1296e3,
  // 15days
  2592e3,
  // 30days
  5184e3,
  // 60days
  7776e3,
  // 90days
  15552e3,
  // 180days
  31536e3,
  // 365days
  63072e3,
  // 2years
  126144e3,
  // 4years
  15768e4,
  // 5years
  31536e4,
  // 10years
  63072e4,
  // 20years
  126144e4,
  // 40years
  15768e5,
  // 50years
  31536e5,
  // 100years
  63072e5,
  // 200years
  126144e5,
  // 400years
  15768e6,
  // 500years
  31536e6
  // 1000years
];
var timelineMonthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
function Timeline(container, clock) {
  if (!defined33(container)) {
    throw new DeveloperError26("container is required.");
  }
  if (!defined33(clock)) {
    throw new DeveloperError26("clock is required.");
  }
  container = getElement16(container);
  const ownerDocument = container.ownerDocument;
  this.container = container;
  const topDiv = ownerDocument.createElement("div");
  topDiv.className = "cesium-timeline-main";
  container.appendChild(topDiv);
  this._topDiv = topDiv;
  this._endJulian = void 0;
  this._epochJulian = void 0;
  this._lastXPos = void 0;
  this._scrubElement = void 0;
  this._startJulian = void 0;
  this._timeBarSecondsSpan = void 0;
  this._clock = clock;
  this._scrubJulian = clock.currentTime;
  this._mainTicSpan = -1;
  this._mouseMode = timelineMouseMode.none;
  this._touchMode = timelineTouchMode.none;
  this._touchState = {
    centerX: 0,
    spanX: 0
  };
  this._mouseX = 0;
  this._timelineDrag = 0;
  this._timelineDragLocation = void 0;
  this._lastHeight = void 0;
  this._lastWidth = void 0;
  this._topDiv.innerHTML = '<div class="cesium-timeline-bar"></div><div class="cesium-timeline-trackContainer"><canvas class="cesium-timeline-tracks" width="10" height="1"></canvas></div><div class="cesium-timeline-needle"></div><span class="cesium-timeline-ruler"></span>';
  this._timeBarEle = this._topDiv.childNodes[0];
  this._trackContainer = this._topDiv.childNodes[1];
  this._trackListEle = this._topDiv.childNodes[1].childNodes[0];
  this._needleEle = this._topDiv.childNodes[2];
  this._rulerEle = this._topDiv.childNodes[3];
  this._context = this._trackListEle.getContext("2d");
  this._trackList = [];
  this._highlightRanges = [];
  this.zoomTo(clock.startTime, clock.stopTime);
  this._onMouseDown = createMouseDownCallback(this);
  this._onMouseUp = createMouseUpCallback(this);
  this._onMouseMove = createMouseMoveCallback(this);
  this._onMouseWheel = createMouseWheelCallback(this);
  this._onTouchStart = createTouchStartCallback(this);
  this._onTouchMove = createTouchMoveCallback(this);
  this._onTouchEnd = createTouchEndCallback(this);
  const timeBarEle = this._timeBarEle;
  ownerDocument.addEventListener("mouseup", this._onMouseUp, false);
  ownerDocument.addEventListener("mousemove", this._onMouseMove, false);
  timeBarEle.addEventListener("mousedown", this._onMouseDown, false);
  timeBarEle.addEventListener("DOMMouseScroll", this._onMouseWheel, false);
  timeBarEle.addEventListener("mousewheel", this._onMouseWheel, false);
  timeBarEle.addEventListener("touchstart", this._onTouchStart, false);
  timeBarEle.addEventListener("touchmove", this._onTouchMove, false);
  timeBarEle.addEventListener("touchend", this._onTouchEnd, false);
  timeBarEle.addEventListener("touchcancel", this._onTouchEnd, false);
  this._topDiv.oncontextmenu = function() {
    return false;
  };
  clock.onTick.addEventListener(this.updateFromClock, this);
  this.updateFromClock();
}
Timeline.prototype.addEventListener = function(type, listener, useCapture) {
  this._topDiv.addEventListener(type, listener, useCapture);
};
Timeline.prototype.removeEventListener = function(type, listener, useCapture) {
  this._topDiv.removeEventListener(type, listener, useCapture);
};
Timeline.prototype.isDestroyed = function() {
  return false;
};
Timeline.prototype.destroy = function() {
  this._clock.onTick.removeEventListener(this.updateFromClock, this);
  const doc = this.container.ownerDocument;
  doc.removeEventListener("mouseup", this._onMouseUp, false);
  doc.removeEventListener("mousemove", this._onMouseMove, false);
  const timeBarEle = this._timeBarEle;
  timeBarEle.removeEventListener("mousedown", this._onMouseDown, false);
  timeBarEle.removeEventListener("DOMMouseScroll", this._onMouseWheel, false);
  timeBarEle.removeEventListener("mousewheel", this._onMouseWheel, false);
  timeBarEle.removeEventListener("touchstart", this._onTouchStart, false);
  timeBarEle.removeEventListener("touchmove", this._onTouchMove, false);
  timeBarEle.removeEventListener("touchend", this._onTouchEnd, false);
  timeBarEle.removeEventListener("touchcancel", this._onTouchEnd, false);
  this.container.removeChild(this._topDiv);
  destroyObject22(this);
};
Timeline.prototype.addHighlightRange = function(color, heightInPx, base) {
  const newHighlightRange = new TimelineHighlightRange_default(color, heightInPx, base);
  this._highlightRanges.push(newHighlightRange);
  this.resize();
  return newHighlightRange;
};
Timeline.prototype.addTrack = function(interval, heightInPx, color, backgroundColor) {
  const newTrack = new TimelineTrack_default(
    interval,
    heightInPx,
    color,
    backgroundColor
  );
  this._trackList.push(newTrack);
  this._lastHeight = void 0;
  this.resize();
  return newTrack;
};
Timeline.prototype.zoomTo = function(startTime, stopTime) {
  if (!defined33(startTime)) {
    throw new DeveloperError26("startTime is required.");
  }
  if (!defined33(stopTime)) {
    throw new DeveloperError26("stopTime is required");
  }
  if (JulianDate5.lessThanOrEquals(stopTime, startTime)) {
    throw new DeveloperError26("Start time must come before end time.");
  }
  this._startJulian = startTime;
  this._endJulian = stopTime;
  this._timeBarSecondsSpan = JulianDate5.secondsDifference(stopTime, startTime);
  if (this._clock && this._clock.clockRange !== ClockRange2.UNBOUNDED) {
    const clockStart = this._clock.startTime;
    const clockEnd = this._clock.stopTime;
    const clockSpan = JulianDate5.secondsDifference(clockEnd, clockStart);
    const startOffset = JulianDate5.secondsDifference(
      clockStart,
      this._startJulian
    );
    const endOffset = JulianDate5.secondsDifference(clockEnd, this._endJulian);
    if (this._timeBarSecondsSpan >= clockSpan) {
      this._timeBarSecondsSpan = clockSpan;
      this._startJulian = this._clock.startTime;
      this._endJulian = this._clock.stopTime;
    } else if (startOffset > 0) {
      this._endJulian = JulianDate5.addSeconds(
        this._endJulian,
        startOffset,
        new JulianDate5()
      );
      this._startJulian = clockStart;
      this._timeBarSecondsSpan = JulianDate5.secondsDifference(
        this._endJulian,
        this._startJulian
      );
    } else if (endOffset < 0) {
      this._startJulian = JulianDate5.addSeconds(
        this._startJulian,
        endOffset,
        new JulianDate5()
      );
      this._endJulian = clockEnd;
      this._timeBarSecondsSpan = JulianDate5.secondsDifference(
        this._endJulian,
        this._startJulian
      );
    }
  }
  this._makeTics();
  const evt = document.createEvent("Event");
  evt.initEvent("setzoom", true, true);
  evt.startJulian = this._startJulian;
  evt.endJulian = this._endJulian;
  evt.epochJulian = this._epochJulian;
  evt.totalSpan = this._timeBarSecondsSpan;
  evt.mainTicSpan = this._mainTicSpan;
  this._topDiv.dispatchEvent(evt);
};
Timeline.prototype.zoomFrom = function(amount) {
  let centerSec = JulianDate5.secondsDifference(
    this._scrubJulian,
    this._startJulian
  );
  if (amount > 1 || centerSec < 0 || centerSec > this._timeBarSecondsSpan) {
    centerSec = this._timeBarSecondsSpan * 0.5;
  } else {
    centerSec += centerSec - this._timeBarSecondsSpan * 0.5;
  }
  const centerSecFlip = this._timeBarSecondsSpan - centerSec;
  this.zoomTo(
    JulianDate5.addSeconds(
      this._startJulian,
      centerSec - centerSec * amount,
      new JulianDate5()
    ),
    JulianDate5.addSeconds(
      this._endJulian,
      centerSecFlip * amount - centerSecFlip,
      new JulianDate5()
    )
  );
};
function twoDigits(num) {
  return num < 10 ? `0${num.toString()}` : num.toString();
}
Timeline.prototype.makeLabel = function(time) {
  const gregorian = JulianDate5.toGregorianDate(time);
  const millisecond = gregorian.millisecond;
  let millisecondString = " UTC";
  if (millisecond > 0 && this._timeBarSecondsSpan < 3600) {
    millisecondString = Math.floor(millisecond).toString();
    while (millisecondString.length < 3) {
      millisecondString = `0${millisecondString}`;
    }
    millisecondString = `.${millisecondString}`;
  }
  return `${timelineMonthNames[gregorian.month - 1]} ${gregorian.day} ${gregorian.year} ${twoDigits(gregorian.hour)}:${twoDigits(gregorian.minute)}:${twoDigits(
    gregorian.second
  )}${millisecondString}`;
};
Timeline.prototype.smallestTicInPixels = 7;
Timeline.prototype._makeTics = function() {
  const timeBar = this._timeBarEle;
  const seconds = JulianDate5.secondsDifference(
    this._scrubJulian,
    this._startJulian
  );
  const xPos = Math.round(
    seconds * this._topDiv.clientWidth / this._timeBarSecondsSpan
  );
  const scrubX = xPos - 8;
  let tic;
  const widget = this;
  this._needleEle.style.left = `${xPos.toString()}px`;
  let tics = "";
  const minimumDuration = 0.01;
  const maximumDuration = 31536e6;
  const epsilon = 1e-10;
  let minSize = 0;
  let duration = this._timeBarSecondsSpan;
  if (duration < minimumDuration) {
    duration = minimumDuration;
    this._timeBarSecondsSpan = minimumDuration;
    this._endJulian = JulianDate5.addSeconds(
      this._startJulian,
      minimumDuration,
      new JulianDate5()
    );
  } else if (duration > maximumDuration) {
    duration = maximumDuration;
    this._timeBarSecondsSpan = maximumDuration;
    this._endJulian = JulianDate5.addSeconds(
      this._startJulian,
      maximumDuration,
      new JulianDate5()
    );
  }
  let timeBarWidth = this._timeBarEle.clientWidth;
  if (timeBarWidth < 10) {
    timeBarWidth = 10;
  }
  const startJulian = this._startJulian;
  const epsilonTime = Math.min(duration / timeBarWidth * 1e-5, 0.4);
  let epochJulian;
  const gregorianDate = JulianDate5.toGregorianDate(startJulian);
  if (duration > 31536e4) {
    epochJulian = JulianDate5.fromDate(
      new Date(Date.UTC(Math.floor(gregorianDate.year / 100) * 100, 0))
    );
  } else if (duration > 31536e3) {
    epochJulian = JulianDate5.fromDate(
      new Date(Date.UTC(Math.floor(gregorianDate.year / 10) * 10, 0))
    );
  } else if (duration > 86400) {
    epochJulian = JulianDate5.fromDate(
      new Date(Date.UTC(gregorianDate.year, 0))
    );
  } else {
    epochJulian = JulianDate5.fromDate(
      new Date(
        Date.UTC(gregorianDate.year, gregorianDate.month, gregorianDate.day)
      )
    );
  }
  const startTime = JulianDate5.secondsDifference(
    this._startJulian,
    JulianDate5.addSeconds(epochJulian, epsilonTime, new JulianDate5())
  );
  let endTime = startTime + duration;
  this._epochJulian = epochJulian;
  function getStartTic(ticScale) {
    return Math.floor(startTime / ticScale) * ticScale;
  }
  function getNextTic(tic2, ticScale) {
    return Math.ceil(tic2 / ticScale + 0.5) * ticScale;
  }
  function getAlpha(time) {
    return (time - startTime) / duration;
  }
  function remainder(x, y) {
    return x - y * Math.round(x / y);
  }
  this._rulerEle.innerHTML = this.makeLabel(
    JulianDate5.addSeconds(this._endJulian, -minimumDuration, new JulianDate5())
  );
  let sampleWidth = this._rulerEle.offsetWidth + 20;
  if (sampleWidth < 30) {
    sampleWidth = 180;
  }
  const origMinSize = minSize;
  minSize -= epsilon;
  const renderState = {
    startTime,
    startJulian,
    epochJulian,
    duration,
    timeBarWidth,
    getAlpha
  };
  this._highlightRanges.forEach(function(highlightRange) {
    tics += highlightRange.render(renderState);
  });
  let mainTic = 0, subTic = 0, tinyTic = 0;
  let idealTic = sampleWidth / timeBarWidth;
  if (idealTic > 1) {
    idealTic = 1;
  }
  idealTic *= this._timeBarSecondsSpan;
  let ticIndex = -1, smallestIndex = -1;
  const ticScaleLen = timelineTicScales.length;
  let i;
  for (i = 0; i < ticScaleLen; ++i) {
    const sc = timelineTicScales[i];
    ++ticIndex;
    mainTic = sc;
    if (sc > idealTic && sc > minSize) {
      break;
    }
    if (smallestIndex < 0 && timeBarWidth * (sc / this._timeBarSecondsSpan) >= this.smallestTicInPixels) {
      smallestIndex = ticIndex;
    }
  }
  if (ticIndex > 0) {
    while (ticIndex > 0) {
      --ticIndex;
      if (Math.abs(remainder(mainTic, timelineTicScales[ticIndex])) < 1e-5) {
        if (timelineTicScales[ticIndex] >= minSize) {
          subTic = timelineTicScales[ticIndex];
        }
        break;
      }
    }
    if (smallestIndex >= 0) {
      while (smallestIndex < ticIndex) {
        if (Math.abs(remainder(subTic, timelineTicScales[smallestIndex])) < 1e-5 && timelineTicScales[smallestIndex] >= minSize) {
          tinyTic = timelineTicScales[smallestIndex];
          break;
        }
        ++smallestIndex;
      }
    }
  }
  minSize = origMinSize;
  if (minSize > epsilon && tinyTic < 1e-5 && Math.abs(minSize - mainTic) > epsilon) {
    tinyTic = minSize;
    if (minSize <= mainTic + epsilon) {
      subTic = 0;
    }
  }
  let lastTextLeft = -999999, textWidth;
  if (timeBarWidth * (tinyTic / this._timeBarSecondsSpan) >= 3) {
    for (tic = getStartTic(tinyTic); tic <= endTime; tic = getNextTic(tic, tinyTic)) {
      tics += `<span class="cesium-timeline-ticTiny" style="left: ${Math.round(
        timeBarWidth * getAlpha(tic)
      ).toString()}px;"></span>`;
    }
  }
  if (timeBarWidth * (subTic / this._timeBarSecondsSpan) >= 3) {
    for (tic = getStartTic(subTic); tic <= endTime; tic = getNextTic(tic, subTic)) {
      tics += `<span class="cesium-timeline-ticSub" style="left: ${Math.round(
        timeBarWidth * getAlpha(tic)
      ).toString()}px;"></span>`;
    }
  }
  if (timeBarWidth * (mainTic / this._timeBarSecondsSpan) >= 2) {
    this._mainTicSpan = mainTic;
    endTime += mainTic;
    tic = getStartTic(mainTic);
    const leapSecond = JulianDate5.computeTaiMinusUtc(epochJulian);
    while (tic <= endTime) {
      let ticTime = JulianDate5.addSeconds(
        startJulian,
        tic - startTime,
        new JulianDate5()
      );
      if (mainTic > 2.1) {
        const ticLeap = JulianDate5.computeTaiMinusUtc(ticTime);
        if (Math.abs(ticLeap - leapSecond) > 0.1) {
          tic += ticLeap - leapSecond;
          ticTime = JulianDate5.addSeconds(
            startJulian,
            tic - startTime,
            new JulianDate5()
          );
        }
      }
      const ticLeft = Math.round(timeBarWidth * getAlpha(tic));
      const ticLabel = this.makeLabel(ticTime);
      this._rulerEle.innerHTML = ticLabel;
      textWidth = this._rulerEle.offsetWidth;
      if (textWidth < 10) {
        textWidth = sampleWidth;
      }
      const labelLeft = ticLeft - (textWidth / 2 - 1);
      if (labelLeft > lastTextLeft) {
        lastTextLeft = labelLeft + textWidth + 5;
        tics += `<span class="cesium-timeline-ticMain" style="left: ${ticLeft.toString()}px;"></span><span class="cesium-timeline-ticLabel" style="left: ${labelLeft.toString()}px;">${ticLabel}</span>`;
      } else {
        tics += `<span class="cesium-timeline-ticSub" style="left: ${ticLeft.toString()}px;"></span>`;
      }
      tic = getNextTic(tic, mainTic);
    }
  } else {
    this._mainTicSpan = -1;
  }
  tics += `<span class="cesium-timeline-icon16" style="left:${scrubX}px;bottom:0;background-position: 0 0;"></span>`;
  timeBar.innerHTML = tics;
  this._scrubElement = timeBar.lastChild;
  this._context.clearRect(
    0,
    0,
    this._trackListEle.width,
    this._trackListEle.height
  );
  renderState.y = 0;
  this._trackList.forEach(function(track2) {
    track2.render(widget._context, renderState);
    renderState.y += track2.height;
  });
};
Timeline.prototype.updateFromClock = function() {
  this._scrubJulian = this._clock.currentTime;
  const scrubElement = this._scrubElement;
  if (defined33(this._scrubElement)) {
    const seconds = JulianDate5.secondsDifference(
      this._scrubJulian,
      this._startJulian
    );
    const xPos = Math.round(
      seconds * this._topDiv.clientWidth / this._timeBarSecondsSpan
    );
    if (this._lastXPos !== xPos) {
      this._lastXPos = xPos;
      scrubElement.style.left = `${xPos - 8}px`;
      this._needleEle.style.left = `${xPos}px`;
    }
  }
  if (defined33(this._timelineDragLocation)) {
    this._setTimeBarTime(
      this._timelineDragLocation,
      this._timelineDragLocation * this._timeBarSecondsSpan / this._topDiv.clientWidth
    );
    this.zoomTo(
      JulianDate5.addSeconds(
        this._startJulian,
        this._timelineDrag,
        new JulianDate5()
      ),
      JulianDate5.addSeconds(
        this._endJulian,
        this._timelineDrag,
        new JulianDate5()
      )
    );
  }
};
Timeline.prototype._setTimeBarTime = function(xPos, seconds) {
  xPos = Math.round(xPos);
  this._scrubJulian = JulianDate5.addSeconds(
    this._startJulian,
    seconds,
    new JulianDate5()
  );
  if (this._scrubElement) {
    const scrubX = xPos - 8;
    this._scrubElement.style.left = `${scrubX.toString()}px`;
    this._needleEle.style.left = `${xPos.toString()}px`;
  }
  const evt = document.createEvent("Event");
  evt.initEvent("settime", true, true);
  evt.clientX = xPos;
  evt.timeSeconds = seconds;
  evt.timeJulian = this._scrubJulian;
  evt.clock = this._clock;
  this._topDiv.dispatchEvent(evt);
};
function createMouseDownCallback(timeline) {
  return function(e) {
    if (timeline._mouseMode !== timelineMouseMode.touchOnly) {
      if (e.button === 0) {
        timeline._mouseMode = timelineMouseMode.scrub;
        if (timeline._scrubElement) {
          timeline._scrubElement.style.backgroundPosition = "-16px 0";
        }
        timeline._onMouseMove(e);
      } else {
        timeline._mouseX = e.clientX;
        if (e.button === 2) {
          timeline._mouseMode = timelineMouseMode.zoom;
        } else {
          timeline._mouseMode = timelineMouseMode.slide;
        }
      }
    }
    e.preventDefault();
  };
}
function createMouseUpCallback(timeline) {
  return function(e) {
    timeline._mouseMode = timelineMouseMode.none;
    if (timeline._scrubElement) {
      timeline._scrubElement.style.backgroundPosition = "0 0";
    }
    timeline._timelineDrag = 0;
    timeline._timelineDragLocation = void 0;
  };
}
function createMouseMoveCallback(timeline) {
  return function(e) {
    let dx;
    if (timeline._mouseMode === timelineMouseMode.scrub) {
      e.preventDefault();
      const x = e.clientX - timeline._topDiv.getBoundingClientRect().left;
      if (x < 0) {
        timeline._timelineDragLocation = 0;
        timeline._timelineDrag = -0.01 * timeline._timeBarSecondsSpan;
      } else if (x > timeline._topDiv.clientWidth) {
        timeline._timelineDragLocation = timeline._topDiv.clientWidth;
        timeline._timelineDrag = 0.01 * timeline._timeBarSecondsSpan;
      } else {
        timeline._timelineDragLocation = void 0;
        timeline._setTimeBarTime(
          x,
          x * timeline._timeBarSecondsSpan / timeline._topDiv.clientWidth
        );
      }
    } else if (timeline._mouseMode === timelineMouseMode.slide) {
      dx = timeline._mouseX - e.clientX;
      timeline._mouseX = e.clientX;
      if (dx !== 0) {
        const dsec = dx * timeline._timeBarSecondsSpan / timeline._topDiv.clientWidth;
        timeline.zoomTo(
          JulianDate5.addSeconds(timeline._startJulian, dsec, new JulianDate5()),
          JulianDate5.addSeconds(timeline._endJulian, dsec, new JulianDate5())
        );
      }
    } else if (timeline._mouseMode === timelineMouseMode.zoom) {
      dx = timeline._mouseX - e.clientX;
      timeline._mouseX = e.clientX;
      if (dx !== 0) {
        timeline.zoomFrom(Math.pow(1.01, dx));
      }
    }
  };
}
function createMouseWheelCallback(timeline) {
  return function(e) {
    let dy = e.wheelDeltaY || e.wheelDelta || -e.detail;
    timelineWheelDelta = Math.max(
      Math.min(Math.abs(dy), timelineWheelDelta),
      1
    );
    dy /= timelineWheelDelta;
    timeline.zoomFrom(Math.pow(1.05, -dy));
  };
}
function createTouchStartCallback(timeline) {
  return function(e) {
    const len = e.touches.length;
    let seconds, xPos;
    const leftX = timeline._topDiv.getBoundingClientRect().left;
    e.preventDefault();
    timeline._mouseMode = timelineMouseMode.touchOnly;
    if (len === 1) {
      seconds = JulianDate5.secondsDifference(
        timeline._scrubJulian,
        timeline._startJulian
      );
      xPos = Math.round(
        seconds * timeline._topDiv.clientWidth / timeline._timeBarSecondsSpan + leftX
      );
      if (Math.abs(e.touches[0].clientX - xPos) < 50) {
        timeline._touchMode = timelineTouchMode.scrub;
        if (timeline._scrubElement) {
          timeline._scrubElement.style.backgroundPosition = len === 1 ? "-16px 0" : "0 0";
        }
      } else {
        timeline._touchMode = timelineTouchMode.singleTap;
        timeline._touchState.centerX = e.touches[0].clientX - leftX;
      }
    } else if (len === 2) {
      timeline._touchMode = timelineTouchMode.slideZoom;
      timeline._touchState.centerX = (e.touches[0].clientX + e.touches[1].clientX) * 0.5 - leftX;
      timeline._touchState.spanX = Math.abs(
        e.touches[0].clientX - e.touches[1].clientX
      );
    } else {
      timeline._touchMode = timelineTouchMode.ignore;
    }
  };
}
function createTouchEndCallback(timeline) {
  return function(e) {
    const len = e.touches.length, leftX = timeline._topDiv.getBoundingClientRect().left;
    if (timeline._touchMode === timelineTouchMode.singleTap) {
      timeline._touchMode = timelineTouchMode.scrub;
      timeline._onTouchMove(e);
    } else if (timeline._touchMode === timelineTouchMode.scrub) {
      timeline._onTouchMove(e);
    }
    timeline._mouseMode = timelineMouseMode.touchOnly;
    if (len !== 1) {
      timeline._touchMode = len > 0 ? timelineTouchMode.ignore : timelineTouchMode.none;
    } else if (timeline._touchMode === timelineTouchMode.slideZoom) {
      timeline._touchState.centerX = e.touches[0].clientX - leftX;
    }
    if (timeline._scrubElement) {
      timeline._scrubElement.style.backgroundPosition = "0 0";
    }
  };
}
function createTouchMoveCallback(timeline) {
  return function(e) {
    let dx, x, len, newCenter, newSpan, newStartTime, zoom = 1;
    const leftX = timeline._topDiv.getBoundingClientRect().left;
    if (timeline._touchMode === timelineTouchMode.singleTap) {
      timeline._touchMode = timelineTouchMode.slideZoom;
    }
    timeline._mouseMode = timelineMouseMode.touchOnly;
    if (timeline._touchMode === timelineTouchMode.scrub) {
      e.preventDefault();
      if (e.changedTouches.length === 1) {
        x = e.changedTouches[0].clientX - leftX;
        if (x >= 0 && x <= timeline._topDiv.clientWidth) {
          timeline._setTimeBarTime(
            x,
            x * timeline._timeBarSecondsSpan / timeline._topDiv.clientWidth
          );
        }
      }
    } else if (timeline._touchMode === timelineTouchMode.slideZoom) {
      len = e.touches.length;
      if (len === 2) {
        newCenter = (e.touches[0].clientX + e.touches[1].clientX) * 0.5 - leftX;
        newSpan = Math.abs(e.touches[0].clientX - e.touches[1].clientX);
      } else if (len === 1) {
        newCenter = e.touches[0].clientX - leftX;
        newSpan = 0;
      }
      if (defined33(newCenter)) {
        if (newSpan > 0 && timeline._touchState.spanX > 0) {
          zoom = timeline._touchState.spanX / newSpan;
          newStartTime = JulianDate5.addSeconds(
            timeline._startJulian,
            (timeline._touchState.centerX * timeline._timeBarSecondsSpan - newCenter * timeline._timeBarSecondsSpan * zoom) / timeline._topDiv.clientWidth,
            new JulianDate5()
          );
        } else {
          dx = timeline._touchState.centerX - newCenter;
          newStartTime = JulianDate5.addSeconds(
            timeline._startJulian,
            dx * timeline._timeBarSecondsSpan / timeline._topDiv.clientWidth,
            new JulianDate5()
          );
        }
        timeline.zoomTo(
          newStartTime,
          JulianDate5.addSeconds(
            newStartTime,
            timeline._timeBarSecondsSpan * zoom,
            new JulianDate5()
          )
        );
        timeline._touchState.centerX = newCenter;
        timeline._touchState.spanX = newSpan;
      }
    }
  };
}
Timeline.prototype.resize = function() {
  const width = this.container.clientWidth;
  const height = this.container.clientHeight;
  if (width === this._lastWidth && height === this._lastHeight) {
    return;
  }
  this._trackContainer.style.height = `${height}px`;
  let trackListHeight = 1;
  this._trackList.forEach(function(track2) {
    trackListHeight += track2.height;
  });
  this._trackListEle.style.height = `${trackListHeight.toString()}px`;
  this._trackListEle.width = this._trackListEle.clientWidth;
  this._trackListEle.height = trackListHeight;
  this._makeTics();
  this._lastXPos = void 0;
  this._lastWidth = width;
  this._lastHeight = height;
};
var Timeline_default = Timeline;

// packages/widgets/Source/VRButton/VRButton.js
import {
  defined as defined35,
  destroyObject as destroyObject24,
  DeveloperError as DeveloperError28,
  getElement as getElement18
} from "@cesium/engine";

// packages/widgets/Source/VRButton/VRButtonViewModel.js
import {
  defined as defined34,
  destroyObject as destroyObject23,
  DeveloperError as DeveloperError27,
  EventHelper as EventHelper4,
  Fullscreen as Fullscreen2,
  getElement as getElement17,
  OrthographicFrustum as OrthographicFrustum2
} from "@cesium/engine";
var import_nosleep = __toESM(require_src(), 1);
function lockScreen(orientation) {
  let locked = false;
  const screen = window.screen;
  if (defined34(screen)) {
    if (defined34(screen.lockOrientation)) {
      locked = screen.lockOrientation(orientation);
    } else if (defined34(screen.mozLockOrientation)) {
      locked = screen.mozLockOrientation(orientation);
    } else if (defined34(screen.msLockOrientation)) {
      locked = screen.msLockOrientation(orientation);
    } else if (defined34(screen.orientation && screen.orientation.lock)) {
      locked = screen.orientation.lock(orientation);
    }
  }
  return locked;
}
function unlockScreen() {
  const screen = window.screen;
  if (defined34(screen)) {
    if (defined34(screen.unlockOrientation)) {
      screen.unlockOrientation();
    } else if (defined34(screen.mozUnlockOrientation)) {
      screen.mozUnlockOrientation();
    } else if (defined34(screen.msUnlockOrientation)) {
      screen.msUnlockOrientation();
    } else if (defined34(screen.orientation && screen.orientation.unlock)) {
      screen.orientation.unlock();
    }
  }
}
function toggleVR(viewModel, scene, isVRMode, isOrthographic) {
  if (isOrthographic()) {
    return;
  }
  if (isVRMode()) {
    scene.useWebVR = false;
    if (viewModel._locked) {
      unlockScreen();
      viewModel._locked = false;
    }
    viewModel._noSleep.disable();
    Fullscreen2.exitFullscreen();
    isVRMode(false);
  } else {
    if (!Fullscreen2.fullscreen) {
      Fullscreen2.requestFullscreen(viewModel._vrElement);
    }
    viewModel._noSleep.enable();
    if (!viewModel._locked) {
      viewModel._locked = lockScreen("landscape");
    }
    scene.useWebVR = true;
    isVRMode(true);
  }
}
function VRButtonViewModel(scene, vrElement) {
  if (!defined34(scene)) {
    throw new DeveloperError27("scene is required.");
  }
  const that = this;
  const isEnabled = knockout_default.observable(Fullscreen2.enabled);
  const isVRMode = knockout_default.observable(false);
  this.isVRMode = void 0;
  knockout_default.defineProperty(this, "isVRMode", {
    get: function() {
      return isVRMode();
    }
  });
  this.isVREnabled = void 0;
  knockout_default.defineProperty(this, "isVREnabled", {
    get: function() {
      return isEnabled();
    },
    set: function(value) {
      isEnabled(value && Fullscreen2.enabled);
    }
  });
  this.tooltip = void 0;
  knockout_default.defineProperty(this, "tooltip", function() {
    if (!isEnabled()) {
      return "VR mode is unavailable";
    }
    return isVRMode() ? "Exit VR mode" : "Enter VR mode";
  });
  const isOrthographic = knockout_default.observable(false);
  this._isOrthographic = void 0;
  knockout_default.defineProperty(this, "_isOrthographic", {
    get: function() {
      return isOrthographic();
    }
  });
  this._eventHelper = new EventHelper4();
  this._eventHelper.add(scene.preRender, function() {
    isOrthographic(scene.camera.frustum instanceof OrthographicFrustum2);
  });
  this._locked = false;
  this._noSleep = new import_nosleep.default();
  this._command = createCommand_default(
    function() {
      toggleVR(that, scene, isVRMode, isOrthographic);
    },
    knockout_default.getObservable(this, "isVREnabled")
  );
  this._vrElement = getElement17(vrElement) ?? document.body;
  this._callback = function() {
    if (!Fullscreen2.fullscreen && isVRMode()) {
      scene.useWebVR = false;
      if (that._locked) {
        unlockScreen();
        that._locked = false;
      }
      that._noSleep.disable();
      isVRMode(false);
    }
  };
  document.addEventListener(Fullscreen2.changeEventName, this._callback);
}
Object.defineProperties(VRButtonViewModel.prototype, {
  /**
   * Gets or sets the HTML element to place into VR mode when the
   * corresponding button is pressed.
   * @memberof VRButtonViewModel.prototype
   *
   * @type {Element}
   */
  vrElement: {
    //TODO:@exception {DeveloperError} value must be a valid HTML Element.
    get: function() {
      return this._vrElement;
    },
    set: function(value) {
      if (!(value instanceof Element)) {
        throw new DeveloperError27("value must be a valid Element.");
      }
      this._vrElement = value;
    }
  },
  /**
   * Gets the Command to toggle VR mode.
   * @memberof VRButtonViewModel.prototype
   *
   * @type {Command}
   */
  command: {
    get: function() {
      return this._command;
    }
  }
});
VRButtonViewModel.prototype.isDestroyed = function() {
  return false;
};
VRButtonViewModel.prototype.destroy = function() {
  this._eventHelper.removeAll();
  document.removeEventListener(Fullscreen2.changeEventName, this._callback);
  destroyObject23(this);
};
var VRButtonViewModel_default = VRButtonViewModel;

// packages/widgets/Source/VRButton/VRButton.js
var enterVRPath = "M 5.3125 6.375 C 4.008126 6.375 2.96875 7.4141499 2.96875 8.71875 L 2.96875 19.5 C 2.96875 20.8043 4.008126 21.875 5.3125 21.875 L 13.65625 21.875 C 13.71832 20.0547 14.845166 18.59375 16.21875 18.59375 C 17.592088 18.59375 18.71881 20.0552 18.78125 21.875 L 27.09375 21.875 C 28.398125 21.875 29.4375 20.8043 29.4375 19.5 L 29.4375 8.71875 C 29.4375 7.4141499 28.398125 6.375 27.09375 6.375 L 5.3125 6.375 z M 9.625 10.4375 C 11.55989 10.4375 13.125 12.03385 13.125 13.96875 C 13.125 15.90365 11.55989 17.46875 9.625 17.46875 C 7.69011 17.46875 6.125 15.90365 6.125 13.96875 C 6.125 12.03385 7.69011 10.4375 9.625 10.4375 z M 22.46875 10.4375 C 24.40364 10.4375 25.96875 12.03385 25.96875 13.96875 C 25.96875 15.90365 24.40364 17.46875 22.46875 17.46875 C 20.53386 17.46875 18.96875 15.90365 18.96875 13.96875 C 18.96875 12.03385 20.53386 10.4375 22.46875 10.4375 z";
var exitVRPath = "M 25.770585,2.4552065 C 15.72282,13.962707 10.699956,19.704407 8.1768352,22.580207 c -1.261561,1.4379 -1.902282,2.1427 -2.21875,2.5 -0.141624,0.1599 -0.208984,0.2355 -0.25,0.2813 l 0.6875,0.75 c 10e-5,-10e-5 0.679191,0.727 0.6875,0.7187 0.01662,-0.016 0.02451,-0.024 0.03125,-0.031 0.01348,-0.014 0.04013,-0.038 0.0625,-0.062 0.04474,-0.05 0.120921,-0.1315 0.28125,-0.3126 0.320657,-0.3619 0.956139,-1.0921 2.2187499,-2.5312 2.5252219,-2.8781 7.5454589,-8.6169 17.5937499,-20.1250005 l -1.5,-1.3125 z m -20.5624998,3.9063 c -1.304375,0 -2.34375,1.0391 -2.34375,2.3437 l 0,10.8125005 c 0,1.3043 1.039375,2.375 2.34375,2.375 l 2.25,0 c 1.9518039,-2.2246 7.4710958,-8.5584 13.5624998,-15.5312005 l -15.8124998,0 z m 21.1249998,0 c -1.855467,2.1245 -2.114296,2.4005 -3.59375,4.0936995 1.767282,0.1815 3.15625,1.685301 3.15625,3.500001 0,1.9349 -1.56511,3.5 -3.5,3.5 -1.658043,0 -3.043426,-1.1411 -3.40625,-2.6875 -1.089617,1.2461 -2.647139,2.9988 -3.46875,3.9375 0.191501,-0.062 0.388502,-0.094 0.59375,-0.094 1.373338,0 2.50006,1.4614 2.5625,3.2812 l 8.3125,0 c 1.304375,0 2.34375,-1.0707 2.34375,-2.375 l 0,-10.8125005 c 0,-1.3046 -1.039375,-2.3437 -2.34375,-2.3437 l -0.65625,0 z M 9.5518351,10.423906 c 1.9348899,0 3.4999999,1.596401 3.4999999,3.531301 0,1.9349 -1.56511,3.5 -3.4999999,3.5 -1.9348899,0 -3.4999999,-1.5651 -3.4999999,-3.5 0,-1.9349 1.56511,-3.531301 3.4999999,-3.531301 z m 4.2187499,10.312601 c -0.206517,0.2356 -0.844218,0.9428 -1.03125,1.1562 l 0.8125,0 c 0.01392,-0.4081 0.107026,-0.7968 0.21875,-1.1562 z";
function VRButton(container, scene, vrElement) {
  if (!defined35(container)) {
    throw new DeveloperError28("container is required.");
  }
  if (!defined35(scene)) {
    throw new DeveloperError28("scene is required.");
  }
  container = getElement18(container);
  const viewModel = new VRButtonViewModel_default(scene, vrElement);
  viewModel._exitVRPath = exitVRPath;
  viewModel._enterVRPath = enterVRPath;
  const element = document.createElement("button");
  element.type = "button";
  element.className = "cesium-button cesium-vrButton";
  element.setAttribute(
    "data-bind",
    'css: { "cesium-button-disabled" : _isOrthographic }, attr: { title: tooltip },click: command,enable: isVREnabled,cesiumSvgPath: { path: isVRMode ? _exitVRPath : _enterVRPath, width: 32, height: 32 }'
  );
  container.appendChild(element);
  knockout_default.applyBindings(viewModel, element);
  this._container = container;
  this._viewModel = viewModel;
  this._element = element;
}
Object.defineProperties(VRButton.prototype, {
  /**
   * Gets the parent container.
   * @memberof VRButton.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof VRButton.prototype
   *
   * @type {VRButtonViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
VRButton.prototype.isDestroyed = function() {
  return false;
};
VRButton.prototype.destroy = function() {
  this._viewModel.destroy();
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  return destroyObject24(this);
};
var VRButton_default = VRButton;

// packages/widgets/Source/Viewer/Viewer.js
import {
  BoundingSphere,
  BoundingSphereState,
  Cartesian3 as Cartesian32,
  CesiumWidget,
  Cesium3DTileFeature as Cesium3DTileFeature2,
  Clock as Clock2,
  ConstantPositionProperty,
  Frozen as Frozen3,
  defined as defined36,
  destroyObject as destroyObject25,
  DeveloperError as DeveloperError29,
  Entity,
  Event as Event4,
  EventHelper as EventHelper5,
  getElement as getElement19,
  JulianDate as JulianDate6,
  Math as CesiumMath2,
  Property,
  ScreenSpaceEventType as ScreenSpaceEventType3,
  IonGeocoderService as IonGeocoderService2
} from "@cesium/engine";
var boundingSphereScratch = new BoundingSphere();
function onTimelineScrubfunction(e) {
  const clock = e.clock;
  clock.currentTime = e.timeJulian;
  clock.shouldAnimate = false;
}
function getCesium3DTileFeatureDescription(feature) {
  const propertyIds = feature.getPropertyIds();
  let html = "";
  propertyIds.forEach(function(propertyId) {
    const value = feature.getProperty(propertyId);
    if (defined36(value)) {
      html += `<tr><th>${propertyId}</th><td>${value}</td></tr>`;
    }
  });
  if (html.length > 0) {
    html = `<table class="cesium-infoBox-defaultTable"><tbody>${html}</tbody></table>`;
  }
  return html;
}
function getCesium3DTileFeatureName(feature) {
  let i;
  const possibleIds = [];
  const propertyIds = feature.getPropertyIds();
  for (i = 0; i < propertyIds.length; i++) {
    const propertyId = propertyIds[i];
    if (/^name$/i.test(propertyId)) {
      possibleIds[0] = feature.getProperty(propertyId);
    } else if (/name/i.test(propertyId)) {
      possibleIds[1] = feature.getProperty(propertyId);
    } else if (/^title$/i.test(propertyId)) {
      possibleIds[2] = feature.getProperty(propertyId);
    } else if (/^(id|identifier)$/i.test(propertyId)) {
      possibleIds[3] = feature.getProperty(propertyId);
    } else if (/element/i.test(propertyId)) {
      possibleIds[4] = feature.getProperty(propertyId);
    } else if (/(id|identifier)$/i.test(propertyId)) {
      possibleIds[5] = feature.getProperty(propertyId);
    }
  }
  const length = possibleIds.length;
  for (i = 0; i < length; i++) {
    const item = possibleIds[i];
    if (defined36(item) && item !== "") {
      return item;
    }
  }
  return "Unnamed Feature";
}
function pickEntity(viewer, e) {
  const picked = viewer.scene.pick(e.position);
  if (defined36(picked)) {
    const id = picked.id ?? picked.primitive.id;
    if (id instanceof Entity) {
      return id;
    }
    if (picked instanceof Cesium3DTileFeature2) {
      return new Entity({
        name: getCesium3DTileFeatureName(picked),
        description: getCesium3DTileFeatureDescription(picked),
        feature: picked
      });
    }
  }
  if (defined36(viewer.scene.globe)) {
    return pickImageryLayerFeature(viewer, e.position);
  }
}
var scratchStopTime = new JulianDate6();
function linkTimelineToDataSourceClock(timeline, dataSource) {
  if (defined36(dataSource)) {
    const dataSourceClock = dataSource.clock;
    if (defined36(dataSourceClock) && defined36(timeline)) {
      const startTime = dataSourceClock.startTime;
      let stopTime = dataSourceClock.stopTime;
      if (JulianDate6.equals(startTime, stopTime)) {
        stopTime = JulianDate6.addSeconds(
          startTime,
          CesiumMath2.EPSILON2,
          scratchStopTime
        );
      }
      timeline.updateFromClock();
      timeline.zoomTo(startTime, stopTime);
    }
  }
}
var cartesian3Scratch = new Cartesian32();
function pickImageryLayerFeature(viewer, windowPosition) {
  const scene = viewer.scene;
  const pickRay = scene.camera.getPickRay(windowPosition);
  const imageryLayerFeaturePromise = scene.imageryLayers.pickImageryLayerFeatures(pickRay, scene);
  if (!defined36(imageryLayerFeaturePromise)) {
    return;
  }
  const loadingMessage = new Entity({
    id: "Loading...",
    description: "Loading feature information..."
  });
  imageryLayerFeaturePromise.then(
    function(features) {
      if (viewer.selectedEntity !== loadingMessage) {
        return;
      }
      if (!defined36(features) || features.length === 0) {
        viewer.selectedEntity = createNoFeaturesEntity();
        return;
      }
      const feature = features[0];
      const entity = new Entity({
        id: feature.name,
        description: feature.description
      });
      if (defined36(feature.position)) {
        const ecfPosition = viewer.scene.ellipsoid.cartographicToCartesian(
          feature.position,
          cartesian3Scratch
        );
        entity.position = new ConstantPositionProperty(ecfPosition);
      }
      viewer.selectedEntity = entity;
    },
    function() {
      if (viewer.selectedEntity !== loadingMessage) {
        return;
      }
      viewer.selectedEntity = createNoFeaturesEntity();
    }
  );
  return loadingMessage;
}
function createNoFeaturesEntity() {
  return new Entity({
    id: "None",
    description: "No features found."
  });
}
function enableVRUI(viewer, enabled) {
  const geocoder = viewer._geocoder;
  const homeButton = viewer._homeButton;
  const sceneModePicker = viewer._sceneModePicker;
  const projectionPicker = viewer._projectionPicker;
  const baseLayerPicker = viewer._baseLayerPicker;
  const animation = viewer._animation;
  const timeline = viewer._timeline;
  const fullscreenButton = viewer._fullscreenButton;
  const infoBox = viewer._infoBox;
  const selectionIndicator = viewer._selectionIndicator;
  const visibility = enabled ? "hidden" : "visible";
  if (defined36(geocoder)) {
    geocoder.container.style.visibility = visibility;
  }
  if (defined36(homeButton)) {
    homeButton.container.style.visibility = visibility;
  }
  if (defined36(sceneModePicker)) {
    sceneModePicker.container.style.visibility = visibility;
  }
  if (defined36(projectionPicker)) {
    projectionPicker.container.style.visibility = visibility;
  }
  if (defined36(baseLayerPicker)) {
    baseLayerPicker.container.style.visibility = visibility;
  }
  if (defined36(animation)) {
    animation.container.style.visibility = visibility;
  }
  if (defined36(timeline)) {
    timeline.container.style.visibility = visibility;
  }
  if (defined36(fullscreenButton) && fullscreenButton.viewModel.isFullscreenEnabled) {
    fullscreenButton.container.style.visibility = visibility;
  }
  if (defined36(infoBox)) {
    infoBox.container.style.visibility = visibility;
  }
  if (defined36(selectionIndicator)) {
    selectionIndicator.container.style.visibility = visibility;
  }
  if (viewer._container) {
    const right = enabled || !defined36(fullscreenButton) ? 0 : fullscreenButton.container.clientWidth;
    viewer._vrButton.container.style.right = `${right}px`;
    viewer.forceResize();
  }
}
function Viewer(container, options) {
  if (!defined36(container)) {
    throw new DeveloperError29("container is required.");
  }
  container = getElement19(container);
  options = options ?? Frozen3.EMPTY_OBJECT;
  if (options.globe === false && defined36(options.baseLayer) && options.baseLayer !== false) {
    throw new DeveloperError29("Cannot use baseLayer when globe is disabled.");
  }
  const createBaseLayerPicker = (!defined36(options.globe) || options.globe !== false) && (!defined36(options.baseLayerPicker) || options.baseLayerPicker !== false);
  if (!createBaseLayerPicker && defined36(options.selectedImageryProviderViewModel)) {
    throw new DeveloperError29(
      "options.selectedImageryProviderViewModel is not available when not using the BaseLayerPicker widget. Either specify options.baseLayer instead or set options.baseLayerPicker to true."
    );
  }
  if (!createBaseLayerPicker && defined36(options.selectedTerrainProviderViewModel)) {
    throw new DeveloperError29(
      "options.selectedTerrainProviderViewModel is not available when not using the BaseLayerPicker widget. Either specify options.terrainProvider instead or set options.baseLayerPicker to true."
    );
  }
  const that = this;
  const viewerContainer = document.createElement("div");
  viewerContainer.className = "cesium-viewer";
  container.appendChild(viewerContainer);
  const cesiumWidgetContainer = document.createElement("div");
  cesiumWidgetContainer.className = "cesium-viewer-cesiumWidgetContainer";
  viewerContainer.appendChild(cesiumWidgetContainer);
  const bottomContainer = document.createElement("div");
  bottomContainer.className = "cesium-viewer-bottom";
  viewerContainer.appendChild(bottomContainer);
  const scene3DOnly = options.scene3DOnly ?? false;
  let clock;
  let clockViewModel;
  let destroyClockViewModel = false;
  if (defined36(options.clockViewModel)) {
    clockViewModel = options.clockViewModel;
    clock = clockViewModel.clock;
  } else {
    clock = new Clock2();
    clockViewModel = new ClockViewModel_default(clock);
    destroyClockViewModel = true;
  }
  const cesiumWidget = new CesiumWidget(cesiumWidgetContainer, {
    baseLayer: createBaseLayerPicker && defined36(options.selectedImageryProviderViewModel) || defined36(options.baseLayer) || defined36(options.imageryProvider) ? false : void 0,
    clock,
    shouldAnimate: options.shouldAnimate,
    skyBox: options.skyBox,
    skyAtmosphere: options.skyAtmosphere,
    sceneMode: options.sceneMode,
    ellipsoid: options.ellipsoid,
    mapProjection: options.mapProjection,
    globe: options.globe,
    orderIndependentTranslucency: options.orderIndependentTranslucency,
    automaticallyTrackDataSourceClocks: options.automaticallyTrackDataSourceClocks,
    contextOptions: options.contextOptions,
    useDefaultRenderLoop: options.useDefaultRenderLoop,
    targetFrameRate: options.targetFrameRate,
    showRenderLoopErrors: options.showRenderLoopErrors,
    useBrowserRecommendedResolution: options.useBrowserRecommendedResolution,
    creditContainer: defined36(options.creditContainer) ? options.creditContainer : bottomContainer,
    creditViewport: options.creditViewport,
    dataSources: options.dataSources,
    scene3DOnly,
    shadows: options.shadows,
    terrainShadows: options.terrainShadows,
    mapMode2D: options.mapMode2D,
    blurActiveElementOnCanvasFocus: options.blurActiveElementOnCanvasFocus,
    requestRenderMode: options.requestRenderMode,
    maximumRenderTimeChange: options.maximumRenderTimeChange,
    depthPlaneEllipsoidOffset: options.depthPlaneEllipsoidOffset,
    msaaSamples: options.msaaSamples
  });
  const scene = cesiumWidget.scene;
  const eventHelper = new EventHelper5();
  eventHelper.add(clock.onTick, Viewer.prototype._onTick, this);
  let selectionIndicator;
  if (!defined36(options.selectionIndicator) || options.selectionIndicator !== false) {
    const selectionIndicatorContainer = document.createElement("div");
    selectionIndicatorContainer.className = "cesium-viewer-selectionIndicatorContainer";
    viewerContainer.appendChild(selectionIndicatorContainer);
    selectionIndicator = new SelectionIndicator_default(
      selectionIndicatorContainer,
      scene
    );
  }
  let infoBox;
  if (!defined36(options.infoBox) || options.infoBox !== false) {
    const infoBoxContainer = document.createElement("div");
    infoBoxContainer.className = "cesium-viewer-infoBoxContainer";
    viewerContainer.appendChild(infoBoxContainer);
    infoBox = new InfoBox_default(infoBoxContainer);
    const infoBoxViewModel = infoBox.viewModel;
    eventHelper.add(
      infoBoxViewModel.cameraClicked,
      Viewer.prototype._onInfoBoxCameraClicked,
      this
    );
    eventHelper.add(
      infoBoxViewModel.closeClicked,
      Viewer.prototype._onInfoBoxClockClicked,
      this
    );
  }
  const toolbar = document.createElement("div");
  toolbar.className = "cesium-viewer-toolbar";
  viewerContainer.appendChild(toolbar);
  let geocoder;
  if (!defined36(options.geocoder) || options.geocoder !== false) {
    const geocoderContainer = document.createElement("div");
    geocoderContainer.className = "cesium-viewer-geocoderContainer";
    toolbar.appendChild(geocoderContainer);
    let geocoderService;
    if (typeof options.geocoder === "string") {
      geocoderService = [
        new IonGeocoderService2({
          scene,
          geocodeProviderType: options.geocoder
        })
      ];
    } else if (defined36(options.geocoder) && typeof options.geocoder !== "boolean") {
      geocoderService = Array.isArray(options.geocoder) ? options.geocoder : [options.geocoder];
    }
    geocoder = new Geocoder_default({
      container: geocoderContainer,
      geocoderServices: geocoderService,
      scene
    });
    eventHelper.add(
      geocoder.viewModel.search.beforeExecute,
      Viewer.prototype._clearObjects,
      this
    );
  }
  let homeButton;
  if (!defined36(options.homeButton) || options.homeButton !== false) {
    homeButton = new HomeButton_default(toolbar, scene);
    if (defined36(geocoder)) {
      eventHelper.add(homeButton.viewModel.command.afterExecute, function() {
        const viewModel = geocoder.viewModel;
        viewModel.searchText = "";
        if (viewModel.isSearchInProgress) {
          viewModel.search();
        }
      });
    }
    eventHelper.add(
      homeButton.viewModel.command.beforeExecute,
      Viewer.prototype._clearTrackedObject,
      this
    );
  }
  if (options.sceneModePicker === true && scene3DOnly) {
    throw new DeveloperError29(
      "options.sceneModePicker is not available when options.scene3DOnly is set to true."
    );
  }
  let sceneModePicker;
  if (!scene3DOnly && (!defined36(options.sceneModePicker) || options.sceneModePicker !== false)) {
    sceneModePicker = new SceneModePicker_default(toolbar, scene);
  }
  let projectionPicker;
  if (options.projectionPicker) {
    projectionPicker = new ProjectionPicker_default(toolbar, scene);
  }
  let baseLayerPicker;
  let baseLayerPickerDropDown;
  if (createBaseLayerPicker) {
    const imageryProviderViewModels = options.imageryProviderViewModels ?? createDefaultImageryProviderViewModels_default();
    const terrainProviderViewModels = options.terrainProviderViewModels ?? createDefaultTerrainProviderViewModels_default();
    baseLayerPicker = new BaseLayerPicker_default(toolbar, {
      globe: scene.globe,
      imageryProviderViewModels,
      selectedImageryProviderViewModel: options.selectedImageryProviderViewModel,
      terrainProviderViewModels,
      selectedTerrainProviderViewModel: options.selectedTerrainProviderViewModel
    });
    const elements = toolbar.getElementsByClassName(
      "cesium-baseLayerPicker-dropDown"
    );
    baseLayerPickerDropDown = elements[0];
  }
  if (defined36(options.baseLayer) && options.baseLayer !== false) {
    if (createBaseLayerPicker) {
      baseLayerPicker.viewModel.selectedImagery = void 0;
    }
    scene.imageryLayers.removeAll();
    scene.imageryLayers.add(options.baseLayer);
  }
  if (defined36(options.terrainProvider)) {
    if (createBaseLayerPicker) {
      baseLayerPicker.viewModel.selectedTerrain = void 0;
    }
    scene.terrainProvider = options.terrainProvider;
  }
  if (defined36(options.terrain)) {
    if (defined36(options.terrainProvider)) {
      throw new DeveloperError29(
        "Specify either options.terrainProvider or options.terrain."
      );
    }
    if (createBaseLayerPicker) {
      scene.globe.depthTestAgainstTerrain = true;
    }
    scene.setTerrain(options.terrain);
  }
  let navigationHelpButton;
  if (!defined36(options.navigationHelpButton) || options.navigationHelpButton !== false) {
    let showNavHelp = true;
    try {
      if (defined36(window.localStorage)) {
        const hasSeenNavHelp = window.localStorage.getItem(
          "cesium-hasSeenNavHelp"
        );
        if (defined36(hasSeenNavHelp) && Boolean(hasSeenNavHelp)) {
          showNavHelp = false;
        } else {
          window.localStorage.setItem("cesium-hasSeenNavHelp", "true");
        }
      }
    } catch (e) {
    }
    navigationHelpButton = new NavigationHelpButton_default({
      container: toolbar,
      instructionsInitiallyVisible: options.navigationInstructionsInitiallyVisible ?? showNavHelp
    });
  }
  let animation;
  if (!defined36(options.animation) || options.animation !== false) {
    const animationContainer = document.createElement("div");
    animationContainer.className = "cesium-viewer-animationContainer";
    viewerContainer.appendChild(animationContainer);
    animation = new Animation_default(
      animationContainer,
      new AnimationViewModel_default(clockViewModel)
    );
  }
  let timeline;
  if (!defined36(options.timeline) || options.timeline !== false) {
    const timelineContainer = document.createElement("div");
    timelineContainer.className = "cesium-viewer-timelineContainer";
    viewerContainer.appendChild(timelineContainer);
    timeline = new Timeline_default(timelineContainer, clock);
    timeline.addEventListener("settime", onTimelineScrubfunction, false);
    timeline.zoomTo(clock.startTime, clock.stopTime);
  }
  let fullscreenButton;
  let fullscreenSubscription;
  let fullscreenContainer;
  if (!defined36(options.fullscreenButton) || options.fullscreenButton !== false) {
    fullscreenContainer = document.createElement("div");
    fullscreenContainer.className = "cesium-viewer-fullscreenContainer";
    viewerContainer.appendChild(fullscreenContainer);
    fullscreenButton = new FullscreenButton_default(
      fullscreenContainer,
      options.fullscreenElement
    );
    fullscreenSubscription = subscribeAndEvaluate_default(
      fullscreenButton.viewModel,
      "isFullscreenEnabled",
      function(isFullscreenEnabled) {
        fullscreenContainer.style.display = isFullscreenEnabled ? "block" : "none";
        if (defined36(timeline)) {
          timeline.container.style.right = `${fullscreenContainer.clientWidth}px`;
          timeline.resize();
        }
      }
    );
  }
  let vrButton;
  let vrSubscription;
  let vrModeSubscription;
  if (options.vrButton) {
    const vrContainer = document.createElement("div");
    vrContainer.className = "cesium-viewer-vrContainer";
    viewerContainer.appendChild(vrContainer);
    vrButton = new VRButton_default(vrContainer, scene, options.fullScreenElement);
    vrSubscription = subscribeAndEvaluate_default(
      vrButton.viewModel,
      "isVREnabled",
      function(isVREnabled) {
        vrContainer.style.display = isVREnabled ? "block" : "none";
        if (defined36(fullscreenButton)) {
          vrContainer.style.right = `${fullscreenContainer.clientWidth}px`;
        }
        if (defined36(timeline)) {
          timeline.container.style.right = `${vrContainer.clientWidth}px`;
          timeline.resize();
        }
      }
    );
    vrModeSubscription = subscribeAndEvaluate_default(
      vrButton.viewModel,
      "isVRMode",
      function(isVRMode) {
        enableVRUI(that, isVRMode);
      }
    );
  }
  this._baseLayerPickerDropDown = baseLayerPickerDropDown;
  this._fullscreenSubscription = fullscreenSubscription;
  this._vrSubscription = vrSubscription;
  this._vrModeSubscription = vrModeSubscription;
  this._dataSourceChangedListeners = {};
  this._container = container;
  this._bottomContainer = bottomContainer;
  this._element = viewerContainer;
  this._cesiumWidget = cesiumWidget;
  this._selectionIndicator = selectionIndicator;
  this._infoBox = infoBox;
  this._clockViewModel = clockViewModel;
  this._destroyClockViewModel = destroyClockViewModel;
  this._toolbar = toolbar;
  this._homeButton = homeButton;
  this._sceneModePicker = sceneModePicker;
  this._projectionPicker = projectionPicker;
  this._baseLayerPicker = baseLayerPicker;
  this._navigationHelpButton = navigationHelpButton;
  this._animation = animation;
  this._timeline = timeline;
  this._fullscreenButton = fullscreenButton;
  this._vrButton = vrButton;
  this._geocoder = geocoder;
  this._eventHelper = eventHelper;
  this._lastWidth = 0;
  this._lastHeight = 0;
  this._enableInfoOrSelection = defined36(infoBox) || defined36(selectionIndicator);
  this._selectedEntity = void 0;
  this._selectedEntityChanged = new Event4();
  const dataSourceCollection = this._cesiumWidget.dataSources;
  const dataSourceDisplay = this._cesiumWidget.dataSourceDisplay;
  eventHelper.add(
    dataSourceCollection.dataSourceAdded,
    Viewer.prototype._onDataSourceAdded,
    this
  );
  eventHelper.add(
    dataSourceCollection.dataSourceRemoved,
    Viewer.prototype._onDataSourceRemoved,
    this
  );
  eventHelper.add(scene.postUpdate, Viewer.prototype.resize, this);
  const dataSourceLength = dataSourceCollection.length;
  for (let i = 0; i < dataSourceLength; i++) {
    this._dataSourceAdded(dataSourceCollection, dataSourceCollection.get(i));
  }
  this._dataSourceAdded(void 0, dataSourceDisplay.defaultDataSource);
  eventHelper.add(
    dataSourceCollection.dataSourceAdded,
    Viewer.prototype._dataSourceAdded,
    this
  );
  eventHelper.add(
    dataSourceCollection.dataSourceRemoved,
    Viewer.prototype._dataSourceRemoved,
    this
  );
  function pickAndTrackObject(e) {
    const entity = pickEntity(that, e);
    if (defined36(entity)) {
      if (Property.getValueOrUndefined(entity.position, that.clock.currentTime)) {
        that.trackedEntity = entity;
      } else {
        that.zoomTo(entity);
      }
    } else if (defined36(that.trackedEntity)) {
      that.trackedEntity = void 0;
    }
  }
  function pickAndSelectObject(e) {
    that.selectedEntity = pickEntity(that, e);
  }
  cesiumWidget.screenSpaceEventHandler.setInputAction(
    pickAndSelectObject,
    ScreenSpaceEventType3.LEFT_CLICK
  );
  cesiumWidget.screenSpaceEventHandler.setInputAction(
    pickAndTrackObject,
    ScreenSpaceEventType3.LEFT_DOUBLE_CLICK
  );
  cesiumWidget._canAnimateUpdateCallback = this._updateCanAnimate(this);
}
Object.defineProperties(Viewer.prototype, {
  /**
   * Gets the parent container.
   * @memberof Viewer.prototype
   * @type {Element}
   * @readonly
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Manages the list of credits to display on screen and in the lightbox.
   * @memberof Viewer.prototype
   *
   * @type {CreditDisplay}
   */
  creditDisplay: {
    get: function() {
      return this._cesiumWidget.creditDisplay;
    }
  },
  /**
   * Gets the DOM element for the area at the bottom of the window containing the
   * {@link CreditDisplay} and potentially other things.
   * @memberof Viewer.prototype
   * @type {Element}
   * @readonly
   */
  bottomContainer: {
    get: function() {
      return this._bottomContainer;
    }
  },
  /**
   * Gets the CesiumWidget.
   * @memberof Viewer.prototype
   * @type {CesiumWidget}
   * @readonly
   */
  cesiumWidget: {
    get: function() {
      return this._cesiumWidget;
    }
  },
  /**
   * Gets the selection indicator.
   * @memberof Viewer.prototype
   * @type {SelectionIndicator}
   * @readonly
   */
  selectionIndicator: {
    get: function() {
      return this._selectionIndicator;
    }
  },
  /**
   * Gets the info box.
   * @memberof Viewer.prototype
   * @type {InfoBox}
   * @readonly
   */
  infoBox: {
    get: function() {
      return this._infoBox;
    }
  },
  /**
   * Gets the Geocoder.
   * @memberof Viewer.prototype
   * @type {Geocoder}
   * @readonly
   */
  geocoder: {
    get: function() {
      return this._geocoder;
    }
  },
  /**
   * Gets the HomeButton.
   * @memberof Viewer.prototype
   * @type {HomeButton}
   * @readonly
   */
  homeButton: {
    get: function() {
      return this._homeButton;
    }
  },
  /**
   * Gets the SceneModePicker.
   * @memberof Viewer.prototype
   * @type {SceneModePicker}
   * @readonly
   */
  sceneModePicker: {
    get: function() {
      return this._sceneModePicker;
    }
  },
  /**
   * Gets the ProjectionPicker.
   * @memberof Viewer.prototype
   * @type {ProjectionPicker}
   * @readonly
   */
  projectionPicker: {
    get: function() {
      return this._projectionPicker;
    }
  },
  /**
   * Gets the BaseLayerPicker.
   * @memberof Viewer.prototype
   * @type {BaseLayerPicker}
   * @readonly
   */
  baseLayerPicker: {
    get: function() {
      return this._baseLayerPicker;
    }
  },
  /**
   * Gets the NavigationHelpButton.
   * @memberof Viewer.prototype
   * @type {NavigationHelpButton}
   * @readonly
   */
  navigationHelpButton: {
    get: function() {
      return this._navigationHelpButton;
    }
  },
  /**
   * Gets the Animation widget.
   * @memberof Viewer.prototype
   * @type {Animation}
   * @readonly
   */
  animation: {
    get: function() {
      return this._animation;
    }
  },
  /**
   * Gets the Timeline widget.
   * @memberof Viewer.prototype
   * @type {Timeline}
   * @readonly
   */
  timeline: {
    get: function() {
      return this._timeline;
    }
  },
  /**
   * Gets the FullscreenButton.
   * @memberof Viewer.prototype
   * @type {FullscreenButton}
   * @readonly
   */
  fullscreenButton: {
    get: function() {
      return this._fullscreenButton;
    }
  },
  /**
   * Gets the VRButton.
   * @memberof Viewer.prototype
   * @type {VRButton}
   * @readonly
   */
  vrButton: {
    get: function() {
      return this._vrButton;
    }
  },
  /**
   * Gets the display used for {@link DataSource} visualization.
   * @memberof Viewer.prototype
   * @type {DataSourceDisplay}
   * @readonly
   */
  dataSourceDisplay: {
    get: function() {
      return this._cesiumWidget.dataSourceDisplay;
    }
  },
  /**
   * Gets the collection of entities not tied to a particular data source.
   * This is a shortcut to [dataSourceDisplay.defaultDataSource.entities]{@link Viewer#dataSourceDisplay}.
   * @memberof Viewer.prototype
   * @type {EntityCollection}
   * @readonly
   */
  entities: {
    get: function() {
      return this._cesiumWidget.entities;
    }
  },
  /**
   * Gets the set of {@link DataSource} instances to be visualized.
   * @memberof Viewer.prototype
   * @type {DataSourceCollection}
   * @readonly
   */
  dataSources: {
    get: function() {
      return this._cesiumWidget.dataSources;
    }
  },
  /**
   * Gets the canvas.
   * @memberof Viewer.prototype
   * @type {HTMLCanvasElement}
   * @readonly
   */
  canvas: {
    get: function() {
      return this._cesiumWidget.canvas;
    }
  },
  /**
   * Gets the scene.
   * @memberof Viewer.prototype
   * @type {Scene}
   * @readonly
   */
  scene: {
    get: function() {
      return this._cesiumWidget.scene;
    }
  },
  /**
   * Determines if shadows are cast by light sources.
   * @memberof Viewer.prototype
   * @type {boolean}
   */
  shadows: {
    get: function() {
      return this.scene.shadowMap.enabled;
    },
    set: function(value) {
      this.scene.shadowMap.enabled = value;
    }
  },
  /**
   * Determines if the terrain casts or shadows from light sources.
   * @memberof Viewer.prototype
   * @type {ShadowMode}
   */
  terrainShadows: {
    get: function() {
      return this.scene.globe.shadows;
    },
    set: function(value) {
      this.scene.globe.shadows = value;
    }
  },
  /**
   * Get the scene's shadow map
   * @memberof Viewer.prototype
   * @type {ShadowMap}
   * @readonly
   */
  shadowMap: {
    get: function() {
      return this.scene.shadowMap;
    }
  },
  /**
   * Gets the collection of image layers that will be rendered on the globe.
   * @memberof Viewer.prototype
   *
   * @type {ImageryLayerCollection}
   * @readonly
   */
  imageryLayers: {
    get: function() {
      return this.scene.imageryLayers;
    }
  },
  /**
   * The terrain provider providing surface geometry for the globe.
   * @memberof Viewer.prototype
   *
   * @type {TerrainProvider}
   */
  terrainProvider: {
    get: function() {
      return this.scene.terrainProvider;
    },
    set: function(terrainProvider) {
      this.scene.terrainProvider = terrainProvider;
    }
  },
  /**
   * Gets the camera.
   * @memberof Viewer.prototype
   *
   * @type {Camera}
   * @readonly
   */
  camera: {
    get: function() {
      return this.scene.camera;
    }
  },
  /**
   * Gets the default ellipsoid for the scene.
   * @memberof Viewer.prototype
   *
   * @type {Ellipsoid}
   * @default Ellipsoid.default
   * @readonly
   */
  ellipsoid: {
    get: function() {
      return this._scene.ellipsoid;
    }
  },
  /**
   * Gets the post-process stages.
   * @memberof Viewer.prototype
   *
   * @type {PostProcessStageCollection}
   * @readonly
   */
  postProcessStages: {
    get: function() {
      return this.scene.postProcessStages;
    }
  },
  /**
   * Gets the clock.
   * @memberof Viewer.prototype
   * @type {Clock}
   * @readonly
   */
  clock: {
    get: function() {
      return this._clockViewModel.clock;
    }
  },
  /**
   * Gets the clock view model.
   * @memberof Viewer.prototype
   * @type {ClockViewModel}
   * @readonly
   */
  clockViewModel: {
    get: function() {
      return this._clockViewModel;
    }
  },
  /**
   * Gets the screen space event handler.
   * @memberof Viewer.prototype
   * @type {ScreenSpaceEventHandler}
   * @readonly
   */
  screenSpaceEventHandler: {
    get: function() {
      return this._cesiumWidget.screenSpaceEventHandler;
    }
  },
  /**
   * Gets or sets the target frame rate of the widget when <code>useDefaultRenderLoop</code>
   * is true. If undefined, the browser's requestAnimationFrame implementation
   * determines the frame rate.  If defined, this value must be greater than 0.  A value higher
   * than the underlying requestAnimationFrame implementation will have no effect.
   * @memberof Viewer.prototype
   *
   * @type {number}
   */
  targetFrameRate: {
    get: function() {
      return this._cesiumWidget.targetFrameRate;
    },
    set: function(value) {
      this._cesiumWidget.targetFrameRate = value;
    }
  },
  /**
   * Gets or sets whether or not this widget should control the render loop.
   * If true the widget will use requestAnimationFrame to
   * perform rendering and resizing of the widget, as well as drive the
   * simulation clock. If set to false, you must manually call the
   * <code>resize</code>, <code>render</code> methods
   * as part of a custom render loop.  If an error occurs during rendering, {@link Scene}'s
   * <code>renderError</code> event will be raised and this property
   * will be set to false.  It must be set back to true to continue rendering
   * after the error.
   * @memberof Viewer.prototype
   *
   * @type {boolean}
   */
  useDefaultRenderLoop: {
    get: function() {
      return this._cesiumWidget.useDefaultRenderLoop;
    },
    set: function(value) {
      this._cesiumWidget.useDefaultRenderLoop = value;
    }
  },
  /**
   * Gets or sets a scaling factor for rendering resolution.  Values less than 1.0 can improve
   * performance on less powerful devices while values greater than 1.0 will render at a higher
   * resolution and then scale down, resulting in improved visual fidelity.
   * For example, if the widget is laid out at a size of 640x480, setting this value to 0.5
   * will cause the scene to be rendered at 320x240 and then scaled up while setting
   * it to 2.0 will cause the scene to be rendered at 1280x960 and then scaled down.
   * @memberof Viewer.prototype
   *
   * @type {number}
   * @default 1.0
   */
  resolutionScale: {
    get: function() {
      return this._cesiumWidget.resolutionScale;
    },
    set: function(value) {
      this._cesiumWidget.resolutionScale = value;
    }
  },
  /**
   * Boolean flag indicating if the browser's recommended resolution is used.
   * If true, the browser's device pixel ratio is ignored and 1.0 is used instead,
   * effectively rendering based on CSS pixels instead of device pixels. This can improve
   * performance on less powerful devices that have high pixel density. When false, rendering
   * will be in device pixels. {@link Viewer#resolutionScale} will still take effect whether
   * this flag is true or false.
   * @memberof Viewer.prototype
   *
   * @type {boolean}
   * @default true
   */
  useBrowserRecommendedResolution: {
    get: function() {
      return this._cesiumWidget.useBrowserRecommendedResolution;
    },
    set: function(value) {
      this._cesiumWidget.useBrowserRecommendedResolution = value;
    }
  },
  /**
   * Gets or sets whether or not data sources can temporarily pause
   * animation in order to avoid showing an incomplete picture to the user.
   * For example, if asynchronous primitives are being processed in the
   * background, the clock will not advance until the geometry is ready.
   *
   * @memberof Viewer.prototype
   *
   * @type {boolean}
   */
  allowDataSourcesToSuspendAnimation: {
    get: function() {
      return this._cesiumWidget.allowDataSourcesToSuspendAnimation;
    },
    set: function(value) {
      this._cesiumWidget.allowDataSourcesToSuspendAnimation = value;
    }
  },
  /**
   * Gets or sets the Entity instance currently being tracked by the camera.
   * @memberof Viewer.prototype
   * @type {Entity | undefined}
   */
  trackedEntity: {
    get: function() {
      return this._cesiumWidget.trackedEntity;
    },
    set: function(value) {
      this._cesiumWidget.trackedEntity = value;
    }
  },
  /**
   * Gets or sets the object instance for which to display a selection indicator.
   *
   * If a user interactively picks a Cesium3DTilesFeature instance, then this property
   * will contain a transient Entity instance with a property named "feature" that is
   * the instance that was picked.
   * @memberof Viewer.prototype
   * @type {Entity | undefined}
   */
  selectedEntity: {
    get: function() {
      return this._selectedEntity;
    },
    set: function(value) {
      if (this._selectedEntity !== value) {
        this._selectedEntity = value;
        const selectionIndicatorViewModel = defined36(this._selectionIndicator) ? this._selectionIndicator.viewModel : void 0;
        if (defined36(value)) {
          if (defined36(selectionIndicatorViewModel)) {
            selectionIndicatorViewModel.animateAppear();
          }
        } else if (defined36(selectionIndicatorViewModel)) {
          selectionIndicatorViewModel.animateDepart();
        }
        this._selectedEntityChanged.raiseEvent(value);
      }
    }
  },
  /**
   * Gets the event that is raised when the selected entity changes.
   * @memberof Viewer.prototype
   * @type {Event}
   * @readonly
   */
  selectedEntityChanged: {
    get: function() {
      return this._selectedEntityChanged;
    }
  },
  /**
   * Gets the event that is raised when the tracked entity changes.
   * @memberof Viewer.prototype
   * @type {Event}
   * @readonly
   */
  trackedEntityChanged: {
    get: function() {
      return this._cesiumWidget.trackedEntityChanged;
    }
  },
  /**
   * Gets or sets the data source to track with the viewer's clock.
   * @memberof Viewer.prototype
   * @type {DataSource}
   */
  clockTrackedDataSource: {
    get: function() {
      return this._cesiumWidget.clockTrackedDataSource;
    },
    set: function(value) {
      if (this._cesiumWidget.clockTrackedDataSource !== value) {
        this._cesiumWidget.clockTrackedDataSource = value;
        linkTimelineToDataSourceClock(this._timeline, value);
      }
    }
  }
});
Viewer.prototype.extend = function(mixin, options) {
  if (!defined36(mixin)) {
    throw new DeveloperError29("mixin is required.");
  }
  mixin(this, options);
};
Viewer.prototype.resize = function() {
  const cesiumWidget = this._cesiumWidget;
  const container = this._container;
  const width = container.clientWidth;
  const height = container.clientHeight;
  const animationExists = defined36(this._animation);
  const timelineExists = defined36(this._timeline);
  cesiumWidget.resize();
  if (width === this._lastWidth && height === this._lastHeight) {
    return;
  }
  const panelMaxHeight = height - 125;
  const baseLayerPickerDropDown = this._baseLayerPickerDropDown;
  if (defined36(baseLayerPickerDropDown)) {
    baseLayerPickerDropDown.style.maxHeight = `${panelMaxHeight}px`;
  }
  if (defined36(this._geocoder)) {
    const geocoderSuggestions = this._geocoder.searchSuggestionsContainer;
    geocoderSuggestions.style.maxHeight = `${panelMaxHeight}px`;
  }
  if (defined36(this._infoBox)) {
    this._infoBox.viewModel.maxHeight = panelMaxHeight;
  }
  const timeline = this._timeline;
  let animationContainer;
  let animationWidth = 0;
  let creditLeft = 5;
  let creditBottom = 3;
  let creditRight = 0;
  if (animationExists && window.getComputedStyle(this._animation.container).visibility !== "hidden") {
    const lastWidth = this._lastWidth;
    animationContainer = this._animation.container;
    if (width > 900) {
      animationWidth = 169;
      if (lastWidth <= 900) {
        animationContainer.style.width = "169px";
        animationContainer.style.height = "112px";
        this._animation.resize();
      }
    } else if (width >= 600) {
      animationWidth = 136;
      if (lastWidth < 600 || lastWidth > 900) {
        animationContainer.style.width = "136px";
        animationContainer.style.height = "90px";
        this._animation.resize();
      }
    } else {
      animationWidth = 106;
      if (lastWidth > 600 || lastWidth === 0) {
        animationContainer.style.width = "106px";
        animationContainer.style.height = "70px";
        this._animation.resize();
      }
    }
    creditLeft = animationWidth + 5;
  }
  if (timelineExists && window.getComputedStyle(this._timeline.container).visibility !== "hidden") {
    const fullscreenButton = this._fullscreenButton;
    const vrButton = this._vrButton;
    const timelineContainer = timeline.container;
    const timelineStyle = timelineContainer.style;
    creditBottom = timelineContainer.clientHeight + 3;
    timelineStyle.left = `${animationWidth}px`;
    let pixels = 0;
    if (defined36(fullscreenButton)) {
      pixels += fullscreenButton.container.clientWidth;
    }
    if (defined36(vrButton)) {
      pixels += vrButton.container.clientWidth;
    }
    timelineStyle.right = `${pixels}px`;
    timeline.resize();
  }
  if (!timelineExists && defined36(this._fullscreenButton)) {
    creditRight = this._fullscreenButton.container.clientWidth;
  }
  this._bottomContainer.style.left = `${creditLeft}px`;
  this._bottomContainer.style.bottom = `${creditBottom}px`;
  this._bottomContainer.style.right = `${creditRight}px`;
  this._lastWidth = width;
  this._lastHeight = height;
};
Viewer.prototype.forceResize = function() {
  this._lastWidth = 0;
  this.resize();
};
Viewer.prototype.render = function() {
  this._cesiumWidget.render();
};
Viewer.prototype.isDestroyed = function() {
  return false;
};
Viewer.prototype.destroy = function() {
  if (defined36(this.screenSpaceEventHandler) && !this.screenSpaceEventHandler.isDestroyed()) {
    this.screenSpaceEventHandler.removeInputAction(
      ScreenSpaceEventType3.LEFT_CLICK
    );
    this.screenSpaceEventHandler.removeInputAction(
      ScreenSpaceEventType3.LEFT_DOUBLE_CLICK
    );
  }
  this._container.removeChild(this._element);
  this._element.removeChild(this._toolbar);
  this._eventHelper.removeAll();
  if (defined36(this._geocoder)) {
    this._geocoder = this._geocoder.destroy();
  }
  if (defined36(this._homeButton)) {
    this._homeButton = this._homeButton.destroy();
  }
  if (defined36(this._sceneModePicker)) {
    this._sceneModePicker = this._sceneModePicker.destroy();
  }
  if (defined36(this._projectionPicker)) {
    this._projectionPicker = this._projectionPicker.destroy();
  }
  if (defined36(this._baseLayerPicker)) {
    this._baseLayerPicker = this._baseLayerPicker.destroy();
  }
  if (defined36(this._animation)) {
    this._element.removeChild(this._animation.container);
    this._animation = this._animation.destroy();
  }
  if (defined36(this._timeline)) {
    this._timeline.removeEventListener(
      "settime",
      onTimelineScrubfunction,
      false
    );
    this._element.removeChild(this._timeline.container);
    this._timeline = this._timeline.destroy();
  }
  if (defined36(this._fullscreenButton)) {
    this._fullscreenSubscription.dispose();
    this._element.removeChild(this._fullscreenButton.container);
    this._fullscreenButton = this._fullscreenButton.destroy();
  }
  if (defined36(this._vrButton)) {
    this._vrSubscription.dispose();
    this._vrModeSubscription.dispose();
    this._element.removeChild(this._vrButton.container);
    this._vrButton = this._vrButton.destroy();
  }
  if (defined36(this._infoBox)) {
    this._element.removeChild(this._infoBox.container);
    this._infoBox = this._infoBox.destroy();
  }
  if (defined36(this._selectionIndicator)) {
    this._element.removeChild(this._selectionIndicator.container);
    this._selectionIndicator = this._selectionIndicator.destroy();
  }
  if (this._destroyClockViewModel) {
    this._clockViewModel = this._clockViewModel.destroy();
  }
  this._cesiumWidget = this._cesiumWidget.destroy();
  return destroyObject25(this);
};
Viewer.prototype._dataSourceAdded = function(dataSourceCollection, dataSource) {
  const entityCollection = dataSource.entities;
  entityCollection.collectionChanged.addEventListener(
    Viewer.prototype._onEntityCollectionChanged,
    this
  );
};
Viewer.prototype._dataSourceRemoved = function(dataSourceCollection, dataSource) {
  const entityCollection = dataSource.entities;
  entityCollection.collectionChanged.removeEventListener(
    Viewer.prototype._onEntityCollectionChanged,
    this
  );
  if (defined36(this.selectedEntity)) {
    if (entityCollection.getById(this.selectedEntity.id) === this.selectedEntity) {
      this.selectedEntity = void 0;
    }
  }
};
Viewer.prototype._updateCanAnimate = function(that) {
  return function(isUpdated) {
    that._clockViewModel.canAnimate = isUpdated;
  };
};
Viewer.prototype._onTick = function(clock) {
  const time = clock.currentTime;
  let position;
  let enableCamera = false;
  const selectedEntity = this.selectedEntity;
  const showSelection = defined36(selectedEntity) && this._enableInfoOrSelection;
  if (showSelection && selectedEntity.isShowing && selectedEntity.isAvailable(time)) {
    const state = this._cesiumWidget.dataSourceDisplay.getBoundingSphere(
      selectedEntity,
      true,
      boundingSphereScratch
    );
    if (state !== BoundingSphereState.FAILED) {
      position = boundingSphereScratch.center;
    } else if (defined36(selectedEntity.position)) {
      position = selectedEntity.position.getValue(time, position);
    }
    enableCamera = defined36(position);
  }
  const selectionIndicatorViewModel = defined36(this._selectionIndicator) ? this._selectionIndicator.viewModel : void 0;
  if (defined36(selectionIndicatorViewModel)) {
    selectionIndicatorViewModel.position = Cartesian32.clone(
      position,
      selectionIndicatorViewModel.position
    );
    selectionIndicatorViewModel.showSelection = showSelection && enableCamera;
    selectionIndicatorViewModel.update();
  }
  const infoBoxViewModel = defined36(this._infoBox) ? this._infoBox.viewModel : void 0;
  if (defined36(infoBoxViewModel)) {
    infoBoxViewModel.showInfo = showSelection;
    infoBoxViewModel.enableCamera = enableCamera;
    infoBoxViewModel.isCameraTracking = this.trackedEntity === this.selectedEntity;
    if (showSelection) {
      infoBoxViewModel.titleText = selectedEntity.name ?? selectedEntity.id;
      infoBoxViewModel.description = Property.getValueOrDefault(
        selectedEntity.description,
        time,
        ""
      );
    } else {
      infoBoxViewModel.titleText = "";
      infoBoxViewModel.description = "";
    }
  }
};
Viewer.prototype._onEntityCollectionChanged = function(collection, added, removed) {
  const length = removed.length;
  for (let i = 0; i < length; i++) {
    const removedObject = removed[i];
    if (this.selectedEntity === removedObject) {
      this.selectedEntity = void 0;
    }
  }
};
Viewer.prototype._onInfoBoxCameraClicked = function(infoBoxViewModel) {
  if (infoBoxViewModel.isCameraTracking && this.trackedEntity === this.selectedEntity) {
    this.trackedEntity = void 0;
  } else {
    const selectedEntity = this.selectedEntity;
    const position = selectedEntity.position;
    if (defined36(position)) {
      this.trackedEntity = this.selectedEntity;
    } else {
      this.zoomTo(this.selectedEntity);
    }
  }
};
Viewer.prototype._clearTrackedObject = function() {
  this.trackedEntity = void 0;
};
Viewer.prototype._onInfoBoxClockClicked = function(infoBoxViewModel) {
  this.selectedEntity = void 0;
};
Viewer.prototype._clearObjects = function() {
  this.trackedEntity = void 0;
  this.selectedEntity = void 0;
};
Viewer.prototype._onDataSourceChanged = function(dataSource) {
  if (this.clockTrackedDataSource === dataSource) {
    linkTimelineToDataSourceClock(this.timeline, dataSource);
  }
};
Viewer.prototype._onDataSourceAdded = function(dataSourceCollection, dataSource) {
  if (this._cesiumWidget._automaticallyTrackDataSourceClocks && dataSource === this.clockTrackedDataSource) {
    linkTimelineToDataSourceClock(this._timeline, dataSource);
  }
  const id = dataSource.entities.id;
  const removalFunc = this._eventHelper.add(
    dataSource.changedEvent,
    Viewer.prototype._onDataSourceChanged,
    this
  );
  this._dataSourceChangedListeners[id] = removalFunc;
};
Viewer.prototype._onDataSourceRemoved = function(dataSourceCollection, dataSource) {
  const id = dataSource.entities.id;
  this._dataSourceChangedListeners[id]();
  this._dataSourceChangedListeners[id] = void 0;
};
Viewer.prototype.zoomTo = function(target, offset) {
  return this._cesiumWidget.zoomTo(target, offset);
};
Viewer.prototype.flyTo = function(target, options) {
  return this._cesiumWidget.flyTo(target, options);
};
var Viewer_default = Viewer;

// packages/widgets/Source/Viewer/viewerCesium3DTilesInspectorMixin.js
import { Check as Check6 } from "@cesium/engine";
function viewerCesium3DTilesInspectorMixin(viewer) {
  Check6.typeOf.object("viewer", viewer);
  const container = document.createElement("div");
  container.className = "cesium-viewer-cesium3DTilesInspectorContainer";
  viewer.container.appendChild(container);
  const cesium3DTilesInspector = new Cesium3DTilesInspector_default(
    container,
    viewer.scene
  );
  Object.defineProperties(viewer, {
    cesium3DTilesInspector: {
      get: function() {
        return cesium3DTilesInspector;
      }
    }
  });
}
var viewerCesium3DTilesInspectorMixin_default = viewerCesium3DTilesInspectorMixin;

// packages/widgets/Source/Viewer/viewerCesiumInspectorMixin.js
import { defined as defined37, DeveloperError as DeveloperError30 } from "@cesium/engine";
function viewerCesiumInspectorMixin(viewer) {
  if (!defined37(viewer)) {
    throw new DeveloperError30("viewer is required.");
  }
  const cesiumInspectorContainer = document.createElement("div");
  cesiumInspectorContainer.className = "cesium-viewer-cesiumInspectorContainer";
  viewer.container.appendChild(cesiumInspectorContainer);
  const cesiumInspector = new CesiumInspector_default(
    cesiumInspectorContainer,
    viewer.scene
  );
  Object.defineProperties(viewer, {
    cesiumInspector: {
      get: function() {
        return cesiumInspector;
      }
    }
  });
}
var viewerCesiumInspectorMixin_default = viewerCesiumInspectorMixin;

// packages/widgets/Source/Viewer/viewerDragDropMixin.js
import {
  CzmlDataSource,
  Frozen as Frozen4,
  defined as defined38,
  DeveloperError as DeveloperError31,
  Event as Event5,
  GeoJsonDataSource,
  getElement as getElement20,
  GpxDataSource,
  KmlDataSource,
  wrapFunction
} from "@cesium/engine";
function viewerDragDropMixin(viewer, options) {
  if (!defined38(viewer)) {
    throw new DeveloperError31("viewer is required.");
  }
  if (viewer.hasOwnProperty("dropTarget")) {
    throw new DeveloperError31("dropTarget is already defined by another mixin.");
  }
  if (viewer.hasOwnProperty("dropEnabled")) {
    throw new DeveloperError31(
      "dropEnabled is already defined by another mixin."
    );
  }
  if (viewer.hasOwnProperty("dropError")) {
    throw new DeveloperError31("dropError is already defined by another mixin.");
  }
  if (viewer.hasOwnProperty("clearOnDrop")) {
    throw new DeveloperError31(
      "clearOnDrop is already defined by another mixin."
    );
  }
  if (viewer.hasOwnProperty("flyToOnDrop")) {
    throw new DeveloperError31(
      "flyToOnDrop is already defined by another mixin."
    );
  }
  options = options ?? Frozen4.EMPTY_OBJECT;
  let dropEnabled = true;
  let flyToOnDrop = options.flyToOnDrop ?? true;
  const dropError = new Event5();
  let clearOnDrop = options.clearOnDrop ?? true;
  let dropTarget = options.dropTarget ?? viewer.container;
  let clampToGround = options.clampToGround ?? true;
  let proxy = options.proxy;
  dropTarget = getElement20(dropTarget);
  Object.defineProperties(viewer, {
    /**
     * Gets or sets the element to serve as the drop target.
     * @memberof viewerDragDropMixin.prototype
     * @type {Element}
     */
    dropTarget: {
      //TODO See https://github.com/CesiumGS/cesium/issues/832
      get: function() {
        return dropTarget;
      },
      set: function(value) {
        if (!defined38(value)) {
          throw new DeveloperError31("value is required.");
        }
        unsubscribe(dropTarget, handleDrop);
        dropTarget = value;
        subscribe(dropTarget, handleDrop);
      }
    },
    /**
     * Gets or sets a value indicating if drag and drop support is enabled.
     * @memberof viewerDragDropMixin.prototype
     * @type {Element}
     */
    dropEnabled: {
      get: function() {
        return dropEnabled;
      },
      set: function(value) {
        if (value !== dropEnabled) {
          if (value) {
            subscribe(dropTarget, handleDrop);
          } else {
            unsubscribe(dropTarget, handleDrop);
          }
          dropEnabled = value;
        }
      }
    },
    /**
     * Gets the event that will be raised when an error is encountered during drop processing.
     * @memberof viewerDragDropMixin.prototype
     * @type {Event}
     */
    dropError: {
      get: function() {
        return dropError;
      }
    },
    /**
     * Gets or sets a value indicating if existing data sources should be cleared before adding the newly dropped sources.
     * @memberof viewerDragDropMixin.prototype
     * @type {boolean}
     */
    clearOnDrop: {
      get: function() {
        return clearOnDrop;
      },
      set: function(value) {
        clearOnDrop = value;
      }
    },
    /**
     * Gets or sets a value indicating if the camera should fly to the data source after it is loaded.
     * @memberof viewerDragDropMixin.prototype
     * @type {boolean}
     */
    flyToOnDrop: {
      get: function() {
        return flyToOnDrop;
      },
      set: function(value) {
        flyToOnDrop = value;
      }
    },
    /**
     * Gets or sets the proxy to be used for KML.
     * @memberof viewerDragDropMixin.prototype
     * @type {Proxy}
     */
    proxy: {
      get: function() {
        return proxy;
      },
      set: function(value) {
        proxy = value;
      }
    },
    /**
     * Gets or sets a value indicating if the datasources should be clamped to the ground
     * @memberof viewerDragDropMixin.prototype
     * @type {boolean}
     */
    clampToGround: {
      get: function() {
        return clampToGround;
      },
      set: function(value) {
        clampToGround = value;
      }
    }
  });
  function handleDrop(event) {
    stop(event);
    if (clearOnDrop) {
      viewer.entities.removeAll();
      viewer.dataSources.removeAll();
    }
    const files = event.dataTransfer.files;
    const length = files.length;
    for (let i = 0; i < length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = createOnLoadCallback(viewer, file, proxy, clampToGround);
      reader.onerror = createDropErrorCallback(viewer, file);
      reader.readAsText(file);
    }
  }
  subscribe(dropTarget, handleDrop);
  viewer.destroy = wrapFunction(viewer, viewer.destroy, function() {
    viewer.dropEnabled = false;
  });
  viewer._handleDrop = handleDrop;
}
function stop(event) {
  event.stopPropagation();
  event.preventDefault();
}
function unsubscribe(dropTarget, handleDrop) {
  const currentTarget = dropTarget;
  if (defined38(currentTarget)) {
    currentTarget.removeEventListener("drop", handleDrop, false);
    currentTarget.removeEventListener("dragenter", stop, false);
    currentTarget.removeEventListener("dragover", stop, false);
    currentTarget.removeEventListener("dragexit", stop, false);
  }
}
function subscribe(dropTarget, handleDrop) {
  dropTarget.addEventListener("drop", handleDrop, false);
  dropTarget.addEventListener("dragenter", stop, false);
  dropTarget.addEventListener("dragover", stop, false);
  dropTarget.addEventListener("dragexit", stop, false);
}
function createOnLoadCallback(viewer, file, proxy, clampToGround) {
  const scene = viewer.scene;
  return function(evt) {
    const fileName = file.name;
    try {
      let loadPromise;
      if (/\.czml$/i.test(fileName)) {
        loadPromise = CzmlDataSource.load(JSON.parse(evt.target.result), {
          sourceUri: fileName
        });
      } else if (/\.geojson$/i.test(fileName) || /\.json$/i.test(fileName) || /\.topojson$/i.test(fileName)) {
        loadPromise = GeoJsonDataSource.load(JSON.parse(evt.target.result), {
          sourceUri: fileName,
          clampToGround
        });
      } else if (/\.(kml|kmz)$/i.test(fileName)) {
        loadPromise = KmlDataSource.load(file, {
          sourceUri: fileName,
          proxy,
          camera: scene.camera,
          canvas: scene.canvas,
          clampToGround,
          screenOverlayContainer: viewer.container
        });
      } else if (/\.gpx$/i.test(fileName)) {
        loadPromise = GpxDataSource.load(file, {
          sourceUri: fileName,
          proxy
        });
      } else {
        viewer.dropError.raiseEvent(
          viewer,
          fileName,
          `Unrecognized file: ${fileName}`
        );
        return;
      }
      if (defined38(loadPromise)) {
        viewer.dataSources.add(loadPromise).then(function(dataSource) {
          if (viewer.flyToOnDrop) {
            viewer.flyTo(dataSource);
          }
        }).catch(function(error) {
          viewer.dropError.raiseEvent(viewer, fileName, error);
        });
      }
    } catch (error) {
      viewer.dropError.raiseEvent(viewer, fileName, error);
    }
  };
}
function createDropErrorCallback(viewer, file) {
  return function(evt) {
    viewer.dropError.raiseEvent(viewer, file.name, evt.target.error);
  };
}
var viewerDragDropMixin_default = viewerDragDropMixin;

// packages/widgets/Source/Viewer/viewerPerformanceWatchdogMixin.js
import { Frozen as Frozen5, defined as defined39, DeveloperError as DeveloperError32 } from "@cesium/engine";
function viewerPerformanceWatchdogMixin(viewer, options) {
  if (!defined39(viewer)) {
    throw new DeveloperError32("viewer is required.");
  }
  options = options ?? Frozen5.EMPTY_OBJECT;
  const performanceWatchdog = new PerformanceWatchdog_default({
    scene: viewer.scene,
    container: viewer.bottomContainer,
    lowFrameRateMessage: options.lowFrameRateMessage
  });
  Object.defineProperties(viewer, {
    performanceWatchdog: {
      get: function() {
        return performanceWatchdog;
      }
    }
  });
}
var viewerPerformanceWatchdogMixin_default = viewerPerformanceWatchdogMixin;

// packages/widgets/Source/Viewer/viewerVoxelInspectorMixin.js
import { Check as Check9 } from "@cesium/engine";

// packages/widgets/Source/VoxelInspector/VoxelInspector.js
import {
  Math as CesiumMath4,
  Check as Check8,
  destroyObject as destroyObject27,
  getElement as getElement21
} from "@cesium/engine";

// packages/widgets/Source/VoxelInspector/VoxelInspectorViewModel.js
import {
  Cartesian3 as Cartesian33,
  Check as Check7,
  defined as defined40,
  destroyObject as destroyObject26,
  HeadingPitchRoll,
  Math as CesiumMath3,
  Matrix3,
  Matrix4 as Matrix42,
  CustomShader,
  VoxelShapeType
} from "@cesium/engine";
function formatShaderString(str) {
  const lines = str.split("\n");
  let firstLineIdx;
  for (firstLineIdx = 0; firstLineIdx < lines.length; firstLineIdx++) {
    if (lines[firstLineIdx].match(/\S/)) {
      break;
    }
  }
  if (firstLineIdx === lines.length) {
    return "";
  }
  let finalStr = "";
  const pattern = /^\s*/;
  const firstLine = lines[firstLineIdx];
  const spacesInFrontOfFirstLine = firstLine.match(pattern)[0].length;
  for (let i = firstLineIdx; i < lines.length; i++) {
    let line = lines[i];
    const spacesInFront = line.match(pattern)[0].length;
    if (spacesInFront >= spacesInFrontOfFirstLine) {
      line = line.slice(spacesInFrontOfFirstLine);
    }
    finalStr += `${line}
`;
  }
  return finalStr;
}
function VoxelInspectorViewModel(scene) {
  Check7.typeOf.object("scene", scene);
  this._scene = scene;
  this._voxelPrimitive = void 0;
  this._customShaderCompilationRemoveCallback = void 0;
  this._definedProperties = [];
  this._getPrimitiveFunctions = [];
  this._modelMatrixReady = false;
  const that = this;
  function addProperty(options) {
    const { name, initialValue } = options;
    that._definedProperties.push(name);
    let setPrimitiveFunction = options.setPrimitiveFunction;
    if (setPrimitiveFunction === true) {
      setPrimitiveFunction = function(value) {
        that._voxelPrimitive[name] = value;
      };
    }
    let getPrimitiveFunction = options.getPrimitiveFunction;
    if (getPrimitiveFunction === true) {
      getPrimitiveFunction = function() {
        that[name] = that._voxelPrimitive[name];
      };
    }
    if (defined40(getPrimitiveFunction)) {
      that._getPrimitiveFunctions.push(getPrimitiveFunction);
    }
    const knock = knockout_default.observable();
    knockout_default.defineProperty(that, name, {
      get: function() {
        return knock();
      },
      set: function(value) {
        if (typeof initialValue === "number" && typeof value === "string") {
          value = Number(value);
          if (isNaN(value)) {
            value = initialValue;
          }
        }
        if (typeof initialValue === "boolean" && typeof value === "number") {
          value = value === 1 ? true : false;
        }
        knock(value);
        if (defined40(setPrimitiveFunction) && defined40(that._voxelPrimitive)) {
          setPrimitiveFunction(value);
          scene.requestRender();
        }
      }
    });
    that[name] = initialValue;
    return knock;
  }
  function getBoundSetter(boundKey, component) {
    return function(value) {
      const bound = that._voxelPrimitive[boundKey].clone();
      bound[component] = value;
      that._voxelPrimitive[boundKey] = bound;
    };
  }
  addProperty({
    name: "inspectorVisible",
    initialValue: true
  });
  addProperty({
    name: "displayVisible",
    initialValue: false
  });
  addProperty({
    name: "transformVisible",
    initialValue: false
  });
  addProperty({
    name: "boundsVisible",
    initialValue: false
  });
  addProperty({
    name: "clippingVisible",
    initialValue: false
  });
  addProperty({
    name: "shaderVisible",
    initialValue: false
  });
  addProperty({
    name: "shaderString",
    initialValue: "",
    getPrimitiveFunction: function() {
      const shaderString = that._voxelPrimitive.customShader.fragmentShaderText;
      that.shaderString = formatShaderString(shaderString);
    }
  });
  addProperty({
    name: "shaderCompilationMessage",
    initialValue: ""
  });
  addProperty({
    name: "shaderCompilationSuccess",
    initialValue: true
  });
  addProperty({
    name: "depthTest",
    initialValue: false,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "show",
    initialValue: true,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "disableUpdate",
    initialValue: false,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "debugDraw",
    initialValue: false,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "jitter",
    initialValue: true,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "nearestSampling",
    initialValue: true,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "screenSpaceError",
    initialValue: 4,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "stepSize",
    initialValue: 1,
    setPrimitiveFunction: true,
    getPrimitiveFunction: true
  });
  addProperty({
    name: "shapeIsBox",
    getPrimitiveFunction: function() {
      const shapeType = that._voxelPrimitive.shape;
      that.shapeIsBox = shapeType === VoxelShapeType.BOX;
    }
  });
  addProperty({
    name: "shapeIsEllipsoid",
    getPrimitiveFunction: function() {
      const shapeType = that._voxelPrimitive.shape;
      that.shapeIsEllipsoid = shapeType === VoxelShapeType.ELLIPSOID;
    }
  });
  addProperty({
    name: "shapeIsCylinder",
    getPrimitiveFunction: function() {
      const shapeType = that._voxelPrimitive.shape;
      that.shapeIsCylinder = shapeType === VoxelShapeType.CYLINDER;
    }
  });
  addProperty({
    name: "clippingBoxMaxXMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingBoxMaxXMin = that._voxelPrimitive.minBounds.x;
    }
  });
  addProperty({
    name: "clippingBoxMaxXMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingBoxMaxXMax = that._voxelPrimitive.maxBounds.x;
    }
  });
  addProperty({
    name: "clippingBoxMaxX",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "x"),
    getPrimitiveFunction: function() {
      that.clippingBoxMaxX = that._voxelPrimitive.maxClippingBounds.x;
    }
  });
  addProperty({
    name: "clippingBoxMinXMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingBoxMinXMin = that._voxelPrimitive.minBounds.x;
    }
  });
  addProperty({
    name: "clippingBoxMinXMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingBoxMinXMax = that._voxelPrimitive.maxBounds.x;
    }
  });
  addProperty({
    name: "clippingBoxMinX",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "x"),
    getPrimitiveFunction: function() {
      that.clippingBoxMinX = that._voxelPrimitive.minClippingBounds.x;
    }
  });
  addProperty({
    name: "clippingBoxMaxYMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingBoxMaxYMin = that._voxelPrimitive.minBounds.y;
    }
  });
  addProperty({
    name: "clippingBoxMaxYMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingBoxMaxYMax = that._voxelPrimitive.maxBounds.y;
    }
  });
  addProperty({
    name: "clippingBoxMaxY",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "y"),
    getPrimitiveFunction: function() {
      that.clippingBoxMaxY = that._voxelPrimitive.maxClippingBounds.y;
    }
  });
  addProperty({
    name: "clippingBoxMinYMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingBoxMinYMin = that._voxelPrimitive.minBounds.y;
    }
  });
  addProperty({
    name: "clippingBoxMinYMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingBoxMinYMax = that._voxelPrimitive.maxBounds.y;
    }
  });
  addProperty({
    name: "clippingBoxMinY",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "y"),
    getPrimitiveFunction: function() {
      that.clippingBoxMinY = that._voxelPrimitive.minClippingBounds.y;
    }
  });
  addProperty({
    name: "clippingBoxMaxZMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingBoxMaxZMin = that._voxelPrimitive.minBounds.z;
    }
  });
  addProperty({
    name: "clippingBoxMaxZMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingBoxMaxZMax = that._voxelPrimitive.maxBounds.z;
    }
  });
  addProperty({
    name: "clippingBoxMaxZ",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "z"),
    getPrimitiveFunction: function() {
      that.clippingBoxMaxZ = that._voxelPrimitive.maxClippingBounds.z;
    }
  });
  addProperty({
    name: "clippingBoxMinZMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingBoxMinZMin = that._voxelPrimitive.minBounds.z;
    }
  });
  addProperty({
    name: "clippingBoxMinZMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingBoxMinZMax = that._voxelPrimitive.maxBounds.z;
    }
  });
  addProperty({
    name: "clippingBoxMinZ",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "z"),
    getPrimitiveFunction: function() {
      that.clippingBoxMinZ = that._voxelPrimitive.minClippingBounds.z;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxLongitudeMin",
    initialValue: -CesiumMath3.PI,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxLongitudeMin = that._voxelPrimitive.minBounds.x;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxLongitudeMax",
    initialValue: CesiumMath3.PI,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxLongitudeMax = that._voxelPrimitive.maxBounds.x;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxLongitude",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "x"),
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxLongitude = that._voxelPrimitive.maxClippingBounds.x;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinLongitudeMin",
    initialValue: -CesiumMath3.PI,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinLongitudeMin = that._voxelPrimitive.minBounds.x;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinLongitudeMax",
    initialValue: CesiumMath3.PI,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinLongitudeMax = that._voxelPrimitive.maxBounds.x;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinLongitude",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "x"),
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinLongitude = that._voxelPrimitive.minClippingBounds.x;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxLatitudeMin",
    initialValue: -CesiumMath3.PI_OVER_TWO,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxLatitudeMin = that._voxelPrimitive.minBounds.y;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxLatitudeMax",
    initialValue: CesiumMath3.PI_OVER_TWO,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxLatitudeMax = that._voxelPrimitive.maxBounds.y;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxLatitude",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "y"),
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxLatitude = that._voxelPrimitive.maxClippingBounds.y;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinLatitudeMin",
    initialValue: -CesiumMath3.PI_OVER_TWO,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinLatitudeMin = that._voxelPrimitive.minBounds.y;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinLatitudeMax",
    initialValue: CesiumMath3.PI_OVER_TWO,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinLatitudeMax = that._voxelPrimitive.maxBounds.y;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinLatitude",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "y"),
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinLatitude = that._voxelPrimitive.minClippingBounds.y;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxHeightMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxHeightMin = that._voxelPrimitive.minBounds.z;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxHeightMax",
    initialValue: 1e5,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxHeightMax = that._voxelPrimitive.maxBounds.z;
    }
  });
  addProperty({
    name: "clippingEllipsoidMaxHeight",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "z"),
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMaxHeight = that._voxelPrimitive.maxClippingBounds.z;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinHeightMin",
    initialValue: -1e5,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinHeightMin = that._voxelPrimitive.minBounds.z;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinHeightMax",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinHeightMax = that._voxelPrimitive.maxBounds.z;
    }
  });
  addProperty({
    name: "clippingEllipsoidMinHeight",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "z"),
    getPrimitiveFunction: function() {
      that.clippingEllipsoidMinHeight = that._voxelPrimitive.minClippingBounds.z;
    }
  });
  addProperty({
    name: "clippingCylinderMaxRadiusMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxRadiusMin = that._voxelPrimitive.minBounds.x;
    }
  });
  addProperty({
    name: "clippingCylinderMaxRadiusMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxRadiusMax = that._voxelPrimitive.maxBounds.x;
    }
  });
  addProperty({
    name: "clippingCylinderMaxRadius",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "x"),
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxRadius = that._voxelPrimitive.maxClippingBounds.x;
    }
  });
  addProperty({
    name: "clippingCylinderMinRadiusMin",
    initialValue: 0,
    getPrimitiveFunction: function() {
      that.clippingCylinderMinRadiusMin = that._voxelPrimitive.minBounds.x;
    }
  });
  addProperty({
    name: "clippingCylinderMinRadiusMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingCylinderMinRadiusMax = that._voxelPrimitive.maxBounds.x;
    }
  });
  addProperty({
    name: "clippingCylinderMinRadius",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "x"),
    getPrimitiveFunction: function() {
      that.clippingCylinderMinRadius = that._voxelPrimitive.minClippingBounds.x;
    }
  });
  addProperty({
    name: "clippingCylinderMaxAngleMin",
    initialValue: -CesiumMath3.PI,
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxAngleMin = that._voxelPrimitive.minBounds.y;
    }
  });
  addProperty({
    name: "clippingCylinderMaxAngleMax",
    initialValue: CesiumMath3.PI,
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxAngleMax = that._voxelPrimitive.maxBounds.y;
    }
  });
  addProperty({
    name: "clippingCylinderMaxAngle",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "y"),
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxAngle = that._voxelPrimitive.maxClippingBounds.y;
    }
  });
  addProperty({
    name: "clippingCylinderMinAngleMin",
    initialValue: -CesiumMath3.PI
  });
  addProperty({
    name: "clippingCylinderMinAngleMax",
    initialValue: CesiumMath3.PI
  });
  addProperty({
    name: "clippingCylinderMinAngle",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "y"),
    getPrimitiveFunction: function() {
      that.clippingCylinderMinAngle = that._voxelPrimitive.minClippingBounds.y;
    }
  });
  addProperty({
    name: "clippingCylinderMaxHeightMin",
    initialValue: -1,
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxHeightMin = that._voxelPrimitive.minBounds.z;
    }
  });
  addProperty({
    name: "clippingCylinderMaxHeightMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxHeightMax = that._voxelPrimitive.maxBounds.z;
    }
  });
  addProperty({
    name: "clippingCylinderMaxHeight",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("maxClippingBounds", "z"),
    getPrimitiveFunction: function() {
      that.clippingCylinderMaxHeight = that._voxelPrimitive.maxClippingBounds.z;
    }
  });
  addProperty({
    name: "clippingCylinderMinHeightMin",
    initialValue: -1,
    getPrimitiveFunction: function() {
      that.clippingCylinderMinHeightMin = that._voxelPrimitive.minBounds.z;
    }
  });
  addProperty({
    name: "clippingCylinderMinHeightMax",
    initialValue: 1,
    getPrimitiveFunction: function() {
      that.clippingCylinderMinHeightMax = that._voxelPrimitive.maxBounds.z;
    }
  });
  addProperty({
    name: "clippingCylinderMinHeight",
    initialValue: 0,
    setPrimitiveFunction: getBoundSetter("minClippingBounds", "z"),
    getPrimitiveFunction: function() {
      that.clippingCylinderMinHeight = that._voxelPrimitive.minClippingBounds.z;
    }
  });
  addProperty({
    name: "translationX",
    initialValue: 0,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    },
    getPrimitiveFunction: function() {
      that.translationX = Matrix42.getTranslation(
        that._voxelPrimitive.modelMatrix,
        new Cartesian33()
      ).x;
    }
  });
  addProperty({
    name: "translationY",
    initialValue: 0,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    },
    getPrimitiveFunction: function() {
      that.translationY = Matrix42.getTranslation(
        that._voxelPrimitive.modelMatrix,
        new Cartesian33()
      ).y;
    }
  });
  addProperty({
    name: "translationZ",
    initialValue: 0,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    },
    getPrimitiveFunction: function() {
      that.translationZ = Matrix42.getTranslation(
        that._voxelPrimitive.modelMatrix,
        new Cartesian33()
      ).z;
    }
  });
  addProperty({
    name: "scaleX",
    initialValue: 1,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    },
    getPrimitiveFunction: function() {
      that.scaleX = Matrix42.getScale(
        that._voxelPrimitive.modelMatrix,
        new Cartesian33()
      ).x;
    }
  });
  addProperty({
    name: "scaleY",
    initialValue: 1,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    },
    getPrimitiveFunction: function() {
      that.scaleY = Matrix42.getScale(
        that._voxelPrimitive.modelMatrix,
        new Cartesian33()
      ).y;
    }
  });
  addProperty({
    name: "scaleZ",
    initialValue: 1,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    },
    getPrimitiveFunction: function() {
      that.scaleZ = Matrix42.getScale(
        that._voxelPrimitive.modelMatrix,
        new Cartesian33()
      ).z;
    }
  });
  addProperty({
    name: "angleX",
    initialValue: 0,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    }
  });
  addProperty({
    name: "angleY",
    initialValue: 0,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    }
  });
  addProperty({
    name: "angleZ",
    initialValue: 0,
    setPrimitiveFunction: function() {
      if (that._modelMatrixReady) {
        setModelMatrix(that);
      }
    }
  });
}
var scratchTranslation = new Cartesian33();
var scratchScale = new Cartesian33();
var scratchHeadingPitchRoll = new HeadingPitchRoll();
var scratchRotation = new Matrix3();
function setModelMatrix(viewModel) {
  const translation = Cartesian33.fromElements(
    viewModel.translationX,
    viewModel.translationY,
    viewModel.translationZ,
    scratchTranslation
  );
  const scale = Cartesian33.fromElements(
    viewModel.scaleX,
    viewModel.scaleY,
    viewModel.scaleZ,
    scratchScale
  );
  const hpr = scratchHeadingPitchRoll;
  hpr.heading = viewModel.angleX;
  hpr.pitch = viewModel.angleY;
  hpr.roll = viewModel.angleZ;
  const rotation = Matrix3.fromHeadingPitchRoll(hpr, scratchRotation);
  const rotationScale = Matrix3.multiplyByScale(rotation, scale, rotation);
  viewModel._voxelPrimitive.modelMatrix = Matrix42.fromRotationTranslation(
    rotationScale,
    translation,
    viewModel._voxelPrimitive.modelMatrix
  );
}
Object.defineProperties(VoxelInspectorViewModel.prototype, {
  /**
   * Gets the scene
   * @memberof VoxelInspectorViewModel.prototype
   * @type {Scene}
   * @readonly
   */
  scene: {
    get: function() {
      return this._scene;
    }
  },
  /**
   * Gets or sets the primitive of the view model.
   * @memberof VoxelInspectorViewModel.prototype
   * @type {VoxelPrimitive}
   */
  voxelPrimitive: {
    get: function() {
      return this._voxelPrimitive;
    },
    set: function(voxelPrimitive) {
      if (defined40(this._customShaderCompilationRemoveCallback)) {
        this._customShaderCompilationRemoveCallback();
      }
      if (!defined40(voxelPrimitive)) {
        return;
      }
      this._voxelPrimitive = voxelPrimitive;
      const that = this;
      that._customShaderCompilationRemoveCallback = that._voxelPrimitive.customShaderCompilationEvent.addEventListener(
        function(error) {
          const shaderString = that._voxelPrimitive.customShader.fragmentShaderText;
          that.shaderString = formatShaderString(shaderString);
          if (!defined40(error)) {
            that.shaderCompilationMessage = "Shader compiled successfully!";
            that.shaderCompilationSuccess = true;
          } else {
            that.shaderCompilationMessage = error.message;
            that.shaderCompilationSuccess = false;
          }
        }
      );
      that._modelMatrixReady = false;
      for (let i = 0; i < that._getPrimitiveFunctions.length; i++) {
        that._getPrimitiveFunctions[i]();
      }
      that._modelMatrixReady = true;
      setModelMatrix(that);
    }
  }
});
VoxelInspectorViewModel.prototype.toggleInspector = function() {
  this.inspectorVisible = !this.inspectorVisible;
};
VoxelInspectorViewModel.prototype.toggleDisplay = function() {
  this.displayVisible = !this.displayVisible;
};
VoxelInspectorViewModel.prototype.toggleTransform = function() {
  this.transformVisible = !this.transformVisible;
};
VoxelInspectorViewModel.prototype.toggleBounds = function() {
  this.boundsVisible = !this.boundsVisible;
};
VoxelInspectorViewModel.prototype.toggleClipping = function() {
  this.clippingVisible = !this.clippingVisible;
};
VoxelInspectorViewModel.prototype.toggleShader = function() {
  this.shaderVisible = !this.shaderVisible;
};
VoxelInspectorViewModel.prototype.compileShader = function() {
  if (defined40(this._voxelPrimitive)) {
    this._voxelPrimitive.customShader = new CustomShader({
      fragmentShaderText: this.shaderString,
      uniforms: this._voxelPrimitive.customShader.uniforms
    });
  }
};
VoxelInspectorViewModel.prototype.shaderEditorKeyPress = function(sender, event) {
  if (event.keyCode === 9) {
    event.preventDefault();
    const textArea = event.target;
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    let newEnd = end;
    const selected = textArea.value.slice(start, end);
    const lines = selected.split("\n");
    const length = lines.length;
    let i;
    if (!event.shiftKey) {
      for (i = 0; i < length; ++i) {
        lines[i] = `  ${lines[i]}`;
        newEnd += 2;
      }
    } else {
      for (i = 0; i < length; ++i) {
        if (lines[i][0] === " ") {
          if (lines[i][1] === " ") {
            lines[i] = lines[i].substr(2);
            newEnd -= 2;
          } else {
            lines[i] = lines[i].substr(1);
            newEnd -= 1;
          }
        }
      }
    }
    const newText = lines.join("\n");
    textArea.value = textArea.value.slice(0, start) + newText + textArea.value.slice(end);
    textArea.selectionStart = start !== end ? start : newEnd;
    textArea.selectionEnd = newEnd;
  } else if (event.ctrlKey && (event.keyCode === 10 || event.keyCode === 13)) {
    this.compileShader();
  }
  return true;
};
VoxelInspectorViewModel.prototype.isDestroyed = function() {
  return false;
};
VoxelInspectorViewModel.prototype.destroy = function() {
  const that = this;
  this._definedProperties.forEach(function(property) {
    knockout_default.getObservable(that, property).dispose();
  });
  return destroyObject26(this);
};
var VoxelInspectorViewModel_default = VoxelInspectorViewModel;

// packages/widgets/Source/VoxelInspector/VoxelInspector.js
function VoxelInspector(container, scene) {
  Check8.defined("container", container);
  Check8.typeOf.object("scene", scene);
  container = getElement21(container);
  const element = document.createElement("div");
  const viewModel = new VoxelInspectorViewModel_default(scene);
  this._viewModel = viewModel;
  this._container = container;
  this._element = element;
  const text = document.createElement("div");
  text.textContent = "Voxel Inspector";
  text.className = "cesium-cesiumInspector-button";
  text.setAttribute("data-bind", "click: toggleInspector");
  element.appendChild(text);
  element.className = "cesium-cesiumInspector cesium-VoxelInspector";
  element.setAttribute(
    "data-bind",
    'css: { "cesium-cesiumInspector-visible" : inspectorVisible, "cesium-cesiumInspector-hidden" : !inspectorVisible}'
  );
  container.appendChild(element);
  const panel = document.createElement("div");
  panel.className = "cesium-cesiumInspector-dropDown";
  element.appendChild(panel);
  const { createSection, createCheckbox, createRangeInput, createButton } = InspectorShared_default;
  const displayPanelContents = createSection(
    panel,
    "Display",
    "displayVisible",
    "toggleDisplay"
  );
  const transformPanelContents = createSection(
    panel,
    "Transform",
    "transformVisible",
    "toggleTransform"
  );
  const clippingPanelContents = createSection(
    panel,
    "Clipping",
    "clippingVisible",
    "toggleClipping"
  );
  const shaderPanelContents = createSection(
    panel,
    "Shader",
    "shaderVisible",
    "toggleShader"
  );
  displayPanelContents.appendChild(createCheckbox("Depth Test", "depthTest"));
  displayPanelContents.appendChild(createCheckbox("Show", "show"));
  displayPanelContents.appendChild(
    createCheckbox("Disable Update", "disableUpdate")
  );
  displayPanelContents.appendChild(createCheckbox("Debug Draw", "debugDraw"));
  displayPanelContents.appendChild(createCheckbox("Jitter", "jitter"));
  displayPanelContents.appendChild(
    createCheckbox("Nearest Sampling", "nearestSampling")
  );
  displayPanelContents.appendChild(
    createRangeInput("Screen Space Error", "screenSpaceError", 0, 128)
  );
  displayPanelContents.appendChild(
    createRangeInput("Step Size", "stepSize", 0, 2)
  );
  const maxTrans = 10;
  const maxScale = 10;
  const maxAngle = CesiumMath4.PI;
  transformPanelContents.appendChild(
    createRangeInput("Translation X", "translationX", -maxTrans, +maxTrans)
  );
  transformPanelContents.appendChild(
    createRangeInput("Translation Y", "translationY", -maxTrans, +maxTrans)
  );
  transformPanelContents.appendChild(
    createRangeInput("Translation Z", "translationZ", -maxTrans, +maxTrans)
  );
  transformPanelContents.appendChild(
    createRangeInput("Scale X", "scaleX", 0, +maxScale)
  );
  transformPanelContents.appendChild(
    createRangeInput("Scale Y", "scaleY", 0, +maxScale)
  );
  transformPanelContents.appendChild(
    createRangeInput("Scale Z", "scaleZ", 0, +maxScale)
  );
  transformPanelContents.appendChild(
    createRangeInput("Heading", "angleX", -maxAngle, +maxAngle)
  );
  transformPanelContents.appendChild(
    createRangeInput("Pitch", "angleY", -maxAngle, +maxAngle)
  );
  transformPanelContents.appendChild(
    createRangeInput("Roll", "angleZ", -maxAngle, +maxAngle)
  );
  makeCoordinateRangeWithDynamicMinMax(
    "Max X",
    "Min X",
    "Max Y",
    "Min Y",
    "Max Z",
    "Min Z",
    "clippingBoxMaxX",
    "clippingBoxMinX",
    "clippingBoxMaxY",
    "clippingBoxMinY",
    "clippingBoxMaxZ",
    "clippingBoxMinZ",
    "shapeIsBox",
    clippingPanelContents
  );
  makeCoordinateRangeWithDynamicMinMax(
    "Max Longitude",
    "Min Longitude",
    "Max Latitude",
    "Min Latitude",
    "Max Height",
    "Min Height",
    "clippingEllipsoidMaxLongitude",
    "clippingEllipsoidMinLongitude",
    "clippingEllipsoidMaxLatitude",
    "clippingEllipsoidMinLatitude",
    "clippingEllipsoidMaxHeight",
    "clippingEllipsoidMinHeight",
    "shapeIsEllipsoid",
    clippingPanelContents
  );
  makeCoordinateRangeWithDynamicMinMax(
    "Max Radius",
    "Min Radius",
    "Max Angle",
    "Min Angle",
    "Max Height",
    "Min Height",
    "clippingCylinderMaxRadius",
    "clippingCylinderMinRadius",
    "clippingCylinderMaxAngle",
    "clippingCylinderMinAngle",
    "clippingCylinderMaxHeight",
    "clippingCylinderMinHeight",
    "shapeIsCylinder",
    clippingPanelContents
  );
  const shaderPanelEditor = document.createElement("div");
  shaderPanelContents.appendChild(shaderPanelEditor);
  const shaderEditor = document.createElement("textarea");
  shaderEditor.setAttribute(
    "data-bind",
    "textInput: shaderString, event: { keydown: shaderEditorKeyPress }"
  );
  shaderPanelEditor.className = "cesium-cesiumInspector-styleEditor";
  shaderPanelEditor.appendChild(shaderEditor);
  const compileShaderButton = createButton(
    "Compile (Ctrl+Enter)",
    "compileShader"
  );
  shaderPanelEditor.appendChild(compileShaderButton);
  const compilationText = document.createElement("label");
  compilationText.style.display = "block";
  compilationText.setAttribute(
    "data-bind",
    "text: shaderCompilationMessage, style: {color: shaderCompilationSuccess ? 'green' : 'red'}"
  );
  shaderPanelEditor.appendChild(compilationText);
  knockout_default.applyBindings(viewModel, element);
}
Object.defineProperties(VoxelInspector.prototype, {
  /**
   * Gets the parent container.
   * @memberof VoxelInspector.prototype
   *
   * @type {Element}
   */
  container: {
    get: function() {
      return this._container;
    }
  },
  /**
   * Gets the view model.
   * @memberof VoxelInspector.prototype
   *
   * @type {VoxelInspectorViewModel}
   */
  viewModel: {
    get: function() {
      return this._viewModel;
    }
  }
});
VoxelInspector.prototype.isDestroyed = function() {
  return false;
};
VoxelInspector.prototype.destroy = function() {
  knockout_default.cleanNode(this._element);
  this._container.removeChild(this._element);
  this.viewModel.destroy();
  return destroyObject27(this);
};
function makeCoordinateRangeWithDynamicMinMax(maxXTitle, minXTitle, maxYTitle, minYTitle, maxZTitle, minZTitle, maxXVar, minXVar, maxYVar, minYVar, maxZVar, minZVar, allowedShape, parentContainer) {
  const createRangeInput = InspectorShared_default.createRangeInputWithDynamicMinMax;
  const boundsElement = parentContainer.appendChild(
    document.createElement("div")
  );
  boundsElement.setAttribute("data-bind", `if: ${allowedShape}`);
  boundsElement.appendChild(createRangeInput(maxXTitle, maxXVar));
  boundsElement.appendChild(createRangeInput(minXTitle, minXVar));
  boundsElement.appendChild(createRangeInput(maxYTitle, maxYVar));
  boundsElement.appendChild(createRangeInput(minYTitle, minYVar));
  boundsElement.appendChild(createRangeInput(maxZTitle, maxZVar));
  boundsElement.appendChild(createRangeInput(minZTitle, minZVar));
}
var VoxelInspector_default = VoxelInspector;

// packages/widgets/Source/Viewer/viewerVoxelInspectorMixin.js
function viewerVoxelInspectorMixin(viewer) {
  Check9.typeOf.object("viewer", viewer);
  const container = document.createElement("div");
  container.className = "cesium-viewer-voxelInspectorContainer";
  viewer.container.appendChild(container);
  const voxelInspector = new VoxelInspector_default(container, viewer.scene);
  Object.defineProperties(viewer, {
    voxelInspector: {
      get: function() {
        return voxelInspector;
      }
    }
  });
}
var viewerVoxelInspectorMixin_default = viewerVoxelInspectorMixin;

// packages/widgets/index.js
globalThis.CESIUM_VERSION = "1.136.0";
export {
  Animation_default as Animation,
  AnimationViewModel_default as AnimationViewModel,
  BaseLayerPicker_default as BaseLayerPicker,
  BaseLayerPickerViewModel_default as BaseLayerPickerViewModel,
  Cesium3DTilesInspector_default as Cesium3DTilesInspector,
  Cesium3DTilesInspectorViewModel_default as Cesium3DTilesInspectorViewModel,
  CesiumInspector_default as CesiumInspector,
  CesiumInspectorViewModel_default as CesiumInspectorViewModel,
  ClockViewModel_default as ClockViewModel,
  Command_default as Command,
  FullscreenButton_default as FullscreenButton,
  FullscreenButtonViewModel_default as FullscreenButtonViewModel,
  Geocoder_default as Geocoder,
  GeocoderViewModel_default as GeocoderViewModel,
  HomeButton_default as HomeButton,
  HomeButtonViewModel_default as HomeButtonViewModel,
  I3SBuildingSceneLayerExplorer_default as I3SBuildingSceneLayerExplorer,
  I3SBuildingSceneLayerExplorerViewModel_default as I3SBuildingSceneLayerExplorerViewModel,
  InfoBox_default as InfoBox,
  InfoBoxViewModel_default as InfoBoxViewModel,
  InspectorShared_default as InspectorShared,
  NavigationHelpButton_default as NavigationHelpButton,
  NavigationHelpButtonViewModel_default as NavigationHelpButtonViewModel,
  PerformanceWatchdog_default as PerformanceWatchdog,
  PerformanceWatchdogViewModel_default as PerformanceWatchdogViewModel,
  ProjectionPicker_default as ProjectionPicker,
  ProjectionPickerViewModel_default as ProjectionPickerViewModel,
  ProviderViewModel_default as ProviderViewModel,
  SceneModePicker_default as SceneModePicker,
  SceneModePickerViewModel_default as SceneModePickerViewModel,
  SelectionIndicator_default as SelectionIndicator,
  SelectionIndicatorViewModel_default as SelectionIndicatorViewModel,
  SvgPathBindingHandler_default as SvgPathBindingHandler,
  Timeline_default as Timeline,
  TimelineHighlightRange_default as TimelineHighlightRange,
  TimelineTrack_default as TimelineTrack,
  ToggleButtonViewModel_default as ToggleButtonViewModel,
  VRButton_default as VRButton,
  VRButtonViewModel_default as VRButtonViewModel,
  Viewer_default as Viewer,
  VoxelInspector_default as VoxelInspector,
  VoxelInspectorViewModel_default as VoxelInspectorViewModel,
  createCommand_default as createCommand,
  createDefaultImageryProviderViewModels_default as createDefaultImageryProviderViewModels,
  createDefaultTerrainProviderViewModels_default as createDefaultTerrainProviderViewModels,
  knockout_default as knockout,
  knockout_3_5_1_default as knockout_3_5_1,
  knockout_es5_default as knockout_es5,
  subscribeAndEvaluate_default as subscribeAndEvaluate,
  viewerCesium3DTilesInspectorMixin_default as viewerCesium3DTilesInspectorMixin,
  viewerCesiumInspectorMixin_default as viewerCesiumInspectorMixin,
  viewerDragDropMixin_default as viewerDragDropMixin,
  viewerPerformanceWatchdogMixin_default as viewerPerformanceWatchdogMixin,
  viewerVoxelInspectorMixin_default as viewerVoxelInspectorMixin
};
//# sourceMappingURL=index.js.map
