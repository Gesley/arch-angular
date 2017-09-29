class NowController {
    constructor(dateFilter, $interval) {
        this.dateFilter = dateFilter;
        this.$interval = $interval;
    }

    updateTime(element, format) {
        let dt = this.dateFilter(new Date(), format);
        element.text(dt);
    }
}

NowController.$inject = ['dateFilter', '$interval'];

export default NowController;