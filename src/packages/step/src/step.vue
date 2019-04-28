<template>
  <div class="step">
    <div class="step_single" v-for="(item,index) in steps" :key="index" :style="{'width': 100 / steps.length + '%'}">
      <span class="step_icon">
        <img :src="current-1 >= index ? currentImg : img" class="step_img">
      </span><br/>
      <span :class="current-1 >= index ? 'title' : 'title disable_title'">{{item.title}}</span>
      <div v-if="index==0" class="line first_line" :class="current-1 >= index ? '' : 'disable_line'"></div>
      <div v-else-if="index==steps.length-1" class="line last_line" :class="current-1 >= index ? '' : 'disable_line'"></div>
      <div v-else class="line" :class="current-1 >= index ? '' : 'disable_line'"></div>
      <div class="step_content" v-if="index!=steps.length-1">{{item.content}}</div>
      <div class="step_description" v-if="index!=steps.length-1">{{item.description}}</div>
    </div>
  </div>
</template>
<script>
import { Icon } from 'iview'
  export default {
    name: 'TStep',
    data () {
      return {
        currentImg: 'data:image/png;base64,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',
        img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABHRJREFUaAXdWk1LG0EYnqyJNIimBIoolSKpyW+oJ6G3HtRze5DivecWwYNQ2rP3UjzUc82ht4In/Q2JDVIIilaCErViNOnzrDPLZrOb7Ed2s+nAMLOz877zPPO+87EzmxB9CpVKJXN/f/8K6l4gFhCft1qtDNJxRIZ6IpG4QPoLsYS4PzIy8iOXy7EscEgE0XBwcPAU8osAvIy4gHzKo74GyO0ifodccW5urupR3qjuiwgJAPgGtKwg1QxtATIg04T4FtJ1P4Q8ETk8PHzcaDTeo8F3IJAOgNtRFET+4uVmKpX6PDs7e+5Y0fLCNRFYYbHZbH6FfNaiI6zHmqZpb2GdopsGXLlFqVT6AAvQj6MiQexZtsm23RDpahG40iO40hcofO1GWVh14G7bcLVVuNqNUxuOREji9vb2JwTnnYQjLt8bHR196UTG0bVoiRiRYJ/NS0y2/WdLRI6JgbqTHVq6uNOY6XAtzk4cZIgd7+yUR12G8dJCXLbOZm1guU5gXFQALsrZyU9f1DBecuZ1ps215GIXdxIknpVYjU4wLCK3HWW4VCgrttFinzLcASDm1XbGsAgIbAwLCfYFsRKz6hfdItIav/HCIKYqxDmFRZqIz2gVBXxp2EiwgyXmReZ1IihY4sOgAnpVYIPoq3lgX6Zggl92d3d3f5D3+lHkq2Gr0NjYmJiamhIkc3R0JK6urqxVej03ksnkE01+ng6MxPT0tG4NEpmYmOgF2u59ihw0KBjIppCWIAkSYICLiHq9bge0Zxk5aFDAg4JIgx2J09NTcXl56QsHOXCE5XxJ+xRyInFxEegwJZcEGx7ZeA7Y64jJyUmBz19xcnIiMGH01BESCbplhhZR5049gZgrZLNZkU6nBcHNzMwIzBzm1x35sEjIhsb9Td6Qxi7ZAIvP0K5kQiah4yARX1NFrVZrm2WcyERBghw4/foeZcfHx13JRESCU/g5LcIPKd/BiUwmk+lYJzjFBpydnHBWaBEeKAcKdmQ4o0G3rhezigiRBNsocUHcC8RCClvJKJ0RkGBT+xqP9pFpqIaDpFYyEZFokIPG+wm4wG4QAmZZkjk7OxPX19eC+ZDGhNEksZODvo7ggee6fQucmqvVqu+9kxcgCrtaEIso4P3EUAWJWT+t14nIk4itoWLxAHar4xQF7NYReckyFIFYiVmBVa4lJLNN9WII0k1lDWI1iPCB111IaszHPNQkVgNmGxGepfK6CyZrGTViliE2YjSf+xJiGxEWwFxFLGRrzMcxEBsxWrE9bIaspXgul8vfIBSrOxJYYzufz7+xgdtpEVUJPriKfF/2YUpnwHRPYrJV0+FaqhZ88IZ3duwFVTaolBiIhZicMDi6llmA111Q9hGu5qq+WTZIHm2iydZaoVD41EuPa2Bx/2HANRH2yH/xC4fZtPI+ZQNlKzC94zgzy/TKw42i+6nGCoaEUMa7FcYF5L0ehqvfnHYgu2PecuDZU/DkWt00qx/P0LPzIMXz5BxSux/PKqhTwru9fv549g/bcy3CBUHo+wAAAABJRU5ErkJggg=='
      }
    },
    components: {
      Icon
    },
    props: {
      steps: {
        type: Array,
        required: false,
        default: () => []
      },
      current: {
        type: Number,
        required: false,
        default: 1
      }
    },
    computed: {

    },
    methods: {
      
    }
  }
</script>

<style lang="scss" scoped>
div{margin:0;padding:0;font-size: 0;}
.step {
  text-align: center;
}
.step_single {
  display: inline-block;
  text-align: center;
  position: relative;
}
.line {
  width: 100%;
  height: 1px;
  background-color: #108EE9;
  position: absolute;
  top: 38%;
  transform: translateY(-50%);
  z-index: 1;
}
.disable_line {
  background-color: #e9e9e9;
}
.first_line {
  width: 50%;
  left: 50%;
}
.last_line {
  width: 50%;
  left: 0;
}
.title {
  font-size: 14px;
}
.disable_title {
  color: rgba(0,0,0,0.25);
}
.step_icon {
  width: 65px;
  height: 65px;
  background-color: #fff;
  display: inline-block;
  position: relative;
  z-index: 2;
}
.step_img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.step_content {
  font-size: 12px;
  color: rgba(0,0,0,0.25);
  font-weight: 400;
  position: absolute;
  left: 50%;
  top: 14%;
  width: 100%;
}
.step_description {
  font-size: 12px;
  color: rgba(0,0,0,0.25);
  font-weight: 400;
  position: absolute;
  left: 50%;
  top: 44%;
  width: 100%;
}
</style>
