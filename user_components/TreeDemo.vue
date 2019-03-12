<template>
    <div>
      <el-tree
        :data="data2"
        show-checkbox
        default-expand-all
        node-key="id"
        ref="tree"
        highlight-current
        :props="defaultProps">
      </el-tree>

      <div class="buttons">
        <el-button @click="getCheckedNodes">通过 node 获取</el-button>
        <el-button @click="getCheckedKeys">通过 key 获取</el-button>
        <el-button @click="setCheckedNodes">通过 node 设置</el-button>
        <el-button @click="setCheckedKeys">通过 key 设置</el-button>
        <el-button @click="resetChecked">清空</el-button>
      </div>
    </div>
</template>


<script type="es6">
  export default {
    methods: {
      getCheckedNodes() {
        console.log(this.$refs.tree.getCheckedNodes());
      },
      getCheckedKeys() {
        console.log(this.$refs.tree.getCheckedKeys());
      },
      setCheckedNodes() {
        this.$refs.tree.setCheckedNodes([{
          id: 'module|11'
        }, {
          id: 'store|60'
        }]);
      },
      setCheckedKeys() {
        this.$refs.tree.setCheckedKeys([3]);
      },
      resetChecked() {
        this.$refs.tree.setCheckedKeys([]);
      }
    },

    data() {
      return {
        data2: [{
          "id": "tenant|1",
          "label": "Default",
          "children": [
            {
              "id": "module|11",
              "label": "供应链-1",
              "children": [
                {
                  "id": "brand|7bf66ce7-a890-45d9-80be-08d69ed99087",
                  "label": "巴庄火锅",
                  "children": [
                    {
                      "id": "store|60",
                      "label": "洛阳店",
                      "children": []
                    }
                  ]
                }
              ]
            },
            {
              "id": "module|12",
              "label": "供应链-2",
              "children": []
            }
          ]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    }
  };

</script>
