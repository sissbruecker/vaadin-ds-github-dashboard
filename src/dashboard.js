import { css, html, LitElement } from "lit";
import startOfToday from "date-fns/startOfToday";
import subDays from "date-fns/subDays";
import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";
import "@vaadin/button";
import "@vaadin/date-picker";
import "@vaadin/grid";
import { columnBodyRenderer } from "@vaadin/grid/lit";
import "@vaadin/tabs";
import "@vaadin/tabsheet";
import "@vaadin/tooltip";
import { icons } from "./util/icons";
import { github } from "./util/github";
import { storage } from "./util/storage";

export class Dashboard extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
        min-height: 100vh;
        box-sizing: border-box;
      }
    `,
  ];

  static properties = {
    loading: { type: Boolean },
    loadingProgress: { type: String },
    dataStart: { type: Date },
    rangeStart: { type: Date },
    githubData: { type: Object },
    dashboard: { type: Object },
    settings: { type: Object },
  };

  constructor() {
    super();
    this.loading = false;
    this.loadingProgress = "";
    this.dataStart = subDays(startOfToday(), 30);
    this.rangeStart = subDays(startOfToday(), 14);
    this.settings = storage.loadSettings();
  }

  createRenderRoot() {
    return this;
  }

  async firstUpdated() {
    this.githubData = storage.loadGithubData();
    if (!this.githubData) {
      await this.refreshData();
    } else {
      this.refreshDashboard();
    }
  }

  updated(props) {
    if (props.has("settings")) {
      document.documentElement.style.colorScheme =
        this.settings.theme === "dark" ? "dark" : "light";
    }
  }

  render() {
    return html`
      <div class="dashboard">
        <div class="header aura-surface">
          <h1>Vaadin DS Github Dashboard</h1>
          <div class="actions">
            <vaadin-date-picker
              label="Show data since"
              .min="${dateFnsFormat(this.dataStart, "yyyy-MM-dd")}"
              .max="${dateFnsFormat(new Date(), "yyyy-MM-dd")}"
              .value="${dateFnsFormat(this.rangeStart, "yyyy-MM-dd")}"
              @change="${this.handleRangeStartChange}"
            ></vaadin-date-picker>
            <vaadin-button @click="${this.refreshData}"
              >Refresh data
            </vaadin-button>
            <vaadin-button theme="tertiary" @click="${this.handleToggleTheme}">
              ${icons.moon()}
            </vaadin-button>
            <vaadin-button id="help-icon" theme="tertiary"
              >${icons.help()}</vaadin-button
            >
            <vaadin-tooltip
              for="help-icon"
              text="Github data is updated once per day and then cached in local storage. 'Refresh data' forces an update. Data contains pulls and issues from the last 30 days, which is the maximum time range that can be configured."
            ></vaadin-tooltip>
          </div>
        </div>
        <div class="main">
          ${this.loading
            ? html` <div class="section flex">
                <div class="panel loading">
                  <div class="title">
                    <div class="spinner">${icons.spinner()}</div>
                    <span>Loading Github Data</span>
                  </div>
                  <div class="progress">${this.loadingProgress}</div>
                </div>
              </div>`
            : null}
          ${this.dashboard
            ? html`
                <div class="section flex">
                  ${this.renderStats("Merged PRs", [
                    {
                      label: "Features",
                      value: this.dashboard.features.length,
                    },
                    { label: "Fixes", value: this.dashboard.fixes.length },
                    {
                      label: "Refactors",
                      value: this.dashboard.refactors.length,
                    },
                    { label: "Chores", value: this.dashboard.chores.length },
                  ])}
                  ${this.renderStats("BFPs", [
                    {
                      label: "Closed",
                      value: this.dashboard.closedWarrantyIssues.length,
                    },
                    {
                      label: "Open",
                      value: this.dashboard.openWarrantyIssues.length,
                    },
                  ])}
                  ${this.renderStats("Contributions", [
                    {
                      label: "Contributions",
                      value: this.dashboard.contributions.length,
                    },
                  ])}
                </div>

                <div class="section grid">
                  <div class="panel issues">
                    <h2>Merged PRs</h2>
                    <div class="card aura-surface">
                      <vaadin-tabsheet theme="no-border no-padding">
                        <vaadin-tabs slot="tabs">
                          <vaadin-tab id="features-tab">Features</vaadin-tab>
                          <vaadin-tab id="fixes-tab">Fixes</vaadin-tab>
                          <vaadin-tab id="refactors-tab">Refactors</vaadin-tab>
                          <vaadin-tab id="chores-tab">Chores</vaadin-tab>
                          <vaadin-tab id="contributions-tab"
                            >Contributions
                          </vaadin-tab>
                        </vaadin-tabs>
                        <div tab="features-tab">
                          ${this.renderGrid(this.dashboard.features)}
                        </div>
                        <div tab="fixes-tab">
                          ${this.renderGrid(this.dashboard.fixes)}
                        </div>
                        <div tab="refactors-tab">
                          ${this.renderGrid(this.dashboard.refactors)}
                        </div>
                        <div tab="chores-tab">
                          ${this.renderGrid(this.dashboard.chores)}
                        </div>
                        <div tab="contributions-tab">
                          ${this.renderGrid(this.dashboard.contributions, true)}
                        </div>
                      </vaadin-tabsheet>
                    </div>
                  </div>

                  <div class="panel issues">
                    <h2>BFPs</h2>
                    <div class="card aura-surface">
                      <vaadin-tabsheet theme="no-border no-padding">
                        <vaadin-tabs slot="tabs">
                          <vaadin-tab id="closed-warranty-tab"
                            >Closed
                          </vaadin-tab>
                          <vaadin-tab id="open-warranty-tab">Open</vaadin-tab>
                        </vaadin-tabs>
                        <div tab="closed-warranty-tab">
                          ${this.renderGrid(
                            this.dashboard.closedWarrantyIssues,
                          )}
                        </div>
                        <div tab="open-warranty-tab">
                          ${this.renderGrid(this.dashboard.openWarrantyIssues)}
                        </div>
                      </vaadin-tabsheet>
                    </div>
                  </div>
                </div>
              `
            : null}
        </div>
      </div>
    `;
  }

  renderStats(title, values) {
    return html`
      <div class="panel stats">
        <div class="card aura-surface">
          <div class="title">${title}</div>
          <div class="list">
            ${values.map(
              (value) => html`
                <div class="stat">
                  <span class="value">${value.value}</span>
                  <span class="label">${value.label}</span>
                </div>
              `,
            )}
          </div>
        </div>
      </div>
    `;
  }

  renderGrid(issues, showAuthor = false) {
    return html`
      <vaadin-grid .items="${issues}" theme="no-border">
        <vaadin-grid-column
          ${columnBodyRenderer(
            (issue) => html`
              <div class="title">${issue.title}</div>
              <div class="details">
                <span>${issue.repo}</span>
                ${issue.author ? html`<span>@${issue.author}</span>` : null}
              </div>
            `,
          )}
        ></vaadin-grid-column>
        <vaadin-grid-column
          width="60px"
          flex-grow="0"
          ${columnBodyRenderer(
            (issue) => html`
              <a href="${issue.url}" target="_blank">
                ${icons.externalLink()}
              </a>
            `,
          )}
        ></vaadin-grid-column>
      </vaadin-grid>
    `;
  }

  handleToggleTheme() {
    const newTheme = this.settings.theme === "dark" ? "light" : "dark";
    this.settings = { ...this.settings, theme: newTheme };
    storage.saveSettings(this.settings);
  }

  handleRangeStartChange(e) {
    this.rangeStart = dateFnsParse(e.target.value, "yyyy-MM-dd", new Date());
    this.refreshDashboard();
  }

  async refreshData() {
    this.loading = true;
    this.loadingProgress = "";
    this.dashboard = null;
    this.githubData = await refreshGithubData(this.dataStart, (progress) => {
      this.loadingProgress += progress + "\n";
    });
    storage.saveGithubData(this.githubData);
    this.refreshDashboard();
    this.loading = false;
  }

  refreshDashboard() {
    this.dashboard = generateDashboardData(this.githubData, this.rangeStart);
  }
}

customElements.define("vgd-dashboard", Dashboard);

async function refreshGithubData(startDate, progressCallback) {
  // TODO: Extract to config
  const repos = [
    "vaadin/web-components",
    "vaadin/flow-components",
    "vaadin/react-components",
  ];

  const pulls = (
    await Promise.all(
      repos.map((repo) =>
        github.loadRecentlyMergedPulls(repo, startDate, progressCallback),
      ),
    )
  ).flat();

  const closedWarrantyIssues = (
    await Promise.all(
      repos.map((repo) =>
        github.loadRecentlyClosedIssues(
          repo,
          startDate,
          "BFP",
          progressCallback,
        ),
      ),
    )
  ).flat();

  const openWarrantyIssues = (
    await Promise.all(
      repos.map((repo) => github.loadOpenIssues(repo, "BFP", progressCallback)),
    )
  ).flat();

  const githubData = {
    startDate: dateFnsFormat(startDate, "yyyy-MM-dd"),
    pulls,
    closedWarrantyIssues,
    openWarrantyIssues,
  };

  return githubData;
}

function generateDashboardData(githubData, rangeStart) {
  // TODO: Extract to config
  const contributors = [
    "DiegoCardoso",
    "sissbruecker",
    "tomivirkki",
    "rolfsmeds",
    "vursen",
    "web-padawan",
    "yuriy-fix",
    "ugur-vaadin",
    "vaadin-bot",
    "dependabot[bot]",
  ];

  const pulls = [];
  const features = [];
  const fixes = [];
  const refactors = [];
  const chores = [];
  const contributions = [];

  githubData.pulls.forEach((pull) => {
    const isCherryPick = pull.title.includes("CP:");
    const isInRange = new Date(pull.mergedAt) >= rangeStart;

    if (isCherryPick || !isInRange) {
      return;
    }

    pulls.push(pull);

    if (pull.title.startsWith("feat")) {
      features.push(pull);
    }
    if (pull.title.startsWith("fix")) {
      fixes.push(pull);
    }
    if (pull.title.startsWith("refactor")) {
      refactors.push(pull);
    }
    if (
      pull.title.startsWith("chore") ||
      pull.title.startsWith("test") ||
      pull.title.startsWith("docs")
    ) {
      chores.push(pull);
    }
    if (!contributors.includes(pull.author)) {
      contributions.push(pull);
    }
  });

  const openWarrantyIssues = githubData.openWarrantyIssues;
  const closedWarrantyIssues = githubData.closedWarrantyIssues.filter(
    (issue) => new Date(issue.closedAt) >= rangeStart,
  );

  return {
    githubData,
    pulls,
    features,
    fixes,
    refactors,
    chores,
    contributions,
    openWarrantyIssues,
    closedWarrantyIssues,
  };
}
