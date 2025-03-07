export var surveyCss: any = {
  currentType: "",
  getCss: function () {
    var loc = this.currentType ? this[this.currentType] : defaultV2Css;
    if (!loc) loc = defaultV2Css;
    return loc;
  },
  getAvailableThemes: function() {
    return Object.keys(this).filter(propertyName => ["currentType", "getCss", "getAvailableThemes"].indexOf(propertyName) === -1);
  }
};

export var defaultV2Css = {
  root: "sd-root-modern",
  rootMobile: "sd-root-modern--mobile",
  rootReadOnly: "sd-root--readonly",
  container: "sd-container-modern",
  header: "sd-title sd-container-modern__title",
  bodyContainer: "sv-components-row",
  body: "sv-components-column sv-components-column--expandable sd-body",
  bodyWithTimer: "sd-body--with-timer",
  clockTimerRoot: "sd-timer",
  clockTimerRootTop: "sd-timer--top",
  clockTimerRootBottom: "sd-timer--bottom",
  clockTimerProgress: "sd-timer__progress",
  clockTimerProgressAnimation: "sd-timer__progress--animation",
  clockTimerTextContainer: "sd-timer__text-container",
  clockTimerMinorText: "sd-timer__text--minor",
  clockTimerMajorText: "sd-timer__text--major",
  bodyEmpty: "sd-body sd-body--empty",
  footer: "sd-footer sd-body__navigation sd-clearfix",
  title: "sd-title",
  description: "sd-description",
  logo: "sd-logo",
  logoImage: "sd-logo__image",
  headerText: "sd-header__text",
  headerClose: "sd-hidden",
  navigationButton: "",
  bodyNavigationButton: "sd-btn",
  completedPage: "sd-completedpage",
  timerRoot: "sd-body__timer",
  navigation: {
    complete: "sd-btn--action sd-navigation__complete-btn",
    prev: "sd-navigation__prev-btn",
    next: "sd-navigation__next-btn",
    start: "sd-navigation__start-btn",
    preview: "sd-navigation__preview-btn",
    edit: "",
  },
  panel: {
    asPage: "sd-panel--as-page",
    number: "sd-element__num",
    title: "sd-title sd-element__title sd-panel__title",
    titleExpandable: "sd-element__title--expandable",
    titleNumInline: "sd-element__title--num-inline",
    titleExpanded: "sd-element__title--expanded",
    titleCollapsed: "sd-element__title--collapsed",
    titleDisabled: "sd-element__title--disabled",
    titleOnExpand: "sd-panel__title--expanded",
    titleOnError: "sd-panel__title--error",
    titleBar: "sd-action-title-bar",
    description: "sd-description sd-panel__description",
    container: "sd-element sd-element--complex sd-panel sd-row__panel",
    withFrame: "sd-element--with-frame",
    content: "sd-panel__content",
    icon: "sd-panel__icon",
    iconExpanded: "sd-panel__icon--expanded",
    footer: "sd-panel__footer",
    requiredText: "sd-panel__required-text",
    header: "sd-panel__header sd-element__header sd-element__header--location-top",
    collapsed: "sd-element--collapsed",
    expanded: "sd-element--expanded",
    nested: "sd-element--nested",
    invisible: "sd-element--invisible",
    navigationButton: "",
    compact: "sd-element--with-frame sd-element--compact"
  },
  paneldynamic: {
    mainRoot: "sd-element  sd-question sd-question--paneldynamic sd-element--complex sd-question--complex sd-row__question",
    empty: "sd-question--empty",
    root: "sd-paneldynamic",
    navigation: "sd-paneldynamic__navigation",
    title: "sd-title sd-element__title sd-question__title",
    header: "sd-paneldynamic__header sd-element__header",
    headerTab: "sd-paneldynamic__header-tab",
    button: "sd-action sd-paneldynamic__btn",
    buttonRemove: "sd-action--negative sd-paneldynamic__remove-btn",
    buttonAdd: "sd-paneldynamic__add-btn",
    buttonPrev: "sd-paneldynamic__prev-btn sd-action--icon sd-action",
    buttonPrevDisabled: "sd-action--disabled",
    buttonNextDisabled: "sd-action--disabled",
    buttonNext: "sd-paneldynamic__next-btn sd-action--icon sd-action",
    progressContainer: "sd-paneldynamic__progress-container",
    progress: "sd-progress",
    progressBar: "sd-progress__bar",
    progressText: "sd-paneldynamic__progress-text",
    separator: "sd-paneldynamic__separator",
    panelWrapper: "sd-paneldynamic__panel-wrapper",
    footer: "sd-paneldynamic__footer",
    panelFooter: "sd-paneldynamic__panel-footer",
    footerButtonsContainer: "sd-paneldynamic__buttons-container",
    panelWrapperInRow: "sd-paneldynamic__panel-wrapper--in-row",
    progressBtnIcon: "icon-progressbuttonv2",
    noEntriesPlaceholder: "sd-paneldynamic__placeholder sd-question__placeholder",
    compact: "sd-element--with-frame sd-element--compact",
    tabsRoot: "sd-tabs-toolbar",
    tabsLeft: "sd-tabs-toolbar--left",
    tabsRight: "sd-tabs-toolbar--right",
    tabsCenter: "sd-tabs-toolbar--center",
    tabs: {
      item: "sd-tab-item",
      itemPressed: "sd-tab-item--pressed",
      itemAsIcon: "sd-tab-item--icon",
      itemIcon: "sd-tab-item__icon",
      itemTitle: "sd-tab-item__title"
    }
  },
  progress: "sd-progress sd-body__progress",
  progressTop: "sd-body__progress--top",
  progressBottom: "sd-body__progress--bottom",
  progressBar: "sd-progress__bar",
  progressText: "sd-progress__text",
  progressButtonsContainerCenter: "sd-progress-buttons__container-center",
  progressButtonsContainer: "sd-progress-buttons__container",
  progressButtonsImageButtonLeft: "sd-progress-buttons__image-button-left",
  progressButtonsImageButtonRight: "sd-progress-buttons__image-button-right",
  progressButtonsImageButtonHidden: "sd-progress-buttons__image-button--hidden",
  progressButtonsListContainer: "sd-progress-buttons__list-container",
  progressButtonsList: "sd-progress-buttons__list",
  progressButtonsListElementPassed: "sd-progress-buttons__list-element--passed",
  progressButtonsListElementCurrent:
    "sd-progress-buttons__list-element--current",
  progressButtonsListElementNonClickable:
    "sd-progress-buttons__list-element--nonclickable",
  progressButtonsPageTitle: "sd-progress-buttons__page-title",
  progressButtonsPageDescription: "sd-progress-buttons__page-description",
  progressTextInBar: "sd-hidden",
  page: {
    root: "sd-page sd-body__page",
    emptyHeaderRoot: "sd-page__empty-header",
    title: "sd-title sd-page__title",
    description: "sd-description sd-page__description"
  },
  pageTitle: "sd-title sd-page__title",
  pageDescription: "sd-description sd-page__description",
  row: "sd-row sd-clearfix",
  rowMultiple: "sd-row--multiple",
  rowCompact: "sd-row--compact",
  pageRow: "sd-page__row",
  question: {
    mainRoot: "sd-element sd-question sd-row__question",
    flowRoot: "sd-element sd-question sd-row__question sd-row__question--flow",
    withFrame: "sd-element--with-frame",
    asCell: "sd-table__cell",
    answered: "sd-question--answered",
    header: "sd-question__header sd-element__header",
    headerLeft: "sd-question__header--location--left",
    headerTop: "sd-question__header--location-top sd-element__header--location-top",
    headerBottom: "sd-question__header--location--bottom",
    content: "sd-question__content",
    contentLeft: "sd-question__content--left",
    titleNumInline: "sd-element__title--num-inline",
    titleLeftRoot: "sd-question--left",
    titleOnAnswer: "sd-question__title--answer",
    titleOnError: "sd-question__title--error",
    title: "sd-title sd-element__title sd-question__title",
    titleExpandable: "sd-element__title--expandable",
    titleExpanded: "sd-element__title--expanded",
    titleCollapsed: "sd-element__title--collapsed",
    titleDisabled: "sd-element__title--disabled",
    titleBar: "sd-action-title-bar",
    requiredText: "sd-question__required-text",
    number: "sd-element__num",
    description: "sd-description sd-question__description",
    descriptionUnderInput: "sd-description sd-question__description sd-question__description--under-input",
    comment: "sd-input sd-comment",
    other: "sd-input sd-comment",
    required: "sd-question--required",
    titleRequired: "sd-question__title--required",
    indent: 20,
    footer: "sd-question__footer",
    commentArea: "sd-question__comment-area",
    formGroup: "sd-question__form-group",
    hasError: "sd-question--error",
    collapsed: "sd-element--collapsed",
    expanded: "sd-element--expanded",
    nested: "sd-element--nested",
    invisible: "sd-element--invisible",
    composite: "sd-element--complex",
    disabled: "sd-question--disabled",
  },
  image: {
    mainRoot: "sd-question sd-question--image",
    root: "sd-image",
    image: "sd-image__image",
    adaptive: "sd-image__image--adaptive",
    noImage: "sd-image__no-image",
    noImageSvgIconId: "icon-no-image",
    withFrame: ""
  },
  html: {
    mainRoot: "sd-question sd-row__question sd-question--html",
    root: "sd-html",
    withFrame: ""
  },
  error: {
    root: "sd-question__erbox",
    icon: "",
    item: "",
    tooltip: "sd-question__erbox--tooltip",
    outsideQuestion: "sd-question__erbox--outside-question",
    aboveQuestion: "sd-question__erbox--above-question",
    belowQuestion: "sd-question__erbox--below-question",
    locationTop: "sd-question__erbox--location--top",
    locationBottom: "sd-question__erbox--location--bottom"
  },
  checkbox: {
    root: "sd-selectbase",
    rootRow: "sd-selectbase--row",
    rootMultiColumn: "sd-selectbase--multi-column",
    item: "sd-item sd-checkbox sd-selectbase__item",
    itemOnError: "sd-item--error",
    itemSelectAll: "sd-checkbox--selectall",
    itemNone: "sd-checkbox--none",
    itemDisabled: "sd-item--disabled sd-checkbox--disabled",
    itemChecked: "sd-item--checked sd-checkbox--checked",
    itemHover: "sd-item--allowhover sd-checkbox--allowhover",
    itemInline: "sd-selectbase__item--inline",
    label: "sd-selectbase__label",
    labelChecked: "",
    itemControl: "sd-visuallyhidden sd-item__control sd-checkbox__control",
    itemDecorator: "sd-item__svg sd-checkbox__svg",
    itemSvgIconId: "#icon-v2check",
    controlLabel: "sd-item__control-label",
    materialDecorator: "sd-item__decorator sd-checkbox__decorator",
    other: "sd-input sd-comment sd-selectbase__other",
    column: "sd-selectbase__column",
  },
  radiogroup: {
    root: "sd-selectbase",
    rootRow: "sd-selectbase--row",
    rootMultiColumn: "sd-selectbase--multi-column",
    item: "sd-item sd-radio sd-selectbase__item",
    itemOnError: "sd-item--error",
    itemInline: "sd-selectbase__item--inline",
    label: "sd-selectbase__label",
    labelChecked: "",
    itemDisabled: "sd-item--disabled sd-radio--disabled",
    itemChecked: "sd-item--checked sd-radio--checked",
    itemHover: "sd-item--allowhover sd-radio--allowhover",
    itemControl: "sd-visuallyhidden sd-item__control sd-radio__control",
    itemDecorator: "sd-item__svg sd-radio__svg",
    controlLabel: "sd-item__control-label",
    materialDecorator: "sd-item__decorator sd-radio__decorator",
    other: "sd-input sd-comment sd-selectbase__other",
    clearButton: "",
    column: "sd-selectbase__column"
  },
  boolean: {
    mainRoot: "sd-element sd-question sd-row__question sd-question--boolean",
    root: "sv_qcbc sv_qbln sd-scrollable-container sd-boolean-root",
    rootRadio: "sv_qcbc sv_qbln sd-scrollable-container sd-scrollable-container--compact",
    item: "sd-boolean",
    itemOnError: "sd-boolean--error",
    control: "sd-boolean__control sd-visuallyhidden",
    itemChecked: "sd-boolean--checked",
    itemIndeterminate: "sd-boolean--indeterminate",
    itemDisabled: "sd-boolean--disabled",
    itemHover: "sd-boolean--allowhover",
    label: "sd-boolean__label",
    switch: "sd-boolean__switch",
    disabledLabel: "sd-checkbox__label--disabled",
    sliderText: "sd-boolean__thumb-text",
    slider: "sd-boolean__thumb",
    sliderGhost: "sd-boolean__thumb-ghost",
    //radio
    radioItem: "sd-item",
    radioItemChecked: "sd-item--checked sd-radio--checked",
    radioLabel: "sd-selectbase__label",
    radioControlLabel: "sd-item__control-label",
    radioFieldset: "sd-selectbase",
    itemRadioDecorator: "sd-item__svg sd-radio__svg",
    materialRadioDecorator: "sd-item__decorator sd-radio__decorator",
    itemRadioControl: "sd-visuallyhidden sd-item__control sd-radio__control",
    //end radio
    //checkbox
    rootCheckbox: "sd-selectbase",
    checkboxItem: "sd-item sd-selectbase__item sd-checkbox",
    checkboxLabel: "sd-selectbase__label",
    checkboxItemOnError: "sd-item--error",
    checkboxItemIndeterminate: "sd-checkbox--intermediate",
    checkboxItemChecked: "sd-item--checked sd-checkbox--checked",
    checkboxItemDecorator: "sd-item__svg sd-checkbox__svg",
    checkboxItemDisabled: "sd-checkbox--disabled",
    controlCheckbox: "sd-visuallyhidden sd-item__control sd-checkbox__control",
    checkboxMaterialDecorator: "sd-item__decorator sd-checkbox__decorator",
    checkboxControlLabel: "sd-item__control-label",
    svgIconCheckedId: "#icon-v2check",
  },
  text: {
    root: "sd-input sd-text",
    small: "sd-row__question--small",
    controlDisabled: "sd-input--disabled",
    content: "sd-text__content sd-question__content",
    remainingCharacterCounter: "sd-remaining-character-counter",
    onError: "sd-input--error"
  },
  multipletext: {
    root: "sd-multipletext",
    itemLabel: "sd-multipletext__item-container sd-input",
    itemLabelOnError: "sd-multipletext__item-container--error",
    item: "sd-multipletext__item",
    itemTitle: "sd-multipletext__item-title",
    content: "sd-multipletext__content sd-question__content",
    row: "sd-multipletext__row",
    cell: "sd-multipletext__cell"
  },
  dropdown: {
    root: "sd-selectbase",
    popup: "sv-dropdown-popup",
    small: "sd-row__question--small",
    selectWrapper: "",
    other: "sd-input sd-comment sd-selectbase__other",
    onError: "sd-input--error",
    label: "sd-selectbase__label",
    item: "sd-item sd-radio sd-selectbase__item",
    itemDisabled: "sd-item--disabled sd-radio--disabled",
    itemChecked: "sd-item--checked sd-radio--checked",
    itemHover: "sd-item--allowhover sd-radio--allowhover",
    itemControl: "sd-visuallyhidden sd-item__control sd-radio__control",
    itemDecorator: "sd-item__svg sd-radio__svg",
    cleanButton: "sd-dropdown_clean-button",
    cleanButtonSvg: "sd-dropdown_clean-button-svg",
    cleanButtonIconId: "icon-clear",
    control: "sd-input sd-dropdown",
    controlInputFieldComponent: "sd-dropdown__input-field-component",
    controlValue: "sd-dropdown__value",
    controlDisabled: "sd-input--disabled",
    controlEmpty: "sd-dropdown--empty",
    controlLabel: "sd-item__control-label",
    filterStringInput: "sd-dropdown__filter-string-input",
    materialDecorator: "sd-item__decorator sd-radio__decorator",
    hintPrefix: "sd-dropdown__hint-prefix",
    hintSuffix: "sd-dropdown__hint-suffix"
  },
  imagepicker: {
    mainRoot: "sd-element sd-question sd-row__question",
    root: "sd-selectbase sd-imagepicker",
    rootColumn: "sd-imagepicker--column",
    item: "sd-imagepicker__item",
    itemOnError: "sd-imagepicker__item--error",
    itemInline: "sd-imagepicker__item--inline",
    itemChecked: "sd-imagepicker__item--checked",
    itemDisabled: "sd-imagepicker__item--disabled",
    itemHover: "sd-imagepicker__item--allowhover",
    label: "sd-imagepicker__label",
    itemDecorator: "sd-imagepicker__item-decorator",
    imageContainer: "sd-imagepicker__image-container",
    itemControl: "sd-imagepicker__control sd-visuallyhidden",
    image: "sd-imagepicker__image",
    itemText: "sd-imagepicker__text",
    other: "sd-input sd-comment",
    itemNoImage: "sd-imagepicker__no-image",
    itemNoImageSvgIcon: "sd-imagepicker__no-image-svg",
    itemNoImageSvgIconId: "icon-no-image",
    column: "sd-selectbase__column sd-imagepicker__column",
    checkedItemDecorator: "sd-imagepicker__check-decorator",
    checkedItemSvgIcon: "sd-imagepicker__check-icon",
    checkedItemSvgIconId: "icon-v2check_24x24",
  },
  matrix: {
    mainRoot: "sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table",
    tableWrapper: "sd-matrix sd-table-wrapper",
    root: "sd-table sd-matrix__table",
    rootVerticalAlignTop: "sd-table--align-top",
    rootVerticalAlignMiddle: "sd-table--align-middle",
    rootAlternateRows: "sd-table--alternate-rows",
    rowError: "sd-matrix__row--error",
    cell: "sd-table__cell sd-matrix__cell",
    row: "sd-table__row",
    headerCell: "sd-table__cell sd-table__cell--header",
    rowTextCell: "sd-table__cell sd-matrix__cell sd-table__cell--row-text",
    label: "sd-item sd-radio sd-matrix__label",
    itemOnError: "sd-item--error",
    itemValue: "sd-visuallyhidden sd-item__control sd-radio__control",
    itemChecked: "sd-item--checked sd-radio--checked",
    itemDisabled: "sd-item--disabled sd-radio--disabled",
    itemHover: "sd-radio--allowhover",
    materialDecorator: "sd-item__decorator sd-radio__decorator",
    itemDecorator: "sd-item__svg sd-radio__svg",
    cellText: "sd-matrix__text",
    cellTextSelected: "sd-matrix__text--checked",
    cellTextDisabled: "sd-matrix__text--disabled",
    cellResponsiveTitle: "sd-matrix__responsive-title",
    compact: "sd-element--with-frame sd-element--compact"
  },
  matrixdropdown: {
    mainRoot: "sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table",
    rootScroll: "sd-question--scroll",
    root: "sd-table sd-matrixdropdown",
    rootVerticalAlignTop: "sd-table--align-top",
    rootVerticalAlignMiddle: "sd-table--align-middle",
    tableWrapper: "sd-table-wrapper",
    rootAlternateRows: "sd-table--alternate-rows",
    cell: "sd-table__cell",
    itemCell: "sd-table__cell--item",
    row: "sd-table__row",
    headerCell: "sd-table__cell sd-table__cell--header",
    rowTextCell: "sd-table__cell sd-table__cell--row-text",
    cellRequiredText: "sd-question__required-text",
    detailButton: "sd-table__cell--detail-button",
    detailButtonExpanded: "sd-table__cell--detail-button--expanded",
    detailIcon: "sd-detail-panel__icon",
    detailIconExpanded: "sd-detail-panel__icon--expanded",
    detailIconId: "icon-expanddetail",
    detailIconExpandedId: "icon-collapsedetail",
    actionsCell: "sd-table__cell sd-table__cell--actions",
    emptyCell: "sd-table__cell--empty",
    verticalCell: "sd-table__cell--vertical",
    cellQuestionWrapper: "sd-table__question-wrapper",
    compact: "sd-element--with-frame sd-element--compact"
  },
  matrixdynamic: {
    mainRoot: "sd-element sd-question sd-row__question sd-element--complex sd-question--complex sd-question--table",
    rootScroll: "sd-question--scroll",
    empty: "sd-question--empty",
    root: "sd-table sd-matrixdynamic",
    tableWrapper: "sd-table-wrapper",
    content: "sd-matrixdynamic__content sd-question__content",
    cell: "sd-table__cell",
    row: "sd-table__row",
    itemCell: "sd-table__cell--item",
    headerCell: "sd-table__cell sd-table__cell--header",
    rowTextCell: "sd-table__cell sd-table__cell--row-text",
    cellRequiredText: "sd-question__required-text",
    button: "sd-action sd-matrixdynamic__btn",
    detailRow: "sd-table__row sd-table__row--detail",
    detailButton: "sd-table__cell--detail-button",
    detailButtonExpanded: "sd-table__cell--detail-button--expanded",
    detailIcon: "sd-detail-panel__icon",
    detailIconExpanded: "sd-detail-panel__icon--expanded",
    detailIconId: "icon-expanddetail",
    detailIconExpandedId: "icon-collapsedetail",
    detailPanelCell: "sd-table__cell--detail-panel",
    actionsCell: "sd-table__cell sd-table__cell--actions",
    buttonAdd: "sd-matrixdynamic__add-btn",
    buttonRemove: "sd-action--negative sd-matrixdynamic__remove-btn",
    iconAdd: "",
    iconRemove: "",
    dragElementDecorator: "sd-drag-element__svg",
    iconDragElement: "#icon-v2dragelement_16x16",
    footer: "sd-matrixdynamic__footer",
    emptyRowsSection: "sd-matrixdynamic__placeholder sd-question__placeholder",
    iconDrag: "sv-matrixdynamic__drag-icon",
    ghostRow: "sv-matrix-row--drag-drop-ghost-mod",
    emptyCell: "sd-table__cell--empty",
    verticalCell: "sd-table__cell--vertical",
    cellQuestionWrapper: "sd-table__question-wrapper",
    compact: "sd-element--with-frame sd-element--compact"
  },
  rating: {
    rootDropdown: "sd-scrollable-container sd-scrollable-container--compact sd-selectbase",
    root: "sd-scrollable-container sd-rating",
    rootWrappable: "sd-scrollable-container sd-rating sd-rating--wrappable",
    item: "sd-rating__item",
    itemOnError: "sd-rating__item--error",
    itemHover: "sd-rating__item--allowhover",
    selected: "sd-rating__item--selected",
    itemStar: "sd-rating__item-star",
    itemStarOnError: "sd-rating__item-star--error",
    itemStarHover: "sd-rating__item-star--allowhover",
    itemStarSelected: "sd-rating__item-star--selected",
    itemStarDisabled: "sd-rating__item-star--disabled",
    itemStarHighlighted: "sd-rating__item-star--highlighted",
    itemStarUnhighlighted: "sd-rating__item-star--unhighlighted",
    itemStarSmall: "sd-rating__item-star--small",
    itemSmiley: "sd-rating__item-smiley",
    itemSmileyOnError: "sd-rating__item-smiley--error",
    itemSmileyHover: "sd-rating__item-smiley--allowhover",
    itemSmileySelected: "sd-rating__item-smiley--selected",
    itemSmileyDisabled: "sd-rating__item-smiley--disabled",
    itemSmileyHighlighted: "sd-rating__item-star--highlighted",
    itemSmileyScaleColored: "sd-rating__item-smiley--scale-colored",
    itemSmileyRateColored: "sd-rating__item-smiley--rate-colored",
    itemSmileySmall: "sd-rating__item-smiley--small",
    minText: "sd-rating__item-text sd-rating__min-text",
    itemText: "sd-rating__item-text",
    maxText: "sd-rating__item-text sd-rating__max-text",
    itemDisabled: "sd-rating__item--disabled",
    itemFixedSize: "sd-rating__item--fixed-size",
    control: "sd-input sd-dropdown",
    itemSmall: "sd-rating--small",
    controlValue: "sd-dropdown__value",
    controlDisabled: "sd-input--disabled",
    controlEmpty: "sd-dropdown--empty",
    filterStringInput: "sd-dropdown__filter-string-input",
    popup: "sv-dropdown-popup",
    onError: "sd-input--error",
  },
  comment: {
    root: "sd-input sd-comment",
    small: "sd-row__question--small",
    controlDisabled: "sd-input--disabled",
    content: "sd-comment__content sd-question__content",
    remainingCharacterCounter: "sd-remaining-character-counter",
    onError: "sd-input--error"
  },
  expression: "sd-expression",
  file: {
    root: "sd-file",
    other: "sd-input sd-comment",
    placeholderInput: "sd-visuallyhidden",
    preview: "sd-file__preview",
    fileSign: "",
    fileList: "sd-file__list",
    fileSignBottom: "sd-file__sign",
    dragArea: "sd-file__drag-area",
    dragAreaActive: "sd-file__drag-area--active",
    fileDecorator: "sd-file__decorator",
    onError: "sd-file__decorator--error",
    fileDecoratorDrag: "sd-file__decorator--drag",
    fileInput: "sd-visuallyhidden",
    noFileChosen: "sd-description sd-file__no-file-chosen",
    chooseFile: "sd-file__choose-btn",
    chooseFileAsText: "sd-action sd-file__choose-btn--text",
    chooseFileAsTextDisabled: "sd-action--disabled",
    chooseFileAsIcon: "sd-context-btn sd-file__choose-btn--icon",
    chooseFileIconId: "icon-choosefile",
    disabled: "sd-file__choose-btn--disabled",
    removeButton: "sd-context-btn sd-context-btn--negative sd-file__btn sd-file__clean-btn",
    removeButtonBottom: "",
    removeButtonIconId: "icon-clear",
    removeFile: "sd-hidden",
    removeFileSvg: "",
    removeFileSvgIconId: "icon-delete",
    wrapper: "sd-file__wrapper",
    defaultImage: "sd-file__default-image",
    defaultImageIconId: "icon-defaultfile",
    leftIconId: "icon-arrowleft",
    rightIconId: "icon-arrowright",
    removeFileButton: "sd-context-btn sd-context-btn--negative sd-file__remove-file-button",
    dragAreaPlaceholder: "sd-file__drag-area-placeholder",
    imageWrapper: "sd-file__image-wrapper",
    single: "sd-file--single",
    singleImage: "sd-file--single-image",
    mobile: "sd-file--mobile",
  },
  signaturepad: {
    mainRoot: "sd-element sd-question sd-question--signature sd-row__question",
    root: "sd-signaturepad sjs_sp_container",
    small: "sd-row__question--small",
    controls: "sjs_sp_controls sd-signaturepad__controls",
    placeholder: "sjs_sp_placeholder",
    clearButton: "sjs_sp_clear sd-context-btn sd-context-btn--negative sd-signaturepad__clear",
    clearButtonIconId: "icon-clear"
  },
  saveData: {
    root: "sv-save-data_root",
    info: "sv-save-data_info",
    error: "sv-save-data_error",
    success: "sv-save-data_success",
    button: "sv-save-data_button",
    shown: "sv-save-data_root--shown"
  },
  window: {
    root: "sv_window",
    body: "sv_window_content",
    header: {
      root: "sv_window_title",
      title: "",
      button: "",
      buttonExpanded: "",
      buttonCollapsed: ""
    }
  },
  ranking: {
    root: "sv-ranking",
    rootMobileMod: "sv-ranking--mobile",
    rootDragMod: "sv-ranking--drag",
    rootDisabled: "sd-ranking--disabled",
    rootDesignMode: "sv-ranking--design-mode",
    rootDragHandleAreaIcon: "sv-ranking--drag-handle-area-icon",
    item: "sv-ranking-item",
    itemContent: "sv-ranking-item__content sd-ranking-item__content",
    itemIndex: "sv-ranking-item__index sd-ranking-item__index",
    itemIndexEmptyMode: "sv-ranking-item__index--empty sd-ranking-item__index--empty",
    // itemText: "sv-ranking-item__text",
    controlLabel: "sv-ranking-item__text",
    itemGhostNode: "sv-ranking-item__ghost",
    itemIconContainer: "sv-ranking-item__icon-container",
    itemIcon: "sv-ranking-item__icon",
    itemIconHoverMod: "sv-ranking-item__icon--hover",
    itemIconFocusMod: "sv-ranking-item__icon--focus",
    itemGhostMod: "sv-ranking-item--ghost",
    itemDragMod: "sv-ranking--drag",
    itemOnError: "sv-ranking-item--error",
  },
  buttongroup: {
    root: "sv-button-group",
    item: "sv-button-group__item",
    itemIcon: "sv-button-group__item-icon",
    itemDecorator: "sv-button-group__item-decorator",
    itemCaption: "sv-button-group__item-caption",
    itemHover: "sv-button-group__item--hover",
    itemSelected: "sv-button-group__item--selected",
    itemDisabled: "sv-button-group__item--disabled",
    itemControl: "sv-visuallyhidden",
  },
  list: {
    root: "sv-list__container sd-list",
    item: "sv-list__item sd-list__item",
    itemBody: "sv-list__item-body sd-list__item-body",
    itemSelected: "sv-list__item--selected sd-list__item--selected",
    itemFocused: "sv-list__item--focused sd-list__item--focused",
  },
  actionBar: {
    root: "sd-action-bar",
    item: "sd-action",
    defaultSizeMode: "",
    smallSizeMode: "",
    itemPressed: "sd-action--pressed",
    itemAsIcon: "sd-action--icon",
    itemIcon: "sd-action__icon",
    itemTitle: "sd-action__title",
  },
  variables: {
    mobileWidth: "--sd-mobile-width",
    imagepickerGapBetweenItems: "--sd-imagepicker-gap",
    themeMark: "--sv-defaultV2-mark"
  },
  tagbox: {
    root: "sd-selectbase",
    popup: "sv-dropdown-popup",
    small: "sd-row__question--small",
    selectWrapper: "",
    other: "sd-input sd-comment sd-selectbase__other",
    onError: "sd-input--error",
    label: "sd-selectbase__label",
    itemSvgIconId: "#icon-v2check",
    item: "sd-item sd-checkbox sd-selectbase__item",
    itemDisabled: "sd-item--disabled sd-checkbox--disabled",
    itemChecked: "sd-item--checked sd-checkbox--checked",
    itemHover: "sd-item--allowhover sd-checkbox--allowhover",
    itemControl: "sd-visuallyhidden sd-item__control sd-checkbox__control",
    itemDecorator: "sd-item__svg sd-checkbox__svg",
    cleanButton: "sd-tagbox_clean-button sd-dropdown_clean-button",
    cleanButtonSvg: "sd-tagbox_clean-button-svg sd-dropdown_clean-button-svg",
    cleanButtonIconId: "icon-clear",
    cleanItemButton: "sd-tagbox-item_clean-button",
    cleanItemButtonSvg: "sd-tagbox-item_clean-button-svg",
    cleanItemButtonIconId: "icon-clear_16x16",
    control: "sd-input sd-tagbox sd-dropdown",
    controlValue: "sd-tagbox__value sd-dropdown__value",
    controlValueItems: "sd-tagbox__value-items",
    placeholderInput: "sd-tagbox__placeholder",
    controlDisabled: "sd-input--disabled",
    controlEmpty: "sd-dropdown--empty sd-tagbox--empty",
    controlLabel: "sd-item__control-label",
    filterStringInput: "sd-tagbox__filter-string-input sd-dropdown__filter-string-input",
    materialDecorator: "sd-item__decorator sd-checkbox__decorator",
    hint: "sd-tagbox__hint",
    hintPrefix: "sd-dropdown__hint-prefix sd-tagbox__hint-prefix",
    hintSuffix: "sd-dropdown__hint-suffix sd-tagbox__hint-suffix",
    hintSuffixWrapper: "sd-tagbox__hint-suffix-wrapper"
  },
};

export const defaultV2ThemeName = "defaultV2";
surveyCss[defaultV2ThemeName] = defaultV2Css;