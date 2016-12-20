var myData = require('./ads/ads-data.json');
var myData2 = require('./ads_metrics/ads-metrics-data.json');

class ObjectDataListStore {
    constructor(){
        this.size = myData.ads.length;
        this._cache = [];
    }

    getRowObjectData(ad_ind, metric_ind) /*object*/ {
        var ag = "actions:goal"
        return {
            name: myData.ads[ad_ind].name,
            status: myData.ads[ad_ind].status,
            impressions: myData2.rows[metric_ind].impressions,
            reach: myData2.rows[metric_ind].reach,
            frequency: myData2.rows[metric_ind].frequency,
            cpm: myData2.rows[metric_ind].cpm,
            spend: myData2.rows[metric_ind].spend,
            ctr: myData2.rows[metric_ind].ctr,
            cost_per_inline_link_click: myData2.rows[metric_ind].cost_per_inline_link_click,
            actions_goal: myData2.rows[metric_ind].ag,
            actions_link_click: myData2.rows[metric_ind].actions_link_click,
            cost_per_action_type_cost_per_goal: myData2.rows[metric_ind].cost_per_action_type_cost_per_goal,
            actions_offsite_conversion: myData2.rows[metric_ind].actions_offsite_conversion
        };
    }

    getObjectAt(/*number*/ index) /*?object*/ {
        var metric_ind=0;

        while(myData.ads[index].remote_id !== myData2.rows[metric_ind].remote_id & metric_ind < myData.ads.length){
            metric_ind++;
        }
        if (index < 0 || index > this.size || metric_ind === myData.ads.length){
            return undefined;
        }
        if (this._cache[index] === undefined) {
            this._cache[index] = this.getRowObjectData(index, metric_ind);
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