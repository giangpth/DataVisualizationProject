! function(t) {
    var e = {};

    function n(r) {
        if (e[r]) return e[r].exports;
        var a = e[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return t[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports
    }
    n.m = t, n.c = e, n.d = function(t, e, r) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(t, e) {
        if (1 & e && (t = n(t)), 8 & e) return t;
        if (4 & e && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var a in t) n.d(r, a, function(e) {
                return t[e]
            }.bind(null, a));
        return r
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 5)
}([function(t, e) {
    t.exports = function(t) {
        return this._functionHub = t, this._mapDomMetaInfo = {}, this._mapDomOffsetAntMap = {}, this._liIntervals = [], this._liIntervalInfo = [], this.clearAnimateDomsbyIndex = function(t) {
            this._mapDomMetaInfo[t] = {}, this._mapDomOffsetAntMap = {}
        }, this.update = function(t, e, n) {
            this._mapDomMetaInfo[t] = n, this._mapDomOffsetAntMap[t] = {}
        }, this.addMetaInfo = function(t, e) {
            null != e && (this._mapDomMetaInfo[t] = e)
        }, this.updateMetaInfo = function(t, e) {
            this._mapDomMetaInfo[t] = e
        }, this.resetMetaInfo = function(t, e) {
            var n = this._mapDomOffsetAntMap[t];
            Object.values(n).forEach(function(t) {
                t.remove()
            }), this._mapDomOffsetAntMap[t] = {}, this._mapDomMetaInfo[t] = e
        }, this.removeAntsbyIndex = function(t) {
            for (var e = this._mapDomOffsetAntMap[t], n = Object.keys(e), r = 0; r < n.length; r++) {
                var a = e[n[r]];
                null != a && a.remove()
            }
        }, this.getMetaInfos = function() {
            return this._mapDomMetaInfo
        }, this.getMetaInfobyIndex = function(t) {
            return this._mapDomMetaInfo[t]
        }, this.getAnt = function(t, e) {
            var n = void 0,
                r = this._mapDomOffsetAntMap[t];
            return null == r ? (n = this.createAnt(t, e), this.addAnt(t, e, n)) : null == (n = r[e]) && (n = this.createAnt(t, e), this.addAnt(t, e, n)), n
        }, this.createAnt = function(t, e) {
            var n, r = this.getMetaInfobyIndex(t),
                a = r.antmodel,
                i = r.boundaryPath,
                l = r.perimeter,
                o = r.cenPosDisplace,
                s = r.dots.join(";"),
                c = r.lengthperlist,
                u = r.normalanglelist,
                d = r.liuninormalvector,
                h = a.clone(),
                v = function(t, e, n) {
                    for (var r = e.length - 2, a = 0; a < e.length; a++)
                        if (+e[a] >= n) {
                            r = 0 == a ? 0 : a - 1;
                            break
                        } var i = r + 1,
                        l = (n - +e[r]) / (+e[i] - +e[r]);
                    return {
                        pos: function(t, e, n) {
                            var r = e.x - t.x,
                                a = e.y - t.y;
                            return {
                                x: t.x + r * n,
                                y: t.y + a * n
                            }
                        }({
                            x: +t.split(";")[r].split(",")[0],
                            y: +t.split(";")[r].split(",")[1]
                        }, {
                            x: +t.split(";")[i].split(",")[0],
                            y: +t.split(";")[i].split(",")[1]
                        }, l),
                        beginIndex: r
                    }
                }(s, c, e / l),
                g = v.pos,
                p = v.beginIndex;
            return g.x += o * d[p][0], g.y += o * d[p][1], h.position = new Point(g.x, g.y), h.rotate(-u[p]), (n = null != i ? h.intersect(i) : h.clone()).visible = !0, h.remove(), n
        }, this.addAnt = function(t, e, n) {
            null == this._mapDomOffsetAntMap[t] ? this._mapDomOffsetAntMap[t] = {
                offset: n
            } : this._mapDomOffsetAntMap[t][e] = n
        }, this.clearAnimateIntervals = function() {
            for (var t = 0; t < this._liIntervals.length; t++) clearInterval(this._liIntervals[t]);
            this._liIntervals = []
        }, this.addAnimateIntervals = function(t) {
            this._liIntervals.push(t)
        }, this.newAnimateIntervalInfo = function(t) {
            return this._liIntervalInfo[t] = {}, this._liIntervalInfo[t]
        }, this
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this;
        return this._functionHub = t, this._currentEditGeometryType = void 0, $("#groupid").on("input", function() {
            var t = this.value;
            if (NaN != t) {
                var n = document.querySelector("#groupli-" + t + " span");
                if (null != n) {
                    var r = +n.innerText;
                    console.log(" ma list ", r), console.log(" !!! ", e._functionHub._animateDomManager._mapDomMetaInfo);
                    var a = e._functionHub._animateDomManager.getMetaInfobyIndex(r);
                    console.log("maInfo_previous ", a), document.getElementById("interval").value = +a.antinterval, document.getElementById("manual-antgap").value = +a.antgap, document.getElementById("antcolor").jscolor.fromString(a.antcolor), document.getElementById("groupid").value = a.groupid
                }
            }
        }), this.addMADoms = function(t, n) {
            var r = t,
                a = (document.getElementById("maarea"), document.getElementById("magroupul"), document.getElementById("groupli-" + n.groupid));
            if (null == a) {
                n.groupid;
                n.groupid, n.groupid
            } else a.innerHTML += "<span> " + r + "</span>";
            d3.selectAll(".mabutton").on("click", function() {
                var t = d3.select(this).attr("groupid"),
                    n = [];
                document.querySelectorAll("#groupli-" + t + " span").forEach(function(t) {
                    n.push(+t.innerText)
                });
                var r = e._functionHub._animateDomManager.getMetaInfobyIndex(n[0]);
                e.editAnimate(r, n)
            })
        }, this.editGroupAnimate = function(t) {}, this.editAnimate = function(t, n) {
            if (null != n && 0 != n.length || null != e._functionHub._geometrySaver.getCurrentMAGeometry()) {
                null != t && (document.getElementById("interval").value = +t.antinterval, document.getElementById("manual-antgap").value = +t.antgap, document.getElementById("antcolor").jscolor.fromString(t.antcolor), document.getElementById("groupid").value = t.groupid);
                var r = document.getElementById("aeModal");
                r.style.display = "block", document.getElementById("aecancel").onclick = function() {
                    r.style.display = "none"
                }, document.getElementById("aeok").onclick = function() {
                    var t, a, i;
                    if (t = {
                            ae: "MA",
                            groupid: document.getElementById("groupid").value,
                            antgap: +document.getElementById("manual-antgap").value < .05 ? .05 : +document.getElementById("manual-antgap").value,
                            antshape: $('input[name="anttype"]:checked').val(),
                            antcolor: "#" + document.getElementById("antcolor").value,
                            antinterval: +document.getElementById("interval").value
                        }, r.style.display = "none", null == n || 0 == n.length) {
                        a = e._functionHub._geometrySaver.getCurrentMAGeometry(), i = e._functionHub._geometrySaver.addMAGeometry(a);
                        var l = e._functionHub._animateEnhancer.activateDOM(a, t).metainfo;
                        e._functionHub._geometrySaver.clearCurrentMAGeometry(), d3.selectAll(".define_geometry").style("visibility", "hidden"), e._functionHub._animateDomManager.addMetaInfo(i, l), e.addMADoms(i, l)
                    } else
                        for (var o = 0; o < n.length; o++) i = n[o], a = e._functionHub._geometrySaver.getMAGeometrybyIndex(i), l = e._functionHub._animateEnhancer.activateDOM(a, t).metainfo, e._functionHub._animateDomManager.resetMetaInfo(i, l);
                    e._functionHub._type = "animate", e._functionHub.initFunc()
                }
            } else alert("Marching Ant Definer Error ")
        }, this
    }
}, function(t, e) {
    t.exports = function() {
        return this.activateDOM = function(t, e) {
            switch (e.ae) {
                case "MA":
                    return this.marchingAnt(t, e)
            }
        }, this.marchingAnt = function(t, e) {
            var n = t.path,
                r = t.boundary,
                a = t.ant,
                i = +e.antinterval,
                l = {
                    cenPosDisplace: 0
                },
                o = void 0;
            if (null != r) {
                o = new Path;
                for (var s = r.geometry, c = 0; c < s.length; c++) o.add(new Point(s[c]));
                o.closed = !0, o.visible = !1
            }
            var u, d, h = n.geometry,
                v = n.lengthperlist,
                g = [],
                p = [],
                f = !0,
                m = n.liUniNormal_right,
                y = n.liUniNormal_left,
                _ = n.perimeter,
                b = +e.antgap,
                M = e.antshape;
            if ("self-defined" == M) {
                var w = [(u = null != a && null != a.paperdom ? a.paperdom.clone() : new Path(a.geometry)).position._x - h[0][0], u.position._y - h[0][1]],
                    x = y[0],
                    k = !0;
                w[0] * x[0] + w[1] * x[1] < 0 && (k = !1), k ? (p = y, g = n.liClockAngle_left) : (f = !1, p = m, g = n.liClockAngle_right);
                var C = [h[1][0] - h[0][0], h[1][1] - h[0][1]],
                    A = Math.sqrt(C[0] * C[0] + C[1] * C[1]),
                    E = Math.sqrt(w[0] * w[0] + w[1] * w[1]),
                    D = (C[0] * w[0] + C[1] * w[1]) / A,
                    H = Math.sqrt(E * E - D * D);
                l.cenPosDisplace = H;
                var O = [u.bounds.topLeft, u.bounds.topRight, u.bounds.bottomRight, u.bounds.bottomLeft];
                for (d = 1e6, c = 0; c < O.length; c++) {
                    var B = O[c],
                        I = [B.x - h[0][0], B.y - h[0][1]],
                        S = (I[0] * C[0] + I[1] * C[1]) / A;
                    d > S && (d = S)
                }
                u.rotate(g[0]), d = d < 0 ? -d : d, u.fillColor = "black"
            } else "rect" == M ? d = (u = new Path.Rectangle({
                position: new Point(0, 0),
                size: new Size(5, 50),
                fillColor: "black"
            })).bounds.width : "circle" == M ? ((u = new Path.Circle(new Point(0, 0), 20)).fillColor = "black", d = u.bounds.width) : ((u = new Path([
                [-9.463, 25.068],
                [-8.729, -25.067],
                [25.166, 0]
            ])).closed = !0, u.fillColor = "black", d = u.bounds.width);
            for (var F = 0, P = []; !(F > _);) P.push(F), F += b;
            return u.fillColor = e.antcolor, u.visible = !1, {
                metainfo: {
                    antmodel: u,
                    antwidth: d,
                    antdots: a.geometry,
                    antoffsets: P,
                    cenPosDisplace: l.cenPosDisplace,
                    dots: h,
                    lengthperlist: v,
                    normalanglelist: g,
                    normalLeft: f,
                    liuninormalvector: p,
                    perimeter: _,
                    antinterval: i,
                    antgap: b,
                    groupid: e.groupid,
                    antcolor: e.antcolor,
                    boundaryPath: o
                }
            }
        }, this
    }
}, function(t, e) {
    t.exports = function() {
        var t = this;
        return this._geometryType = null, this._newClick = !0, this._currectSelectId = null, this._validNextId = 0, this._moveVertex = !1, this._moveCenter = !1, this._resizeCenter = !1, this._rotateCenter = !1, this._init = function() {}, this.beginMode = function(t) {
            this.clearMode(), this._geometryType = t.geotype;
            var e = t.liGeometryPos;
            null != t.type && (document.querySelectorAll("#geometryFinish input").forEach(function(t) {
                t.checked = !1
            }), document.querySelector("#geometryFinish [value=" + t.type + "]").checked = !0), this.initPreviewPath(e), this.enableClick()
        }, this.clearMode = function() {
            console.log(" clear mode "), d3.selectAll(".define_helper").remove(), d3.select("#previewGeo").remove(), this._geometryType = null, this._newClick = !0, this._moveCenter = !1, this._moveVertex = !1, this._resizeCenter = !1, this._rotateCenter = !1, d3.select("#geometryFinish").style("visibility", "hidden")
        }, this.getNextId = function() {
            return this._validNextId++
        }, this.initPreviewPath = function(t) {
            if (console.log(" edit li init pos ", t), null == t) switch (this._geometryType) {
                case "rect":
                    for (t = [
                            [200, 200],
                            [300, 200],
                            [300, 300],
                            [200, 300]
                        ], a = 0; a < t.length; a++) this.addVertexDot(t[a]);
                    this.updatePreviewPath();
                    break;
                case "circle":
                    var e = [250, 250];
                    for (a = 0; a < 360; a += 30) {
                        var n = e[0] + 50 * Math.sin(Math.PI * a / 180),
                            r = e[1] + 50 * Math.cos(Math.PI * a / 180);
                        this.addVertexDot([n, r])
                    }
                    this.updatePreviewPath()
            } else {
                for (var a = 0; a < t.length; a++) this.addVertexDot(t[a]);
                this.updatePreviewPath()
            }
        }, this.updatePreviewPath = function() {
            var t = this.getGeometry();
            "polyline" != this._geometryType && t.push(t[0]), console.log(" liDot length ", t.length);
            var e = d3.line(),
                n = d3.select("#previewGeo");
            1 == n.empty() && (n = d3.select("#coversvg").append("path").attr("id", "previewGeo").style("stroke", function() {
                return "gray"
            }).style("stroke-width", "2px").style("stroke-dasharray", "5 5").style("fill", "none")), n.attr("d", e(t)), d3.selectAll(".define_circle").each(function() {
                d3.select(this).attr("originx", function() {
                    return +d3.select(this).attr("cx")
                }).attr("originy", function() {
                    return +d3.select(this).attr("cy")
                })
            }), this.updateCenterMoveDot(), this.updateBoundBoxMoveDots()
        }, this.enableClick = function() {
            console.log(" enable click ", d3.select("#coversvg"), t._newClick), d3.select("#coversvg").on("mousedown", function() {
                console.log(" log click ");
                var e = d3.mouse(this);
                t._newClick && t.addVertexDot(e)
            }).on("mousemove", function() {
                if (t._moveVertex && null != t._currectSelectId) d3.select("#" + t._currectSelectId).attr("cx", d3.mouse(this)[0]).attr("cy", d3.mouse(this)[1]), t.updatePreviewPath();
                else if (t._moveCenter && null != t._currectSelectId) {
                    var e = [+d3.select("#" + t._currectSelectId).attr("cx"), +d3.select("#" + t._currectSelectId).attr("cy")],
                        n = [d3.mouse(this)[0] - e[0], d3.mouse(this)[1] - e[1]];
                    t.moveVertexDots(n)
                } else if (t._resizeCenter && null != t._currectSelectId) {
                    var r = +d3.select("#" + t._currectSelectId).attr("originx"),
                        a = +d3.select("#" + t._currectSelectId).attr("originy"),
                        i = +d3.select("#boundbox_rect").attr("width"),
                        l = +d3.select("#boundbox_rect").attr("height");
                    n = [1 + (d3.mouse(this)[0] - r) / i, 1 + (a - d3.mouse(this)[1]) / l], console.log(" displayXY ", n), t.resizeVertexDots(n), d3.select("#" + t._currectSelectId).attr("cx", d3.mouse(this)[0]).attr("cy", d3.mouse(this)[1])
                }
            }).on("mouseup", function() {
                t._resizeCenter && (d3.select("#" + t._currectSelectId).attr("originx", function() {
                    return +d3.select(this).attr("cx")
                }).attr("originy", function() {
                    return +d3.select(this).attr("cy")
                }), d3.selectAll(".define_circle").each(function() {
                    d3.select(this).attr("originx", function() {
                        return +d3.select(this).attr("cx")
                    }).attr("originy", function() {
                        return +d3.select(this).attr("cy")
                    })
                })), null != t._currectSelectId && (t._currectSelectId = null), t._newClick = !0, t._moveCenter = !1, t._resizeCenter = !1, t._rotateCenter = !1, t._moveVertex = !1, t.updatePreviewPath()
            })
        }, this.updateCenterMoveDot = function() {
            var e = this.getGeometry(),
                n = this.computeCentriod(e),
                r = d3.select("#centermove_circle");
            1 == r.empty() && (r = d3.select("#coversvg").append("circle").attr("id", "centermove_circle").attr("class", "define_helper").attr("r", "2px").style("fill", "blue").on("mousedown", function() {
                t._moveCenter = !0, t._newClick = !1, t._resizeCenter = !1, t._rotateCenter = !1, t._moveVertex = !1, t._currectSelectId = d3.select(this).attr("id")
            }).on("mouseenter", function() {
                d3.select(this).style("fill", "red")
            }).on("mouseleave", function() {
                d3.select(this).style("fill", "blue")
            })), r.attr("cx", n[0]).attr("cy", n[1])
        }, this.updateBoundBoxMoveDots = function() {
            var e = this.getGeometry();
            if (console.log(" lidot ", e.length), !(e.length <= 2)) {
                var n = this.computeBoundbox(e),
                    r = d3.select("#boundbox_rect"),
                    a = d3.select("#resize_circle");
                1 == r.empty() && (r = d3.select("#coversvg").append("rect").attr("id", "boundbox_rect").attr("class", "define_helper").style("fill", "none").style("stroke", "red").style("stroke-width", "1px"), a = d3.select("#coversvg").append("circle").attr("id", "resize_circle").attr("class", "define_helper").attr("r", "2px").style("fill", "orange").on("mousedown", function() {
                    t._resizeCenter = !0, t._moveCenter = !1, t._newClick = !1, t._moveVertex = !1, t._rotateCenter = !1, t._currectSelectId = d3.select(this).attr("id")
                }).on("mouseenter", function() {
                    d3.select(this).style("fill", "red")
                }).on("mouseleave", function() {
                    d3.select(this).style("fill", "orange")
                })), r.attr("width", n.width).attr("height", n.height).attr("x", n.x).attr("y", n.y), a.attr("cx", n.x + n.width).attr("cy", n.y).attr("originx", n.x + n.width).attr("originy", n.y)
            }
        }, this.computeCentriod = function(t) {
            for (var e = [0, 0], n = 0; n < t.length; n++) e[0] += t[n][0], e[1] += t[n][1];
            return t.length > 0 && (e[0] /= t.length, e[1] /= t.length), e
        }, this.computeBoundbox = function(t) {
            for (var e = {
                    left: 1e5,
                    right: 0,
                    top: 1e5,
                    bottom: 0
                }, n = 0; n < t.length; n++) e.left > t[n][0] && (e.left = t[n][0]), e.right < t[n][0] && (e.right = t[n][0]), e.top > t[n][1] && (e.top = t[n][1]), e.bottom < t[n][1] && (e.bottom = t[n][1]);
            return {
                x: e.left,
                y: e.top,
                width: e.right - e.left,
                height: e.bottom - e.top
            }
        }, this.moveVertexDots = function(t) {
            d3.selectAll(".define_circle").each(function() {
                var e = +d3.select(this).attr("cx"),
                    n = +d3.select(this).attr("cy");
                d3.select(this).attr("cx", e + t[0]).attr("cy", n + t[1])
            }), this.updatePreviewPath()
        }, this.resizeVertexDots = function(t) {
            var e = [+d3.select("#centermove_circle").attr("cx"), +d3.select("#centermove_circle").attr("cy")];
            d3.selectAll(".define_circle").each(function() {
                var n = +d3.select(this).attr("originx"),
                    r = +d3.select(this).attr("originy");
                d3.select(this).attr("cx", e[0] + (n - e[0]) * t[0]).attr("cy", e[1] + (r - e[1]) * t[1])
            })
        }, this.addVertexDot = function(e) {
            console.log(" new circle ");
            var n = "dot-" + t.getNextId();
            d3.select("#coversvg").append("circle").attr("class", "define_circle define_helper").attr("id", function() {
                return n
            }).attr("r", "3px").attr("cx", e[0]).attr("cy", e[1]).attr("originx", e[0]).attr("originy", e[1]).style("fill", "green").on("mousedown", function() {
                t._moveVertex = !0, t._newClick = !1, t._moveCenter = !1, t._resizeCenter = !1, t._rotateCenter = !1, t._currectSelectId = d3.select(this).attr("id")
            }).on("mouseenter", function() {
                d3.select(this).style("fill", "red")
            }).on("mouseleave", function() {
                console.log(" mouse leave !"), d3.select(this).style("fill", "green")
            }), d3.select("#geometryFinish").style("visibility", "visible")
        }, this.getGeometry = function() {
            var t = [];
            return d3.selectAll(".define_circle").each(function() {
                t.push([+d3.select(this).attr("cx"), +d3.select(this).attr("cy")])
            }), t
        }, this._init(), this
    }
}, function(t, e) {
    t.exports = function(t) {
        var e = this;
        return this._functionHub = t, this._currentMA = {}, this._liMAGeometry = [], this._init = function() {}, this.addMAGeometry = function(t) {
            return this._liMAGeometry.push(t), this.addAntDom(this._liMAGeometry.length - 1), this._liMAGeometry.length - 1
        }, this.addAntDom = function(t) {
            document.getElementById("antarea"), d3.selectAll(".antbutton").on("click", function() {
                var t = +d3.select(this).attr("index"),
                    n = e._currentMA.path;
                if (null != n) {
                    var r = e._functionHub._animateDomManager.getMetaInfobyIndex(t),
                        a = e.getMAGeometrybyIndex(t).ant,
                        i = r.antmodel;
                    e.fitAnt(i, n, a.geotype, r.cenPosDisplace, r.normalLeft)
                }
            })
        }, this.fitAnt = function(t, e, n, r, a) {
            var i = e.geometry,
                l = (e.lengthperlist, 1 == a ? e.liClockAngle_left : e.liClockAngle_right),
                o = 1 == a ? e.liUniNormal_left : e.liUniNormal_right,
                s = t.clone(),
                c = {
                    x: i[0][0],
                    y: i[0][1]
                };
            c.x += r * o[0][0], c.y += r * o[0][1], s.position = new Point(c.x, c.y), s.rotate(-l[0]);
            var u = [];
            s.segments.forEach(function(t) {
                u.push([t.point._x, t.point._y])
            }), this.saveGeometryNew({
                type: "ant",
                geotype: "area"
            }, u, s)
        }, this.getMAGeometrybyIndex = function(t) {
            if (t < this._liMAGeometry.length) return this._liMAGeometry[t]
        }, this.updateGeometrybyEdit = function(t, e, n) {
            var r = t[e];
            this.updateDom(r.dom, n);
            var a = this.computeLineSegInfoList(n),
                i = a.liUniNormal_left,
                l = a.liUniNormal_right,
                o = a.lengthPer,
                s = a.normalAngle,
                c = a.liUniNormal,
                u = this.computePerimeter(n);
            r = {
                dom: r.dom,
                geometry: n,
                lengthperlist: o,
                normalanglelist: s,
                liUniNormal: c,
                liUniNormal_right: l,
                liUniNormal_left: i,
                liClockAngle_left: a.liClockAngle_left,
                liClockAngle_right: a.liClockAngle_right,
                perimeter: u
            }, t[e] = r
        }, this.saveGeometryNew = function(t, e, n, r) {
            for (var a = 0; a < e.length; a++) e[a][0], e[a][1];
            var i = document.getElementsByTagName("canvas")[0].getBoundingClientRect(),
                l = [];
            for (a = 0; a < e.length; a++) {
                var o = e[a],
                    s = [o[0] - i.left, o[1]];
                l.push(s)
            }
            e = l;
            var c = $('input[name="geometrytype"]:checked').val();
            null != t.type && (c = t.type);
            var u = this.createDom(t.geotype, e, c),
                d = this.computeLineSegInfoList(e),
                h = d.liUniNormal_left,
                v = d.liUniNormal_right,
                g = d.lengthPer,
                p = d.normalAngle,
                f = d.liUniNormal,
                m = this.computePerimeter(e),
                y = {
                    geotype: t.geotype,
                    dom: u,
                    geometry: e,
                    paperdom: r,
                    lengthperlist: g,
                    normalanglelist: p,
                    liUniNormal: f,
                    liUniNormal_right: v,
                    liUniNormal_left: h,
                    liClockAngle_left: d.liClockAngle_left,
                    liClockAngle_right: d.liClockAngle_right,
                    perimeter: m
                };
            this._currentMA[c] = y
        }, this.fakeGeometryNew = function(t, e, n) {
            var r = n,
                a = {
                    type: t,
                    dom: this.createDom(t, e, r),
                    geometry: e,
                    lengthperlist: this.computeLengthPerList(e),
                    perimeter: this.computePerimeter(e)
                };
            this._currentMA[r] = a
        }, this.getCurrentMAGeometry = function() {
            if (null != this._currentMA.path) return this._currentMA
        }, this.clearCurrentMAGeometry = function() {
            this._currentMA = {}
        }, this.setCurrentMAGeometry = function(t) {
            for (var e = Object.keys(this._currentMA), n = 0; n < e.length; n++) {
                var r = e[n];
                this._currentMA[r].dom.remove()
            }
            this._currentMA = t
        }, this.setVisibleofGeometries = function(t) {
            d3.selectAll(".define_geometry").style("visibility", function(t) {
                return 1 == t ? "visible" : "hidden"
            })
        }, this.updateDom = function(t, e) {
            if (0 == t.empty()) {
                var n = d3.line();
                t.attr("d", n(e))
            }
            return t
        }, this.createDom = function(t, e, n) {
            switch (t) {
                case "polyline":
                    var r = d3.line();
                    return d3.select("#coversvg").append("path").attr("d", r(e)).attr("class", n + " define_geometry").style("stroke", function() {
                        return "path" == n ? "#03A9F4" : "boundary" == n ? "gray" : "ant" == n ? "black" : void 0
                    }).style("stroke-width", "2px").style("fill", "none");
                case "area":
                case "rect":
                case "circle":
                    return console.log(" create area "), r = d3.line(), e.push(e[0]), d3.select("#coversvg").append("path").attr("class", n + " define_geometry").attr("d", r(e)).style("fill", function() {
                        return "none"
                    }).style("stroke", function() {
                        return "path" == n ? "#03A9F4" : "boundary" == n ? "orange" : "ant" == n ? "black" : void 0
                    })
            }
            return null
        }, this.computePerimeter = function(t) {
            for (var e = 0, n = 0; n < t.length - 1; n++) {
                var r = t[n],
                    a = t[n + 1];
                e += Math.sqrt((r[0] - a[0]) * (r[0] - a[0]) + (r[1] - a[1]) * (r[1] - a[1]))
            }
            return e
        }, this.computeLineSegInfoList = function(t) {
            for (var e = [], n = [0], r = [], a = [], i = [], l = [], o = [], s = [], c = 0, u = 0; u < t.length - 1; u++) {
                var d = t[u],
                    h = t[u + 1];
                c += w = Math.sqrt((d[0] - h[0]) * (d[0] - h[0]) + (d[1] - h[1]) * (d[1] - h[1])), e.push(w);
                var v = {
                        x: d[1] - h[1],
                        y: h[0] - d[0]
                    },
                    g = {
                        x: -v.x,
                        y: -v.y
                    },
                    p = v,
                    f = Math.sqrt(p.x * p.x + p.y * p.y),
                    m = [g.x / f, g.y / f],
                    y = 180 * Math.acos(m[0]) / Math.PI;
                m[1] > 0 && (y = 360 - y), o.push(y);
                var _ = [-m[0], -m[1]],
                    b = 180 * Math.acos(_[0]) / Math.PI;
                _[1] > 0 && (b = 360 - b), s.push(b), a.push(m), i.push(m), l.push(_), p.y < 0 && (p = {
                    x: -p.x,
                    y: -p.y
                });
                var M = 180 * Math.acos(p.x / f) / Math.PI;
                r.push(M - 90)
            }
            var w = 0;
            for (u = 0; u < e.length; u++) w += e[u], n.push(w / c);
            return {
                lengthPer: n,
                normalAngle: r,
                liUniNormal: a,
                liUniNormal_left: i,
                liUniNormal_right: l,
                liClockAngle_left: o,
                liClockAngle_right: s
            }
        }, this.computeLengthPerList = function(t) {
            for (var e = [], n = [0], r = 0, a = 0; a < t.length - 1; a++) {
                var i = t[a],
                    l = t[a + 1];
                r += o = Math.sqrt((i[0] - l[0]) * (i[0] - l[0]) + (i[1] - l[1]) * (i[1] - l[1])), e.push(o)
            }
            var o = 0;
            for (a = 0; a < e.length; a++) o += e[a], n.push(o / r);
            return n
        }, this.setMAGeometryVisible = function(t, e) {
            for (var n = 1 == e ? "visible" : "hidden", r = Object.keys(t), a = 0; a < r.length; a++) t[r[a]].dom.style("visibility", n)
        }, this._init(), this
    }
}, function(t, e, n) {
    n(0), n(1), n(2);
    var r = n(6),
        a = (n(3), n(4), !1);
    window.loadMa = function(t, e) {
        d3.json(t, function(t, n) {
            (t && console.log(t), console.log("json", n), console.log("loadcanvas", e), null == e) && ((a = document.createElement("canvas")).width = 800, a.height = 800, a.id = "hhhcanvas", e = a.id, document.body.append(a));
            if (null != e) var a = document.getElementById(e);
            console.log("canvas", a), paper.setup(a), paper.install(window), this._functionHub = r();
            for (var i = n.magroups, l = n.drawpath, o = Object.keys(i), s = 0; s < o.length; s++) {
                var c = o[s];
                this._functionHub.addMAbyGroupInfo(i[c], l, e)
            }
            this._functionHub._type = "animate", this._functionHub.initFunc()
        })
    }, window.MA_Start = function() {
        a = !0
    }, window.MA_End = function() {
        this._functionHub._type = "animate", this._functionHub.initFunc(), !1
    }, window.marchingAnt = function(t, e, n, i, l, o, s) {
        null == s && (s = !1), 1 == a && (this._functionHub = r(), a = !1);
        var c = function(t, e) {
                for (var n = new paper.Path, r = 0; r < t.length; r++) n.add(new Point(t[r]));
                return n.closed = e, n
            }(t, !0),
            u = [],
            d = {},
            h = {};
        if (1 == s) {
            antModal = t, antModal.visible = !1;
            var v = {
                    dots: n
                },
                g = {
                    dots: e
                };
            u.push({
                boundary: v,
                path: g
            }), d.antinterval = 30 - i
        } else {
            antModal = c, antModal.visible = !1;
            v = {
                dots: n
            }, g = {
                dots: e
            };
            u.push({
                boundary: v,
                path: g
            }), d.antinterval = 30 - i
        }
        d.ae = "MA", d.antcolor = o, d.antgap = l, d.groupid = "1", d.antshape = "self-defined", h.malist = u, h.mainfo = d, null != antModal ? this._functionHub.addMAbyGroupwithExampleAnt(h, antModal) : (void 0, this._functionHub.addMAbyGroupInfo(h, void 0, canvas.id))
    }, window.marchingAntByExample = function(t, e, n, i, l, o) {
        var s = t;
        1 == a && (this._functionHub = r(), a = !1);
        var c = [],
            u = {},
            d = {};
        s.visible = !1;
        var h = s.interiorPoint,
            v = Math.abs(h.x - e[0][0]),
            g = Math.abs(h.y - e[0][1]),
            p = new paper.Path(s.pathData);
        p.visible = !1, p.translate(v, g), console.log("ppppaht", p);
        var f = {
                dots: n
            },
            m = {
                dots: e
            };
        c.push({
            boundary: f,
            path: m
        }), u.antinterval = 30 - i, u.ae = "MA", u.antcolor = o, u.antgap = l, u.groupid = "1", u.antshape = "self-defined", d.malist = c, d.mainfo = u, null != s ? this._functionHub.addMAbyGroupwithExampleAnt(d, p) : (void 0, this._functionHub.addMAbyGroupInfo(d, void 0, canvas.id))
    }
}, function(t, e, n) {
    var r = n(0),
        a = n(1),
        i = n(2),
        l = n(3),
        o = n(4);
    t.exports = function(t) {
        var e = this;
        return this._type = null, this._para = null, this._currentMAGeometryId = null, this._currentIntervalId = null, this._liHiddenMAIndex = [], this._liStoreMAIndex = [], this._init = function(t) {
            console.log(" init funcHub"), this._geometryDefiner = new l, this._geometrySaver = new o(this), this._animateEditor = new a(this), this._animateEnhancer = new i, this._animateDomManager = new r(this), this._initLocal("22")
        }, this._initLocal = function(t) {
            (new FormData).append("name", t)
        }, this.successSaveFunc = function(t, e) {
            console.log("success save! ", t)
        }, this.successFetchFunc = function(t, e) {
            if (null != t.ma) {
                console.log("responsema", t.ma), document.getElementById("saveMAName").value = t.ma.name;
                var n = t.ma.magroups,
                    r = t.ma.drawpath;
                console.log(" draw Path ", r);
                for (var a = Object.keys(n), i = 0; i < a.length; i++) {
                    var l = a[i];
                    e.addMAbyGroupInfo(n[l], r)
                }
                e._type = "animate", e.initFunc(), console.log(" success fetched ! ", t)
            }
        }, this.addMAbyGroupwithExampleAnt = function(t, e, n) {
            var r = t.mainfo,
                a = t.malist,
                i = ["path", "boundary"];
            if (null != a)
                for (var l = 0; l < a.length; l++) {
                    for (var o = a[l], s = 0; s < i.length; s++) {
                        var c = i[s];
                        null != o[c] && (this._geometrySaver.saveGeometryNew({
                            type: c,
                            geotype: o[c].geoType
                        }, o[c].dots), new Path(o[c].dots))
                    }
                    if (null != n) {
                        var u = new Path({
                            segments: o.path.dots
                        });
                        u.strokeColor = "#dddddd", u.strokeWidth = .2
                    }
                    var d = this._geometrySaver.getCurrentMAGeometry().path;
                    this._geometrySaver.fitAnt(e, d, "area", 0, !1), d3.selectAll(".define_geometry").style("visibility", "hidden");
                    var h = this._geometrySaver.getCurrentMAGeometry(),
                        v = this._geometrySaver.addMAGeometry(h);
                    this._liStoreMAIndex.push(v);
                    var g = this._animateEnhancer.activateDOM(h, r).metainfo;
                    this._geometrySaver.clearCurrentMAGeometry(), this._animateDomManager.addMetaInfo(v, g), this._animateEditor.addMADoms(v, g)
                }
        }, this.addMAbyGroupInfo = function(t, e, n) {
            var r = t.malist,
                a = t.mainfo;
            if (null != r)
                for (var i = ["path", "ant", "boundary"], l = 0; l < r.length; l++) {
                    for (var o = r[l], s = 0; s < i.length; s++) {
                        var c = i[s];
                        null != o[c] && this._geometrySaver.saveGeometryNew({
                            type: c,
                            geotype: o[c].geoType
                        }, o[c].dots, n)
                    }
                    var u = this._geometrySaver.getCurrentMAGeometry(),
                        d = this._geometrySaver.addMAGeometry(u);
                    this._liStoreMAIndex.push(d);
                    var h = this._animateEnhancer.activateDOM(u, a).metainfo;
                    this._geometrySaver.clearCurrentMAGeometry(), this._animateDomManager.addMetaInfo(d, h), this._animateEditor.addMADoms(d, h)
                }
        }, this.setFunc = function(t) {
            this._type = t.type, null != t.para && (this._para = t.para), console.log(" function hub ", this._type, this._para), this.initFunc()
        }, this.setMAVisiblebyIndex = function(t, e) {
            t ? this._liHiddenMAIndex.splice(this._liHiddenMAIndex.indexOf(e), 1) : -1 == this._liHiddenMAIndex.indexOf(e) && this._liHiddenMAIndex.push(e)
        }, this.stopFunc = function(t) {
            switch (t.type) {
                case "animate":
                    this.setMAVisiblebyIndex(!1, t.para.maIndex)
            }
        }, this.initFunc = function() {
            switch (this._type) {
                case "new":
                case "editGeometry":
                    this._geometryDefiner.beginMode(this._para);
                    break;
                case "addGeometry":
                    this._geometrySaver.saveGeometryNew(this._para, this._geometryDefiner.getGeometry()), this._geometryDefiner.clearMode();
                    break;
                case "newadd":
                    this._geometryDefiner.clearMode(), this._type = "editanimate", this.initFunc();
                    break;
                case "editanimate":
                    console.log(" [2] begin ! edit animte ", this._currentMAGeometryId), this._animateEditor.editAnimate();
                    break;
                case "stopani":
                    console.log(" stop animate "), clearInterval(e._currentIntervalId);
                    break;
                case "animate":
                    var t = 0;
                    clearInterval(e._currentIntervalId), e._currentIntervalId = setInterval(function() {
                        for (var n = e._animateDomManager.getMetaInfos(), r = Object.keys(n), a = 0; a < r.length; a++) {
                            var i = +r[a],
                                l = e._animateDomManager.getMetaInfobyIndex(i),
                                o = l.antinterval;
                            if (!(t % o > 0)) {
                                var s = l.antoffsets,
                                    c = (l.antmodel, l.antwidth),
                                    u = (l.cenPosDisplace, l.perimeter),
                                    d = l.antgap,
                                    h = [];
                                s.sort(function(t, e) {
                                    return t - e
                                });
                                for (var v = 0; v < s.length; v++) {
                                    var g = s[v],
                                        p = e._animateDomManager.getAnt(i, g);
                                    if (p.visible = !1, (g += 1) > u + c / 2) p.visible = !1;
                                    else if (!(e._liHiddenMAIndex.indexOf(i) >= 0)) {
                                        if (0 == v && g >= d - c / 2) {
                                            var f = -c / 2;
                                            e._animateDomManager.getAnt(i, f).visible = !0, h.push(f)
                                        }
                                        e._animateDomManager.getAnt(i, g).visible = !0, h.push(g)
                                    }
                                }
                                l.antoffsets = h, e._animateDomManager.updateMetaInfo(i, l)
                            }
                        }
                        t > 1e6 ? t = 0 : t += 1
                    }, 10);
                    break;
                case "upload":
                    for (var n = "[", r = this._geometryDefiner.getGeometry(), a = 0; a < r.length; a++) a == r.length - 1 ? n += "[" + r[a][0] + "," + r[a][1] + "]" : n += "[" + r[a][0] + "," + r[a][1] + "],";
                    n += "]", alert(n);
                    break;
                case "saveDB":
                    var i = document.getElementById("saveMAName").value,
                        l = {};
                    l.name = i;
                    var o = e._animateDomManager.getMetaInfos();
                    console.log(" save to db ", Object.keys(o).length, e._liStoreMAIndex);
                    var s = {};
                    for (var c in o) {
                        var u = {},
                            d = e._geometrySaver.getMAGeometrybyIndex(c),
                            h = o[c];
                        null != d.path && (u.path = {
                            geotype: d.path.geotype,
                            dots: d.path.geometry
                        }), null != d.ant && (u.ant = {
                            geotype: d.ant.geotype,
                            dots: d.ant.geometry
                        }), null != d.boundary && (u.boundary = {
                            geotype: d.boundary.geotype,
                            dots: d.boundary.geometry
                        });
                        var v = h.groupid;
                        if (null == s[v]) {
                            var g = {
                                    ae: "MA",
                                    groupid: v,
                                    antgap: h.antgap,
                                    antcolor: h.antcolor,
                                    antshape: "self-defined",
                                    antinterval: h.antinterval
                                },
                                p = [u];
                            s[v] = {
                                mainfo: g,
                                malist: p
                            }
                        } else console.log(" add! "), s[v].malist.push(u)
                    }
                    l.magroups = s;
                    var f = new FormData;
                    f.append("ma", JSON.stringify(l)), lSendUrl("POST", "http://localhost:20082/saveMA", f, this.successSaveFunc, this)
            }
        }, this._init(t), this
    }
}]);