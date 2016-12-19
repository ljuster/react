var myData = require('./ads/ads-data.json');
var myData2 = require('./ads_metrics/ads-metrics-data.json');

class ObjectDataListStore {
    constructor(/*number*/ size){
        this.size = myData.ads.length;
        this._cache = [];
    }

    getRowObjectData(/*number*/ index) /*object*/ {
        return {
            name: myData.ads[index].name,
            impressions: myData2.rows[index].impressions,
            reach: myData2.rows[index].reach,
            frequency: myData2.rows[index].frequency,
            cpm: myData2.rows[index].cpm,
            spend: myData2.rows[index].spend,
            ctr: myData2.rows[index].ctr,
            cost_per_inline_link_click: myData2.rows[index].cost_per_inline_link_click,
            actions_goal: myData2.rows[index].actions_goal,
            actions_link_click: myData2.rows[index].actions_link_click,
            cost_per_action_type_cost_per_goal: myData2.rows[index].cost_per_action_type_cost_per_goal,
            actions_offsite_conversion: myData2.rows[index].actions_offsite_conversion
        };
    }

    getObjectAt(/*number*/ index) /*?object*/ {

        if (index < 0 || index > this.size){
            return undefined;
        }
        if (this._cache[index] === undefined) {
            this._cache[index] = this.getRowObjectData(index);
        }
        return this._cache[index];
    }

    /**
     * Populates the entire cache with data.
     * Use with Caution! Behaves slowly for large sizes
     * ex. 100,000 rows
     */
    getAll() {
        if (this._cache.length < this.size) {
            for (var i = 0; i < this.size; i++) {
                this.getObjectAt(i);
            }
        }
        return this._cache.slice();
    }

    getSize() {
        return this.size;
    }
}

module.exports = ObjectDataListStore;