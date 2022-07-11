# dry-code

![image](https://user-images.githubusercontent.com/46441280/178266602-51c88935-ee38-4574-a8ec-bf86c026b368.png)


Copy/paste detecting GitHub Action for programming source code with [jscpd](https://github.com/kucherenko/jscpd)

## Action inputs

| Action input|	Description	| Default Value| Required |
|-|-|-|-|
|`options`|The jscpd options. More informations about jscpd options [here](https://github.com/kucherenko/jscpd/tree/master/packages/jscpd#options)| | X |
|`arguments`|Path to the directory to be scanned|`.`| X |
|`token`|GitHub Repository token|| O |

## Comment examples

> ![image](https://user-images.githubusercontent.com/46441280/178265989-0a8d914a-a612-4fad-ac1f-11eda76887b9.png)

## Example YAML snippents

```yaml
on: [pull_request]

jobs:
  dry-code-action:
    runs-on: ubuntu-latest
    name: Dry Code Action
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v2
      - name: Dry Code Action
        uses: Pposong-Hantaihe/dry-code@v1.0.1
        with:
          token: "${{ secrets.GITHUB_TOKEN }}"
```

## Contributors

|<img alt="Yongwook Lee" src="https://avatars.githubusercontent.com/u/46441280?v=4" width="100"/> | <img alt="Taehyuk Han" src="https://avatars.githubusercontent.com/u/80453189?v=4" width="100"/> |
|:-----:|:-----:|
| [Yongwook Lee](https://github.com/i4song) | [Taehyuk Han](https://github.com/hantaihe)  |
