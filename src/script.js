var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var movieName = document.getElementById('movie-name');
var searchBtn = document.getElementById('search-btn');
var searchBtn2 = document.getElementById('search-btn2');
var Year = document.getElementById('released-ans');
var actors_name = document.getElementById('Actors-ans');
var movieName1 = document.getElementById('movie-name1');
var movieName2 = document.getElementById('movie-name2');
var movieName3 = document.getElementById('movie-name3');
var getMovie = function () {
    var name = movieName.value;
    if (name.length <= 0) {
        movieName.innerHTML = "<h3 class=\"msg\">Please Enter A Movie Name</h3>";
    }
    else {
        var url = 'https://www.omdbapi.com/?t=' + name + '&apikey=abf03079';
        fetch(url)
            .then(function (resp) { return resp.json(); })
            .then(function (data) {
            //returns names of actors
            function namesOnly() {
                var actors = data.Actors;
                actors = actors.split(' ');
                var resultActors;
                resultActors = [];
                actors.forEach(function (el, ind) {
                    if (ind % 2 == 0) {
                        resultActors.push(' ' + el);
                    }
                });
                return resultActors.join();
            }
            // year
            var release = new Date().getFullYear() - data.Year;
            function getCountry(countryName) {
                var _a, _b;
                return __awaiter(this, void 0, void 0, function () {
                    var countrys, i, url_1, resp, data_1, curr, cur //
                    , img;
                    return __generator(this, function (_c) {
                        switch (_c.label) {
                            case 0:
                                countrys = countryName.split(",");
                                i = 0;
                                _c.label = 1;
                            case 1:
                                if (!(i < countrys.length)) return [3 /*break*/, 5];
                                url_1 = 'https://restcountries.com/v3.1/name/' + countrys[i].trim() + '?fullText=true';
                                return [4 /*yield*/, fetch(url_1)];
                            case 2:
                                resp = _c.sent();
                                return [4 /*yield*/, resp.json()];
                            case 3:
                                data_1 = _c.sent();
                                curr = data_1[0].currencies;
                                cur = void 0;
                                cur = document.createElement('h4').innerText;
                                if (cur != null) {
                                    cur = Object.keys(curr);
                                }
                                (_a = document.getElementById('ap')) === null || _a === void 0 ? void 0 : _a.append(cur);
                                img = document.createElement('img');
                                img.src = data_1[0].flags.png;
                                (_b = document.getElementById('ap')) === null || _b === void 0 ? void 0 : _b.append(img);
                                _c.label = 4;
                            case 4:
                                i++;
                                return [3 /*break*/, 1];
                            case 5: return [2 /*return*/];
                        }
                    });
                });
            }
            getCountry(data.Country);
            Year.innerHTML = release + ' years ago';
            actors_name.innerHTML = namesOnly();
        });
    }
};
searchBtn.addEventListener('click', getMovie);
//task 2
var getMovie2 = function () {
    var name1 = movieName1.value;
    var name2 = movieName2.value;
    var name3 = movieName3.value;
    var url1 = 'https://www.omdbapi.com/?t=' + name1 + '&apikey=abf03079';
    var url2 = 'https://www.omdbapi.com/?t=' + name2 + '&apikey=abf03079';
    var url3 = 'https://www.omdbapi.com/?t=' + name3 + '&apikey=abf03079';
    fetch(url1)
        .then(function (resp) { return resp.json(); })
        .then(function (data1) {
        var minutes1 = data1.Runtime.split(' ')[0];
        fetch(url2)
            .then(function (resp) { return resp.json(); })
            .then(function (data2) {
            var minutes2 = data2.Runtime.split(' ')[0];
            fetch(url3)
                .then(function (resp) { return resp.json(); })
                .then(function (data3) {
                var minutes3 = data3.Runtime.split(' ')[0];
                var minutes = +minutes1 + +minutes2 + +minutes3;
                var length = document.getElementById('length-ans');
                if (length != null) {
                    length.innerText = minutes + ' minute';
                }
                function getCountry(countryName) {
                    return __awaiter(this, void 0, void 0, function () {
                        var countrys, sum, i, url, resp, data, curr;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    countrys = countryName.split(",");
                                    sum = 0;
                                    i = 0;
                                    _a.label = 1;
                                case 1:
                                    if (!(i < countrys.length)) return [3 /*break*/, 6];
                                    url = 'https://restcountries.com/v3.1/name/' + countrys[i].trim() + '?fullText=true';
                                    return [4 /*yield*/, fetch(url)];
                                case 2:
                                    resp = _a.sent();
                                    return [4 /*yield*/, resp.json()];
                                case 3:
                                    data = _a.sent();
                                    return [4 /*yield*/, data[0].population];
                                case 4:
                                    curr = _a.sent();
                                    sum += curr;
                                    return [2 /*return*/, sum];
                                case 5:
                                    i++;
                                    return [3 /*break*/, 1];
                                case 6: return [2 /*return*/];
                            }
                        });
                    });
                }
                function countPopulation() {
                    return __awaiter(this, void 0, void 0, function () {
                        var population1, population2, population3, population, ans;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, getCountry(data1.Country)];
                                case 1:
                                    population1 = _a.sent();
                                    return [4 /*yield*/, getCountry(data2.Country)];
                                case 2:
                                    population2 = _a.sent();
                                    return [4 /*yield*/, getCountry(data3.Country)];
                                case 3:
                                    population3 = _a.sent();
                                    if (population1 && population2 && population3) {
                                        population = +population1 + +population2 + +population3;
                                        ans = document.getElementById('population-ans');
                                        if (ans != null) {
                                            ans.innerText = population + ' people';
                                        }
                                    }
                                    return [2 /*return*/];
                            }
                        });
                    });
                }
                countPopulation();
            });
        });
    });
};
searchBtn2.addEventListener('click', getMovie2);
