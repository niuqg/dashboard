// Copyright 2015 Google Inc. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import module from 'poddetail/poddetail_module';

describe('Container info component', () => {
  /** @type {!poddetail/containerinfo_component.ContainerInfoController} */
  let ctrl;
  /** @type {!Array<!backendApi.Container>} */
  let containers;

  beforeEach(() => {
    angular.mock.module(module.name);

    angular.mock.inject(($componentController, $rootScope) => {
      containers = [];
      ctrl = $componentController(
          'kdContainerInfo', {$scope: $rootScope},
          {namespace: 'foo-namespace', 'containers': containers});
    });
  });

  it('should compute config map href', () => {
    let cmkr = {Name: 'foo', key: 'bar'};
    expect(ctrl.getEnvConfigMapHref(cmkr)).toBe('#/configmap/foo-namespace/foo');
  });
});
